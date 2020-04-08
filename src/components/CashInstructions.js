import React from 'react';
import {StyleSheet, Image, View} from 'react-native';

const CashInstructions = () => {
  return (
    <View style={styles.backgroundStyle}>
      <Image
        style={{width: 400, height: 440}}
        source={require('../assets/Images/swipe2.jpg')}
      />
    </View>
  );
};

export default CashInstructions;

const styles = StyleSheet.create({
  backgroundStyle: {
    width: 800,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
