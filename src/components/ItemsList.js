import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ItemsDetail from './ItemsDetail';

const ItemsList = ({items, title, cart, addToCart}) => {
  return (
    <View style={styles.backgroundStyle}>
      {items.length > 0 ? <Text style={styles.titleStyle}>{title}</Text> : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ItemsDetail item={item} cart={cart} addToCart={addToCart} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    marginBottom: 75,
    borderRadius: 5,
    marginLeft: 53,
    marginRight: 71,
  },
  titleStyle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 16,
    marginTop: 23,
  },
});

export default ItemsList;
