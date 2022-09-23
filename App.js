import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WeatherDays from './src/domain/WeatherDays'
import WeatherCity from './src/domain/WeatherCity'
import Search from './src/components/Search'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Météo à  Bordeaux"
          component={WeatherDays}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: () => (<Image source={require("./assets/icons8-home.svg")} style={{width: 40, height: 40}} />)
          }}
        />
        <Tab.Screen
          name="Rechercher une autre ville"
          component={Search}
          options={{
            tabBarLabel: 'Rechercher',
            tabBarIcon: () => (<Image source={require("./assets/icons8-paramètres.svg")} style={{width: 40, height: 40}} />)
          }}
        />
        <Tab.Screen
          name="WeatherCity"
          component={WeatherCity}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
});
