import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export function Museum({name, address, city, image, onPress}) {
  return (
    // <Image source={require('../images/MuseumFatahillahPict.jpg')} />
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={styles.containerCard}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.textName}>{name}</Text>
                <Text style={styles.textCity}>{address} - {city}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
    },
    containerCard : {
        width : '100%',
        height : 100,
        display : 'flex',
        alignItems : 'center',
        backgroundColor : '#4977ACB9',
        display : 'flex',
        flexDirection : 'row',
        borderWidth : 0.5,
        borderColor : '#1D67BBB9',
        borderRadius : 16,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    image: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        borderRadius: 16,
        paddingTop: 10,
        marginRight : 10
    },
    infoContainer: {
        display : 'flex',
        flexDirection : 'column',
        width : 250
    },
    textName : {
        fontSize : 18,
        color : 'white',
        paddingBottom : 5,
        fontWeight : 'bold'

    },
    textCity : {
        fontSize : 12,
        color : 'white'

    }
})