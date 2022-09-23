import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';


import fetchData from '../services/fetchData'
import renderImg from '../services/renderImg'

export default function WeatherCity({route}) {
  const [data, setData] = useState({});
  const [name, setName] = useState("");



  useEffect(() => {
    fetchData('forecast/nextHours', route.params.info.insee)
    .then(response => {
      setData(response);
    });
  }, [route.params.info.insee]);

  useEffect(() => {
    data.city && setName(data.city.name)
  }, [data]);
  
  return (
    <View >
      <Text style={styles.title}>Info météo sur {route.params.info.name} pour les prochaines heures </Text>
      <FlatList
          data={data.forecast}
          keyExtractor={({ datetime }, index) => datetime}
          renderItem={({ item }) => (
            <View style={styles.block}>
              <Text style={styles.title}>Météo a partir de {item.datetime.substring(11,16)} heures</Text>
              <View style={styles.content}>
              { renderImg(item.weather) }
              <View>
                <View style={styles.info}>
                  <Image
                    source={require('../../assets/icon/wi-thermometer.png')}
                    style={styles.littleIcon}
                    />
                    <Text>{item.temp2m} °</Text>
                </View>
                <View style={styles.info}>
                  <Image
                    source={require('../../assets/icon/wi-humidity.png')}
                    style={styles.littleIcon}
                  />
                  <Text>{item.probarain} %</Text>
                </View>
              </View>
              </View>
            </View>
          )}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#FBD87F',
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
  },
  content: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  icon: {
    width: '20%',
    height: '100%',
  },
  littleIcon: {
    width: '10%',
    height: '90%',
    marginRight: 5
  },
  info: {
    flexDirection: "row",
    alignItems: 'center',
  },
});
