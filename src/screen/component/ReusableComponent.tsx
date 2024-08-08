// ReusableComponents.tsx
import React from 'react';
import { TouchableOpacity, Text, TextInput, TextInputProps, TouchableOpacityProps, StyleSheet } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
}

export const CustomButton = ({ label, ...props }:CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
}

export const CustomTextInput = ({ placeholder, ...props }:CustomTextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#888"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
