import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import searchDataCities from '../services/searchCities';


export default function Search({ navigation }) {
  const [data, setData] = useState({});

  function goToWeatherCity(item) {
    item && navigation.navigate('WeatherCity', {
      info: {
        insee: item.insee,
        name: item.name
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher une ville"
        onChangeText={async (text) => {
          const rawData = await searchDataCities(text);
          setData(rawData);
        }}
      />
      <FlatList
          data={data.cities}
          keyExtractor={({ insee }, index) => insee}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text onPress={() => goToWeatherCity(item)}>{item.name}</Text>
              <Text >{item.cp}</Text>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 10
  },
  container: {
    margin: 20
  }, 
  card: {
    backgroundColor: '#EDF6FD',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  }
});

