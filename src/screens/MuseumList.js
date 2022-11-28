import { StyleSheet, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getMuseums } from '../services/MuseumSrevices'
import { Museum } from '../components/Museum'

export function MuseumList({navigation}) {

    function renderMuseum({item : museum}){
        return(
            <Museum
                {...museum}
                onPress={() => {
                    navigation.navigate('MuseumDetails', {museumId : museum.id})
                }}
            />
        )
    }

    const [museums, setMuseums] = useState([])
    useEffect(() => {
        setMuseums(getMuseums())
    })

  return (
    <FlatList
        style={styles.museumList}
        contentContainerStyle={styles.museumListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={museums}
        renderItem={renderMuseum}
    />
  )
}

const styles = StyleSheet.create({
    museumList: {
        backgroundColor: "white"
      },
      museumListContainer: {
        paddingVertical: 10,
        marginHorizontal: 10,
        // paddingTop : 10
      },
})