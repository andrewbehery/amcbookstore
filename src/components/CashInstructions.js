import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CashInstructions = ({total, checkout}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        style={{width: 400, height: 440}}
        source={require('../assets/Images/swipe2.jpg')}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          checkout(total);
        }}>
        <Text style={styles.continueStyle}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CashInstructions;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: 800,
    height: 701,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    width: 698,
    height: 48,
    backgroundColor: '#EBBE41',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#0F5891',
  },
});
