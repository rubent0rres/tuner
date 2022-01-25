import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TunerScreen from './TunerScreen';

const Stack = createNativeStackNavigator();

const TunerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tuner"
        options={{headerShown: false}}
        component={TunerScreen}
      />
    </Stack.Navigator>
  );
};

export default TunerStack;
