import React from 'react';
import {StyleSheet, Text, View, YellowBox} from 'react-native';
import CashorCard from '../components/CashorCard';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const CheckoutScreen = ({route, navigation}) => {
  const {total} = route.params;
  const {checkout} = route.params;
  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.questionStyle}>How Would You Like To Pay?</Text>
      <View style={{flexDirection: 'row'}}>
        <CashorCard title="CASH" />
        <CashorCard title="CARD" />
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  backgroundStyle: {
    alignItems: 'center',
    marginTop: 160,
    height: 1120,
  },
  questionStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#0F5891',
  },
});
