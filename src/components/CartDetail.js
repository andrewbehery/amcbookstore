import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CartDetail = ({item, cart, setCart}) => {
  const [pickerSelector, setpickerSelector] = useState(1);
  console.log(pickerSelector);

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.titleAndAuthorStyle}>
        {item.bookTitle} — {item.author}
      </Text>
      <View style={styles.trashButtonStyle}>
        <Icon style={styles.trashStyle} name="trash" />
      </View>
      <Text style={styles.quantityTextStyle}>Quantity:</Text>
      <TouchableOpacity>
        <View style={styles.quantityStyle}>
          <Picker
            selectedValue={pickerSelector}
            style={{height: 50, width: 90}}
            onValueChange={(itemValue, itemIndex) => {
              setpickerSelector(itemValue);
            }}
            mode="dropdown">
            <Picker.Item label="  1  " value={1} />
            <Picker.Item label="  2  " value={2} />
            <Picker.Item label="  3  " value={3} />
            <Picker.Item label="  4  " value={4} />
            <Picker.Item label="  5  " value={5} />
            <Picker.Item label="  6  " value={6} />
            <Picker.Item label="  7  " value={7} />
            <Picker.Item label="  8  " value={8} />
            <Picker.Item label="  9  " value={9} />
          </Picker>
        </View>
      </TouchableOpacity>
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
  modalStyle: {
    flex: 1,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 400,
  },
});
