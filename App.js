
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Marketplace from "./pages/Marketplace"
import Messages from './pages/Messages';
import MyBooks from './pages/MyBooks';
import OpenBooks from "./pages/OpenBook"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


function MarketplaceNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Marketplace" component= {Marketplace} />
      <Stack.Screen name ="OpenBook" component= {OpenBooks} />
    </Stack.Navigator>)
}

function App() {


  return (
    <NavigationContainer>
      
        <Tab.Navigator>
          <Tab.Screen name ="Marketplace" component= {MarketplaceNavigation} />
          <Tab.Screen name="Messages" component={Messages} />
          <Tab.Screen name="MyBooks" component={MyBooks} /> 
        </Tab.Navigator>
        <Stack.Screen name ="Marketplace" component= {Marketplace} />
        <Stack.Screen name ="OpenBook" component= {OpenBooks} />
      <Marketplace />
    </NavigationContainer>
  )
}


export default App;
