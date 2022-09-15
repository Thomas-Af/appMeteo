import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, View, FlatList } from 'react-native';
import searchCities from '../services/searchCities';

export default function Search() {
  // const [search, setSearch] = useState('');
  // const [test, setTest] = useState('');
  // const [cities, setCities] = useState({});
  // const [citiesFiltered, setCitiesFiltered] = useState({});
  
  
  
  
  // useEffect(() => {
  //   searchCities('rennes')
  //   .then(response => {
  //     setCities(response);
  //     setCitiesFiltered(response);
  //     console.log('cities', cities)
  //     console.log('citiesFiltered', citiesFiltered)
  //   });
  // }, []);



  // const searchCities = (city) => {
  //   if (city) {
  //     const findCity = cities.filter(function (item) {
  //       const cityFound = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //       const cityChoose = city.toUpperCase();
  //       return cityFound.indexOf(cityChoose) > -1;
  //     });
  //     setFilteredDataSource(findCity);
  //     setSearch(city);
  //   } else {
  //     setFilteredDataSource(cities);
  //     setSearch(city);
  //   }
  // };


  return (
    // <View>
    //   <TextInput
    //     style={styles.input}
    //     placeholder="City name"
    //     // onSubmitEditing={searchCities()}
    //     onSubmitEditing={(text) => searchCities(text)}
    //     value={search}
    //   />
    //   <FlatList
    //       data={citiesFiltered}
    //       keyExtractor={({ insee }, index) => insee}
    //       renderItem={({ item }) => (
    //         <Text>{item.name}</Text>
    //       )}
    //     />
    // </View>
    <View>
      <TextInput
        style={styles.input}
        placeholder="City name"
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

