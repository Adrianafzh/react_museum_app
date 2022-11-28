import React from "react";
import {StyleSheet, View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {MuseumList} from "./src/screens/MuseumList";
import {MuseumDetails} from "./src/screens/MuseumDetails";
import Museum from "./src/components/Museum";
import { Home } from "./src/screens/Home";
import { Quiz } from "./src/screens/Quiz";

const stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <stack.Navigator>
        {/* <stack.Screen name="Home Museum" component={Museum} /> */}
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Quiz" component={Quiz} />
        <stack.Screen name="Museum DKI Jakarta" component={MuseumList} />
        <stack.Screen name="MuseumDetails" component={MuseumDetails} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Container : {
    textAlign : 'center',
    alignItems : 'center',
    justifyContent :'center',
    flex : 1
  },
  text : {
    fontSize : 20,
    fontWeight : 'bold',
    color : 'red'
  }
})
