import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ContinueButton = () => {
  return (
    <View style={styles.buttonStyle}>
      <Text>hallo</Text>
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
});
