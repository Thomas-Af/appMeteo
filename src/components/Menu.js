import React, { useCallback, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WeatherDays from '../domain/WeatherDays'
import Search from './Search'

const Tab = createBottomTabNavigator();



export default function Menu() {
  

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={WeatherDays} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
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

