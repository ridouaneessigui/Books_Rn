import { StyleSheet, ScrollView, View,Image } from 'react-native'
import React from 'react'

export default function CoverList() {
  return (
    <ScrollView horizontal={true}>
    <View style={styles.container}>
      <Image source={require('../../assets/images/book2.png')} style={styles.tt}/>
      <Image source={require('../../assets/images/book3.png')} style={styles.tt}/>
      <Image source={require('../../assets/images/book4.png')} style={styles.tt}/>
      <Image source={require('../../assets/images/book5.png')} style={styles.tt}/>
      <Image source={require('../../assets/images/book6.png')} style={styles.tt}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    tt:{
        width:100,
        height:160,
        marginLeft:20
    },
    container:
    {
        flexDirection:'row',
        marginTop:10,
    }
})