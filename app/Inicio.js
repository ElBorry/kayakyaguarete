import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control de Alquileres</Text>
      <Button title="Nuevo Alquiler" onPress={() => navigation.navigate('Registro')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Inicio;
