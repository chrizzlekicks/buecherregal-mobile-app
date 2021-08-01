import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Marketplace from './pages/Marketplace'
import OpenBooks from './pages/OpenBook'

import MessageList from './pages/MessageList'
import Chat from './pages/Chat'

import MyBooks from './pages/MyBooks'
import UploadBooks from './pages/UploadBooks'
import Login from "./components/Login"

import { AuthProvider } from './context/AuthContext'
import { useGlobalContext } from './context/GlobalContext'
import { MessageProvider } from './context/MessageContext'



const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()



function MarketplaceNavigation() {

  return (
    <Stack.Navigator>
      <Stack.Screen name='Marketplace' component={Marketplace} />
      <Stack.Screen name='OpenBook' component={OpenBooks} />
    </Stack.Navigator>
  )
}

function MessagesNavigation() {
  return (
    <MessageProvider>
      <Stack.Navigator>
        <Stack.Screen name='MessageList' component={MessageList} />
        <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </MessageProvider>
  )
}

function MyBooksNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='MyBooks' component={MyBooks} />
        <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}

function UploadBooksNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='UploadBook' component={UploadBooks} />
    </Stack.Navigator>
  )
}

function App() {

  const { isUserLoggedIn } = useGlobalContext();
  return (
    
    <NavigationContainer>
      {!isUserLoggedIn? 
      <AuthProvider>
        <Login />
      </AuthProvider>
      : 
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Marketplace') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Messages') {
              iconName = focused ? 'paper-plane' : 'paper-plane-outline'
            } else if (route.name === 'MyBooks') {
              iconName = focused ? 'person' : 'person-outline'
            } else if (route.name === 'UploadBook') {
              iconName = focused ? 'add-circle' : 'add-circle-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          keyboardHidesTabBar: true,
          activeTintColor: '#B00055',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name='Marketplace' component={MarketplaceNavigation} />
        <Tab.Screen name='Messages' component={MessagesNavigation} />
        <Tab.Screen name='UploadBook' component={UploadBooksNavigation} />
        <Tab.Screen name='MyBooks' component={MyBooksNavigation} />
      </Tab.Navigator>}
    </NavigationContainer>
  
)
}

export default App
