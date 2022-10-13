import { React} from "react";
import { View, Text, StyleSheet,ScrollView} from "react-native";
import  constants  from "expo-constants";
import Headers from "../components/Headers";
import Cover from "../components/Cover";
import Raiting from "../components/Raiting";
import Action from "../components/Action";
import CoverList from "../components/CoverList";

const BooksScreen=()=>{
    return (
        <ScrollView /* style={styles.container} */>
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
            <Text style={styles.you}>You can also Like</Text>
            <CoverList/>
            </View>
        </ScrollView>
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
    },
    you:{
        fontSize:19,
       // alignItems:'flex-start',
        width:400,
        color:'white',
        flex:1,
        marginTop:40,
    }
})

export default BooksScreen;

