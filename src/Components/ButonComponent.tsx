import React from 'react';
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ButtonComponentProps {
  Title: string;
  onPress: () => void;
}

export const ButonComponent = ({ Title, onPress}: ButtonComponentProps) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={styles.buttonText}>{Title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#2D4356',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
