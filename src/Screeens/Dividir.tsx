import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Screen2 = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleDivide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Por favor ingrese números válidos en ambos campos');
    } else if (num1 === 0 && num2 === 0) {
      setResult('INDETERMINACIÓN');
    } else if (num2 === 0) {
      setResult('NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((num1 / num2).toString());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario:</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={number1}
        onChangeText={text => setNumber1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={number2}
        onChangeText={text => setNumber2(text)}
      />
      <Button
        title="Dividir"
        onPress={handleDivide}
      />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Screen2;
