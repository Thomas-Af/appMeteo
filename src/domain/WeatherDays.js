import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import fetchData from '../services/fetchData';
import renderImg from '../services/renderImg';
import dayjs from 'dayjs'


export default function WeatherDays() {
  const [data, setData] = useState({});
  const [name, setName] = useState("");

  
  useEffect(() => {
    fetchData('forecast/daily', 33063)
    .then(response => {
      setData(response);
    });
  }, []);

  useEffect(() => {
    data.city && setName(data.city.name)
  }, [data]);
  
  
  return (
    <View >
      <Text style={styles.firstTitle}>Info météo sur {name} pour les 14 prochains jours</Text>
      <FlatList
          data={data.forecast}
          keyExtractor={({ dirwind10m }, index) => dirwind10m}
          renderItem={({ item }) => {
            return (
              <View style={styles.block}>
              <Text style={styles.title}>Prévisions du {dayjs(item.datetime.substring(0,10)).format('DD/MM/YYYY')} : </Text>
              <View style={styles.content}>
              { renderImg(item.weather) }
              <View>
                <View style={styles.info}>
                  <Image
                    source={require('../../assets/icon/wi-thermometer.png')}
                    style={styles.littleIcon}
                  />
                  <Text>{item.tmin}° / {item.tmax}°</Text>
                </View>
                <View style={styles.info}>
                  <Image
                    source={require('../../assets/icon/wi-humidity.png')}
                    style={styles.littleIcon}
                  />
                  <Text>{item.probarain}%</Text>
                </View>
              </View>
              </View>              
            </View>
          )}}
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
    marginBottom: 40,
  },
  content: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  info: {
    flexDirection: "row",
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingTop: 10
  },
  firstTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingTop: 10
  },
  icon: {
    width: '20%',
    height: '100%',
  },
  littleIcon: {
    width: '10%',
    height: '90%',
    marginRight: 5
  }
});
