import { StyleSheet, Text, View, TouchableOpacity, Dimensions, BackHandler } from 'react-native'
import React from 'react'

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 200;


export function ModalExit(props) {

  closeModal = (bool, data) => {
    props.changeModalVisible(bool)
    props.setData(data)
  }

  return (
    <TouchableOpacity
        disabled={true}
        style={styles.container}
    >
      <View style={styles.modal}>
        <View style ={{marginHorizontal : 20}}>
          <Text style={styles.textConfirm}>Confirm Exit</Text>
          <Text style={styles.textExit}>Are you sure you want to Exit?</Text>

          <View style={styles.btnView}>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => closeModal(false, 'Cancel')}
            >
              <Text style={styles.textBtn}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn]}
              onPress={() => {BackHandler.exitApp()}}
            >
              <Text style={styles.textBtn}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems:'center', 
    justifyContent : 'center',
    paddingHorizontal : 10,
  },
  modal : {
    width : WIDTH,
    height : HEIGHT_MODAL,
    width : '95%',
    paddingTop: 20,
    // borderWidth : 0.1,
    backgroundColor : '#ffffff',
    shadowColor: "#03020371",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 20,
    borderRadius : 10
  },
  textConfirm : { 
    // color : '#ffffff',
    fontSize : 22, 
    fontWeight:'bold'
  },
  textExit : {
    // color : '#ffffff',
    fontSize : 16,
    marginTop : 10
  },
  btnView : {
    flexDirection: 'row', 
    justifyContent:'flex-end', 
    // marginRight : 10, 
    paddingTop: 40,
    height : 100,
    // backgroundColor : 'red'
  },
  btn: {
    // marginRight: 10,
    // backgroundColor:'grey',
    width: 100,
    // height :80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // margin : 5
  },
  textBtn : {
    fontSize : 18,
    color : '#0B5688',
    fontWeight : 'bold'
  }
})