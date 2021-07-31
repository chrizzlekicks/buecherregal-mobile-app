
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Marketplace from "./pages/Marketplace"
import OpenBooks from "./pages/OpenBook"

import MessageList from './pages/MessageList';
import Chat from './pages/Chat';


import MyBooks from './pages/MyBooks';
import UploadBook from './pages/UploadBooks';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


function MarketplaceNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="Marketplace" component= {Marketplace} />
      <Stack.Screen name ="OpenBook" component= {OpenBooks} />
    </Stack.Navigator>)
}

function MessagesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="MessageList" component= {MessageList} />
      <Stack.Screen name ="Chat" component= {Chat} />

    </Stack.Navigator>)
}

function MyBooksNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name ="MyBooks" component= {MyBooks} />
      <Stack.Screen name ="UploadBook" component= {UploadBook} />

    </Stack.Navigator>)
}

function App() {


  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Marketplace') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Messages') {
                iconName = focused ? "paper-plane" : 'paper-plane-outline';
              } else if (route.name === 'MyBooks') {
                iconName = focused ? 'person' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#B00055',
            inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name ="Marketplace" component= {MarketplaceNavigation} />
          <Tab.Screen name="Messages" component={MessagesNavigation} />
          <Tab.Screen name="MyBooks" component={MyBooksNavigation} /> 
        </Tab.Navigator>
    </NavigationContainer>
  )
}


export default App;
