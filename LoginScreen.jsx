import React from 'react';
import { View, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('OTPScreen')}
      />
    </View>
  );
};

export default LoginScreen;
