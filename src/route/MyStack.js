import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listing from '../screen/Listing'
import Form from '../screen/Form'

const Stack = createNativeStackNavigator();


const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Listing">
    
      <Stack.Screen
        name="Form"
        component={Form}
        options={{ title:"Form" }}
      />

      <Stack.Screen
        name="Listing"
        component={Listing}
        options={{ title:"Listing" }}
      />
      
    </Stack.Navigator>
  );
};

export default MyStack;
