import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import catalog from '../api/catalog';
import ItemsList from '../components/ItemsList';
import CartList from '../components/CartList';
import ContinueButton from '../components/ContinueButton';
import useReaderSDKauth from '../hooks/useReaderSDKauth';
import useCheckout from '../hooks/useCheckout';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const authorizeReaderSDK = useReaderSDKauth();
  const checkout = useCheckout();

  /* useEffect(() => {
    authorizeReaderSDK();
  }, []); */

  const calculateTotal = (cartList, currentTotal) => {
    let tot = 0;
    cartList.forEach(book => {
      tot += book.quantity * book.bookPrice;
    });
    setTotal(tot);
  };

  useEffect(() => {
    calculateTotal(cart, total);
  }, [cart, total]);

  const deleteBook = bookTitle => {
    setCart(cart.filter(book => book.bookTitle !== bookTitle));
  };

  const searchApi = async SearchTerm => {
    if (SearchTerm === '') {
      return setItems([]);
    }
    try {
      const response = await catalog.post('/search', {
        object_types: ['ITEM'],
        query: {
          prefix_query: {
            attribute_name: 'name',
            attribute_prefix: SearchTerm,
          },
        },
        limit: 100,
      });
      setItems(response.data.objects);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  const SearchTextChanged = term => {
    setTerm(term);
    searchApi(term);
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        clear={() => {
          setTerm('');
          searchApi('');
        }}
        onTermChange={SearchTextChanged}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ItemsList
        items={items}
        title="Tap Which Book(s) You Want To Buy:"
        addToCart={newItem => setCart([...cart, newItem])}
        cart={cart}
      />

      {Array.isArray(items) && items.length > 0 ? (
        <View style={styles.lineStyle} />
      ) : null}
      <CartList
        cart={cart}
        changeQuantity={newCart => {
          setCart([...newCart]);
        }}
        deleteBook={deleteBook}
        title="Your Cart:"
      />
      {cart.length > 0 ? (
        <>
          <Text style={styles.totalStyle}>
            Total: {`$${Number(total / 100).toFixed(2)}`}
          </Text>
          <ContinueButton
            total={total}
            checkout={checkout}
            navigation={navigation}
            emptyTerm={() => {
              setTerm('');
              SearchTextChanged('');
            }}
            emptyCart={() => setCart([])}
          />
        </>
      ) : null}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 105,
    flex: 1,
  },
  lineStyle: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    marginLeft: -20,
    width: 686,
    alignSelf: 'center',
  },
  totalStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 52,
  },
});
