import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardScreen = ({ route, navigation }) => {
  const { name, email, phone } = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={require('./profile-image.jpg')} />
      <Text style={styles.welcomeText}>Bienvenido, {name}!</Text>
      <Text style={styles.subtitle}>Tu información de perfil:</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>{email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Teléfono:</Text>
        <Text style={styles.infoValue}>{phone}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'cover',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#58483E',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#58483E',
    marginBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    color: '#58483E',
    width: '30%',
  },
  infoValue: {
    fontSize: 16,
    color: '#58483E',
    width: '70%',
  },
  button: {
    height: 48,
    backgroundColor: '#58483E',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 32,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DashboardScreen;