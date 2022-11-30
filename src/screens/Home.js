import { StyleSheet, Text, View, TouchableOpacity, Button, BackHandler, Modal, Dimensions} from 'react-native'
import React, {useState, useEffect} from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ModalExit} from '../components/ModalExit'
// import Modal  from 'react-native-modal'

const WIDTH = Dimensions.get('window').width;

export function Home({navigation}) {

  const [showExitModal, setShowExitModal] = useState(false)
  const [chooseData, setChooseData] = useState()
  // const [changeModalVisible, setChangeModalVisible] = useState(true)

  const changeModalVisible = (bool) => {
    setShowExitModal(bool)
  }

  const handleTest = () => {
    console.log(showExitModal)
  }

  const renderMenu = () => {
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
          <TouchableOpacity onPress={handleTest} style={styles.menuContainer}>
            <View style={styles.menu}>
              <MaterialCommunityIcons name='information' style={styles.icon} />
              <Text style={styles.textMenu}> About </Text>
            </View>
          </TouchableOpacity>

          {/* Exit */}
          <TouchableOpacity
            // onPress={() => {BackHandler.exitApp()}}
            // onPress={handleExit}
          onPress={() => changeModalVisible(true)}
            style={styles.menuContainer}
          >
            <View style={styles.menu}>
              <MaterialCommunityIcons name='exit-to-app' style={styles.icon} />
              <Text style={styles.textMenu}> Exit </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  const setData = (data) => {
    setChooseData(data)
  }

  return (
    <SafeAreaView style={{flex : 1}}>

      {renderMenu()}
      {/* <Text>
        {chooseData}
      </Text> */}
      {/* <View style={{justifyContent : 'center', alignItems :'center', height : '50%', backgroundColor : 'grey'}}>
        <TouchableOpacity
          style={styles.touchableModal}
          onPress={() => changeModalVisible(true)}
          >
          <Text>Open Modal</Text>
        </TouchableOpacity>

      </View> */}
      <Modal
        transparent={true}
        animationType='fade'
        visible = {showExitModal}
        nRequestClose={() => changeModalVisible(false)}
        style ={{justifyContent : 'center', alignItems : 'center', width : WIDTH}}
      >
        <ModalExit
          changeModalVisible={changeModalVisible}
          setData={setData}
        />
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  touchableModal: {
    height : 80, width: 130, backgroundColor: 'white', borderRadius : 20, justifyContent: 'center', alignItems :'center'
  },
  container : {
    display:'flex', 
    justifyContent:'center',
    height :'100%',
    backgroundColor : 'white',
    // flexDirection : 'row',
    alignItems: 'center',
    backgroundColor : 'white'
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