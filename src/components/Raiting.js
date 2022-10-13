import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../constants/colors';

const IconSize=18;
export default function Raiting() {
  return (
    <View style={styles.container}>
      <AntDesign name="star" size={IconSize} color={Colors.yellow} />
      <Text style={styles.textt}>4.8</Text>
      <Text style={styles.text}>(2578)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:-1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:'center'
    },
    textt:{
        color:"white",
        fontSize:19,
        marginLeft:1
    },
    text:{
        color:"grey",
        fontSize:14,
        marginLeft:12
    }
})