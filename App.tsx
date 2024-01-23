import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/route/MyStack';
import { Provider } from 'react-redux'
import { store } from './src/store/store'

const App = () => {

  return (
    <Provider store={store}>
       <NavigationContainer>
        <MyStack />
       </NavigationContainer>
    </Provider>
  );

};

export default App;
