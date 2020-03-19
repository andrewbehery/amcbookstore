import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CartDetail = ({item, index}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.titleAndAuthorStyle}>
        {item.bookTitle} — {item.author}
      </Text>
      <View style={styles.trashButtonStyle}>
        <Icon style={styles.trashStyle} name="trash" />
      </View>
      <Text style={styles.quantityTextStyle}>Quantity:</Text>
      <View style={styles.quantityStyle}>
        <Text style={styles.itemQuantityStyle}>{item.quantity}</Text>
        <Icon style={styles.chevronStyle} name="chevron-down" />
      </View>
      <Text style={styles.bookPriceStyle}>{`$${Number(
        item.bookPrice / 100,
      ).toFixed(2)}`}</Text>
    </View>
  );
};

export default CartDetail;

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  titleAndAuthorStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    flex: 4,
    color: '#707070',
  },
  trashStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  trashButtonStyle: {
    borderRadius: 8,
    backgroundColor: '#D84343',
    flex: 0.3,
    marginRight: 20,
    height: 30,
    justifyContent: 'center',
  },
  quantityTextStyle: {
    marginRight: 10,
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
  },
  quantityStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#EBBE41',
    borderRadius: 5,
    borderWidth: 1,
    flex: 0.3,
    marginRight: 9,
    paddingLeft: 3,
    height: 30,
  },
  itemQuantityStyle: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    marginLeft: 5,
  },
  chevronStyle: {
    color: '#EBBE41',
  },
  bookPriceStyle: {
    flex: 1,
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    marginLeft: 10,
  },
});
