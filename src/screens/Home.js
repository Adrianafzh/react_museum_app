import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'

export function Home({navigation}) {
  return (
    <View style={{padding : 16, display:'flex',  justifyContent:'center', height :'100%'}}>
        <Button title='Museum List' onPress={() => {navigation.navigate('Museum DKI Jakarta')}}/>
        <Button title='Quiz' on onPress={() => navigation.navigate('Quiz')} />
    </View>
  )
}

const styles = StyleSheet.create({
    Button : {
        width : '80%'
    }
})