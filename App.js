import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/components/Menu'
import Head from './src/components/Head'
import WheatherDays from './src/domain/WeatherDays'
import Search from './src/components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Head style={styles.head}/>
      <WheatherDays style={styles.head}/>
      <Search />
      <Menu style={styles.menu}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    // flex: .8
  },
  head: {
    // flex: .1
  },
  menu: {
    // flex: .1
  }
});
