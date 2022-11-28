import { Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getMuseum } from '../services/MuseumSrevices';

export function MuseumDetails({route, navigation}) {

    const {museumId} = route.params;
    const [museum, setMuseums] = useState({})

    useEffect(() => {
        setMuseums(getMuseum(museumId))
    })

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
            <Image source={museum.image} style={styles.image}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.textName}>{museum.name}</Text>
            <Text style={styles.textContent}>{museum.content}</Text>
            <Button title='test' onPress={() => {navigation.navigate('Museum DKI Jakarta')}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      borderRadius : 10
    },
    infoContainer: {
      padding: 16
    },
    // name: {
    //   fontSize: 22,
    //   fontWeight: 'bold',
    // },
    // content: {
    //   fontSize: 16,
    //   fontWeight: '400',
    //   color: '#787878',
    //   marginBottom: 16,
    // },
    textName : {
      fontSize : 24,
      paddingVertical : 5
    },
    textContent : {
      fontSize : 16,
      textDecorationStyle : 'solid',
      textAlign : 'justify',
    }
})