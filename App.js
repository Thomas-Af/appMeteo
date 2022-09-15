import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WheatherDays from './src/domain/WeatherDays'
import Search from './src/components/Search'

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#85A9FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={WheatherDays}
        options={{ title: 'Home Page' }}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerStyle: { backgroundColor: '#85A9FF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: 'Search Page' }}
      />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Météo à  Bordeaux"
          component={HomeStack}
          options={{
            tabBarLabel: 'Accueil',
            tabBarIcon: () => (<Image source={require("./assets/icons8-home.svg")} style={{width: 40, height: 40}} />)
          }}
        />
        <Tab.Screen
          name="Rechercher une autre ville"
          component={SearchStack}
          options={{
            tabBarLabel: 'Rechercher',
            tabBarIcon: () => (<Image source={require("./assets/icons8-paramètres.svg")} style={{width: 40, height: 40}} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
});
