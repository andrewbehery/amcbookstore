import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContinueButton = () => {
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.continueStyle}>CONTINUE</Text>
    </View>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  buttonStyle: {
    width: 698,
    marginHorizontal: 51,
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
