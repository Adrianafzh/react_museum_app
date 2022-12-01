import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MuseumList } from "./src/components/MuseumList";
import { MuseumDetails } from "./src/components/MuseumDetails";
import Museum from "./src/screens/Museum";
import { Home } from "./src/screens/Home";
import { Quiz } from "./src/screens/Quiz";
import { Splash } from "./src/components/Splash";

const stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
        {/* <stack.Screen name="Home Museum" component={Museum} /> */}
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Quiz" 
          component={Quiz} 
          options={{
            // headerTintColor : "red",
            // headerShown: false,
            title : 'Quiz',
            
            
          }} 
        />
        <stack.Screen
          name="Museum DKI Jakarta"
          component={MuseumList}
          options={{ title: 'Museum DKI Jakarta' }}
        />
        <stack.Screen
          name="MuseumDetails"
          component={MuseumDetails}
          options={
            ({route}) => ({title : route.params.title})
          }
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})
