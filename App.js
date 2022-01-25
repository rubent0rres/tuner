import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TunerStack from 'bajoquintotuner/src/components/tuner/TunerStack';

const App = () => {
  return (
    <NavigationContainer>
      <TunerStack />
    </NavigationContainer>
  );
};

export default App;
