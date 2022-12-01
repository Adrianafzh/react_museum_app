import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native'
import React, {useEffect} from 'react'
import { splashscreen } from '../images'

export function Splash({navigation}) {

    useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    }, [navigation])


  return (
    <ImageBackground
        source={splashscreen}
        style = {styles.background}
    >

    </ImageBackground>
    // <View>
    //   <Image
    //     source = {require('../images/splashscreen.png')}
    //     style ={{
    //         width : Dimensions.get('window').width,
    //         height : Dimensions.get('window').height
    //     }}
    // />
    // </View>
  )
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        alignItems :'center',
        justifyContent :'center'
    }
})