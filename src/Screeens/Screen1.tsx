import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Bienvenido</Text>
    <Image source={{uri:'https://www.genesys-global.com/wp-content/uploads/2023/06/herramientas-de-desarrollo-de-software.jpg'}} style={styles.imagen} />
    <Button
      title="Acceder"
      onPress={() => navigation.navigate('DivisionScreen')}
    />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10
  },
});


export default Screen1;
