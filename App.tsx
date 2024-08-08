import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen1 } from './src/screen/Screen1';
import { Screen2 } from './src/screen/Screen2';
import { Screen3 } from './src/screen/Screen3';
import { Screen4 } from './src/screen/Screen4';
import { Screen5 } from './src/screen/Screen5';


const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;