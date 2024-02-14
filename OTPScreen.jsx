import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OTPScreen = ({ navigation }) => {
  const [otpCode, setOTPCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Introduce el código OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Código OTP"
        keyboardType="number-pad"
        value={otpCode}
        onChangeText={text => setOTPCode(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Anterior"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Siguiente"
          onPress={() => navigation.navigate('RegisterScreen', { otpCode })}
          disabled={otpCode.length < 6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 96,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58483E',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 16,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 32,
  },
});

export default OTPScreen;
