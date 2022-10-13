import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Surface} from 'react-native-paper'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/colors';
const IconSize=24;
export default function Headers() {
  return (
    <Surface style={styles.header}>
    <View style={styles.view}>
      {
        <TouchableOpacity>
          <Entypo name="cross" size={IconSize} color={Colors.white} />
          </TouchableOpacity>
        }
    </View>
    <View style={styles.vieww}>
    {
        <TouchableOpacity>
          <Feather name='shopping-cart' size={IconSize} color={Colors.white}/>
        </TouchableOpacity>
      }
    </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
header:{
    height:50,
    elevation:4,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
backgroundColor:'black'},
view:{
    flex:1,
    backgroundColor:Colors.black,
    margin:10
},
vieww:{
  flex:1,
  backgroundColor:Colors.black,
  margin:10,
  marginLeft:290
}
})