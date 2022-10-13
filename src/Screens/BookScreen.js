import { React} from "react";
import { View, Text, StyleSheet} from "react-native";
import  constants  from "expo-constants";
import Headers from "../components/Headers";
import Cover from "../components/Cover";
import Raiting from "../components/Raiting";
import Action from "../components/Action";

const BooksScreen=()=>{
    return (
        <View /* style={styles.container} */>
            <Headers />
            <View style={styles.container}>
            <Cover />
            <Text style={styles.title}>
                The Jungle Book
            </Text>
            <Text style={styles.subtitle}>
                Rudyard Kliping
            </Text>
            <Raiting/>
            <Action />
            </View>
        </View>
    )

    }

const styles = StyleSheet.create({
    container:{
       // marginTop:50,
        flex:-1,
        backgroundColor:"black",
        alignItems:"center",
        paddingBottom:"100%"
    },
    title:{
        fontSize:25,
        fontFamily: "Cochin",
        fontWeight: "bold",
        color:'white',
        marginTop:20,
    },
    subtitle:{
        fontSize:19,
        fontFamily: "Cochin",
       // fontWeight: "bold",
        color:'grey',
        marginTop:5,
    }
})

export default BooksScreen;

