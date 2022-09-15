import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.head}>
      <Text>Today</Text>
      <Text>Hour</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#EDF6FD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // height: 30,
    width: '100%',
    gap: 100,
    bottom: 0,
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    borderBottomColor: '#85A9FF',
    borderBottomWidth: 2
  },
});

export default Menu;