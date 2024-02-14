// DashboardScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const DashboardScreen = ({ route }) => {
  const { name, email, phone } = route.params;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone: {phone}</Text>
    </View>
  );
};

export default DashboardScreen;
