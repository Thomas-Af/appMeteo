import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import fetchData from '../services/fetchData'

export default function WheatherDays() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    fetchData('forecast/daily')
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
      <Text style={styles.title}>Info météo sur {name} pour les 14 prochains jours</Text>
      <FlatList
          data={data.forecast}
          keyExtractor={({ dirwind10m }, index) => dirwind10m}
          renderItem={({ item }) => (
            <View style={styles.block}>
              <Text style={styles.title}>Prévisions du jour {item.day} : </Text>
              <Text>Température minimale / maximale : {item.tmin}° / {item.tmax}°</Text>
              <Text>Vent moyen : {item.wind10m} km/h</Text>
              <Text>Cumul de pluie sur la journée : {item.rr10} mm</Text>
              <Text>Probabilité de pluie : {item.probarain}%</Text>
              <Text>Temps d'ensoleillement : {item.sun_hours} h</Text>
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
