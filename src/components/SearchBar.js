import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon style={styles.iconStyle} name="search" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Tap to Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F2F0F1',
    height: 51,
    borderRadius: 5,
    marginHorizontal: 49,
    flexDirection: 'row',
  },
  inputStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    flex: 1,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
});
