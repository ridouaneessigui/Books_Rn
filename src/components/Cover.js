import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Cover() {
  return (
    <View>
      <Image source={require('../../assets/images/book1.png')} style={styles.tt}/>
    </View>
  )
}

const styles = StyleSheet.create({
  tt:{
    marginTop:60
  }
})