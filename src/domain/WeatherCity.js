import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';

import fetchData from '../services/fetchData'

export default function WheatherDays({route}) {
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  // const route = useRoute();
  console.log("route", route)

  useEffect(() => {
    fetchData('forecast/nextHours', route.params.cp)
    .then(response => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    console.log(data)
    data.city && setName(data.city.name)
  }, [data]);
  
  return (
    <View >
      <Text style={styles.title}>Info météo sur  pour les prochaines heures {route.params.info.name}</Text>
      <FlatList
          data={data.forecast}
          keyExtractor={({ datetime }, index) => datetime}
          renderItem={({ item }) => (
            <View style={styles.block}>
              <Text style={styles.title}>Météo a partir de : {moment(item.datetime).format('h:mm:ss a')} </Text>
              <Text>Pourcentage d'humidité : {item.rh2m} %</Text>
              <Text>Température : {item.temp2m} °</Text>
              <Text>Vent moyen : {item.wind10m} km/h</Text>
              <Text>Cumul de pluie : {item.rr10} mm</Text>
              <Text>Probabilité de pluie : {item.probarain} %</Text>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#EDF6FD',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    marginBottom: 40
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  }
});
