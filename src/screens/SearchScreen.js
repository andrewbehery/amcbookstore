import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/SearchBar';
import catalog from '../api/catalog';
import ItemsList from '../components/ItemsList';
import CartList from '../components/CartList';
import ContinueButton from '../components/ContinueButton';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [cart, setCart] = useState([]);

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

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        term={term}
        clear={() => {
          setTerm('');
          searchApi('');
        }}
        onTermChange={newTerm => setTerm(newTerm)}
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
        setCart={setCart}
        deleteBook={deleteBook}
        title="Your Cart:"
      />
      <ContinueButton />
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
});
