import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { CustomButton, CustomTextInput } from './component/ReusableComponents';


export const Screen5 = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
  
    const compareNumbers = () => {
      const number1 = parseInt(num1);
      const number2 = parseInt(num2);
  
      if (number1 <= number2) {
        setResult('Número menor o iguales');
      } else {
        setResult('Número no mayor');
      }
    };
  
    return (
      <View>
        <CustomTextInput
          placeholder="Número 1"
          keyboardType="numeric"
          onChangeText={(text) => setNum1(text)}
          value={num1}
        />
        <CustomTextInput
          placeholder="Número 2"
          keyboardType="numeric"
          onChangeText={(text) => setNum2(text)}
          value={num2}
        />
        
        
      </View>
    );
  };