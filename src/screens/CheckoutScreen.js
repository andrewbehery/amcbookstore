import React, {useState} from 'react';
import {StyleSheet, Text, View, YellowBox} from 'react-native';
import CashorCard from '../components/CashorCard';
import CashInstructions from '../components/CashInstructions';
import CardInstructions from '../components/CardInstructions';
import {TouchableOpacity} from 'react-native-gesture-handler';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const CheckoutScreen = ({route, navigation}) => {
  const {total} = route.params;
  const {checkout} = route.params;
  const {emptyTerm} = route.params;
  const {emptyCart} = route.params;
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
          navigation={navigation}
          emptyTerm={emptyTerm}
          emptyCart={emptyCart}
        />
      ) : null}
      {cashOrCardToggle === 'CARD' ? (
        <CardInstructions
          total={total}
          checkout={checkout}
          emptyTerm={emptyTerm}
          emptyCart={emptyCart}
          navigation={navigation}
        />
      ) : null}
      <View style={styles.bottomButtonsStyle}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.bottomTextStyle}>Return To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            emptyTerm();
            emptyCart();
            navigation.goBack();
          }}>
          <Text style={styles.bottomTextStyle}>Cancel Transaction</Text>
        </TouchableOpacity>
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
  totalStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    marginTop: 35,
  },
  bottomButtonsStyle: {
    flexGrow: 1,
    flexDirection: 'row',
    width: 770,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  bottomTextStyle: {
    fontSize: 20,
    color: '#0F5891',
    fontFamily: 'Montserrat-Bold',
  },
});
