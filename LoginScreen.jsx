import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./starbucks-logo.png')} />
      <Text style={styles.title}>Bienvenido a Starbucks</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Introduce tu contraseña"
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OTPScreen')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
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
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 24,
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
  button: {
    height: 48,
    backgroundColor: '#58483E',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
