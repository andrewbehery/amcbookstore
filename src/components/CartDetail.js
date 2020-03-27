import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CartDetail = ({item, cart, setCart, deleteBook}) => {
  const [pickerSelector, setpickerSelector] = useState(1);
  const pickerValues = [];
  for (let i = 1; i < 10; i++) {
    pickerValues.push(i);
  }

  const updateQuantity = (cartList, item, newQuantity) => {
    item.quantity = newQuantity;
    setCart(cartList);
  };

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.titleAndAuthorStyle}>
        {item.bookTitle} — {item.author}
      </Text>
      <TouchableOpacity
        style={styles.trashButtonStyle}
        onPress={() => deleteBook(item.bookTitle)}>
        <Icon style={styles.trashStyle} name="trash" />
      </TouchableOpacity>
      <Text style={styles.quantityTextStyle}>Quantity:</Text>
      <TouchableOpacity>
        <View style={styles.quantityStyle}>
          <Picker
            selectedValue={pickerSelector}
            style={{height: 50, width: 90}}
            onValueChange={(itemValue, itemIndex) => {
              setpickerSelector(itemValue);
              updateQuantity(cart, item, itemValue);
            }}
            mode="dropdown">
            {pickerValues.map((value, index) => {
              return (
                <Picker.Item key={index} label={`  ${value}  `} value={value} />
              );
            })}
          </Picker>
        </View>
      </TouchableOpacity>
      <Text style={styles.bookPriceStyle}>{`$${(
        Number(item.bookPrice / 100) * item.quantity
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
    marginRight: 20,
  },
  trashStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'white',
  },
  trashButtonStyle: {
    borderRadius: 8,
    backgroundColor: '#D84343',
    flex: 0.6,
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
  bookPriceStyle: {
    flex: 0.6,
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    marginLeft: 12,
  },
});
