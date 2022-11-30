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
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={museum.image} style={styles.image}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.textName}>{museum.name}</Text>
            <Text style={styles.textContent}>{museum.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container :{
      backgroundColor : 'white'
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop : 20,
      // backgroundColor : 'red',
      // height : '40%'
    },
    image: {
      // width: '100%',
      // resizeMode : 'stretch',
      // aspectRatio: 1,
      borderRadius : 10,
      height : 300
    },
    infoContainer: {
      padding: 16
    },
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