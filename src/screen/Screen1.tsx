import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import { CustomButton } from './component/ReusableComponent';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Screen1: undefined;
    Screen2: undefined;
    Screen3: undefined;
    Screen4: undefined;
    Screen5: undefined;
  };

export const Screen1 = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>BIENVENIDO</Text>
      <CustomButton label="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
      <CustomButton label="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
      <CustomButton label=">=" onPress={() => navigation.navigate('Screen4')} />
      <CustomButton label="<=" onPress={() => navigation.navigate('Screen5')} />
    </View>
  );
};
