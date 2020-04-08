import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardInstructions = ({navigation, emptyTerm, emptyCart}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>Put Cash In This Box, On Your Right</Text>
      <Image
        style={{width: 500, height: 500}}
        source={require('../assets/Images/cashbox.jpeg')}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          emptyTerm();
          emptyCart();
          navigation.goBack();
        }}>
        <Text style={styles.doneStyle}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardInstructions;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: 800,
    height: 701,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
  },
  buttonStyle: {
    width: 698,
    height: 48,
    backgroundColor: '#EBBE41',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: '#0F5891',
  },
});
