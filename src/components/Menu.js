import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text>Menu</Text>
      <Text>Page 1</Text>
      <Text>Page 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: '#EDF6FD',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // height: 30,
    width: '100%',
    gap: 100,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderTopColor: '#85A9FF',
    borderTopWidth: 2
  },
});

export default Menu;