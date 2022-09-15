import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import searchCities from '../services/searchCities';

const Search = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="City name"
        onSubmitEditing={searchCities()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
});

export default Search;