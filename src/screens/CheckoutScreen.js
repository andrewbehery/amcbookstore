import React, {useState} from 'react';
import {StyleSheet, Text, View, YellowBox} from 'react-native';
import CashorCard from '../components/CashorCard';
import CashInstructions from '../components/CashInstructions';
import CardInstructions from '../components/CardInstructions';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const CheckoutScreen = ({route, navigation}) => {
  const {total} = route.params;
  const {checkout} = route.params;
  const [cashOrCardToggle, setCashOrCardToggle] = useState('');

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.questionStyle}>How Would You Like To Pay?</Text>
      <View style={{flexDirection: 'row'}}>
        <CashorCard title="CASH" toggle={() => setCashOrCardToggle('CASH')} />
        <CashorCard title="CARD" toggle={() => setCashOrCardToggle('CARD')} />
      </View>
      <Text style={styles.totalStyle}>
        TOTAL: {`$${Number(total / 100).toFixed(2)}`}
      </Text>
      {cashOrCardToggle === 'CASH' ? (
        <CashInstructions
          total={total}
          checkout={checkout}
          navigation={navigation}
        />
      ) : null}
      {cashOrCardToggle === 'CARD' ? <CardInstructions /> : null}
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
  totalStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 35,
  },
});
