import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection :'row', marginBottom : 20}}>
        {/* Museum List */}
        <TouchableOpacity onPress={() => {navigation.navigate('Museum DKI Jakarta')}} style={styles.menuContainer}>
          <View style={styles.menu}>
            <MaterialCommunityIcons name='bank' style={styles.icon} />
            <Text style={styles.textMenu} > Museum List </Text>
          </View>
        </TouchableOpacity>

        {/* Quiz */}
        <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.menuContainer}>
          <View style={styles.menu}>
            <MaterialCommunityIcons name='lightbulb-on' style={styles.icon} />
            <Text style={styles.textMenu}> Quiz </Text>
          </View>
        </TouchableOpacity>

      </View>
      <View style={{display: 'flex', flexDirection :'row'}}>
        {/* About */}
        <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.menuContainer}>
          <View style={styles.menu}>
            <MaterialCommunityIcons name='information' style={styles.icon} />
            <Text style={styles.textMenu}> About </Text>
          </View>
        </TouchableOpacity>

        {/* Exit */}
        <TouchableOpacity onPress={() => {navigation.navigate('Quiz')}} style={styles.menuContainer}>
          <View style={styles.menu}>
            <MaterialCommunityIcons name='exit-to-app' style={styles.icon} />
            <Text style={styles.textMenu}> Exit </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    display:'flex', 
    justifyContent:'center',
    height :'100%',
    backgroundColor : 'white',
    // flexDirection : 'row',
    alignItems: 'center',
    // marginHorizontal : 10
  },
  menuContainer : {
    width : 160,
    // backgroundColor : 'red',
    height : 160,
    marginHorizontal : 10,
    borderWidth : 0.5,
    borderColor : 'grey',
    borderRadius : 16
  },
  menu : {
    display : 'flex',
    alignItems :'center', 
    justifyContent : 'center',
     
    
  },
  icon : {
      // backgroundColor:'white', 
      color : 'black', 
      fontSize : 110,
      marginVertical : 5
  },
  textMenu :  {
    fontSize : 18,
    fontWeight : 'bold',
    color : 'black'

  }
})