import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetaljVy = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', 
    fontSize: 54,  
  },
});

export default DetaljVy;
