import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ItemsDetail = ({item, addToCart, cart}) => {
  const bookTitle = item.item_data.name;
  const bookPrice =
    item.item_data.variations[0].item_variation_data.price_money.amount;
  const author = item.item_data.description;
  const cartItem = {bookTitle, bookPrice, author, quantity: 1};

  const checkCart = (item, cartList) => {
    console.log(item);
    cartList.find(book => book.bookTitle === item.bookTitle)
      ? null
      : addToCart(item);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        checkCart(cartItem, cart);
      }}>
      <View style={styles.backgroundStyle}>
        <Text style={styles.nameStyle}>
          {bookTitle}
          {author == '' ? null : <Text> — {author}</Text>}
        </Text>
        <Text style={styles.priceStyle}>{`$${Number(bookPrice / 100).toFixed(
          2,
        )}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#0F5891',
    marginBottom: 19.76,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    elevation: 3,
  },
  nameStyle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: '#0F5891',
    flex: 7,
    marginRight: 30,
    marginLeft: 11,
  },
  priceStyle: {
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    color: '#0F5891',
    marginRight: 5,
    flex: 1,
  },
});

export default ItemsDetail;
