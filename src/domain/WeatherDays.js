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
  
  // console.log('data', data.city.name)
  return (
    <View >
      <Text>WeatherDays Pages</Text>
      <Text>Weather for {name}</Text>
      <FlatList
          data={data.forecast}
          keyExtractor={({ datetime }, index) => datetime}
          renderItem={({ item }) => (
            <Text>Temp mini : {item.tmin}°, Temp max : {item.tmax}°</Text>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
