import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CashorCard = ({title}) => {
  return (
    <TouchableOpacity style={styles.backgroundStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CashorCard;

const styles = StyleSheet.create({
  backgroundStyle: {
    borderWidth: 2,
    borderColor: '#0F5891',
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    width: 130,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 25,
  },
  textStyle: {
    fontSize: 19,
    fontFamily: 'Montserrat-Bold',
    color: '#0F5891',
  },
});
