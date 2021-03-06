import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CartDetail from './CartDetail';

const CartList = ({cart, changeQuantity, deleteBook, title}) => {
  return (
    <View style={styles.backgroundStyle}>
      {cart.length > 0 ? <Text style={styles.titleStyle}>{title}</Text> : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={cart}
        keyExtractor={book => book.bookTitle}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                backgroundColor: index % 2 === 0 ? '#ECF3F8' : '#0F589100',
                width: 685.5,
                borderRadius: 5,
              }}>
              <CartDetail
                item={item}
                changeQuantity={changeQuantity}
                cart={cart}
                deleteBook={deleteBook}
              />
            </View>
          );
        }}></FlatList>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  backgroundStyle: {
    marginLeft: 53,
    height: 400,
    marginBottom: 10,
  },
  titleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginBottom: 15,
  },
});
