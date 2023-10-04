import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const drinks = ["Apelsinjuice", "Banansmoothie", "Cider"];

const StartVy = ({ navigation }) => {
  return (
    <FlatList
      data={drinks}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetaljVy', { item })}
          style={{ backgroundColor: 'blue', padding: 10, margin: 5 }}>
          <Text style={{ color: 'white' }}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default StartVy;
