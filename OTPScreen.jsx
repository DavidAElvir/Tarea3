import React from 'react';
import { View, Button } from 'react-native';

const OTPScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('RegisterScreen')}
      />
    </View>
  );
};

export default OTPScreen;
