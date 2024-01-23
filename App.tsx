import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/route/MyStack';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store1 = configureStore()

const App = () => {

  return (
    <Provider store={store1}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );

};

export default App;
