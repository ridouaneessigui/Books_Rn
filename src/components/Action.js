import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Action = () => {
    const { container, price, priceContent, preview, previewContent } = styles;

    return(
        <View style={container}>
            <TouchableOpacity style={price}>
                <Text style={priceContent}>19.99 £</Text>
            </TouchableOpacity>
            <TouchableOpacity style={preview}>
                <Text style={previewContent}>Free Preview</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles=StyleSheet.create({
        container: {
            flexDirection: "row",
            width: 27,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 27
    },
    price: {
        width: 150,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,  
    },
    priceContent: {
        fontFamily: "Montserra-Black",
        fontSize: 18,
        fontWeight: "700",
        lineHeight:18
    },
    preview: {
        width: 150,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ef8262",
        color: "white",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
    },
    previewContent: {
        color: "white",
        fontSize: 16,
        fontFamily: "Gilroy-Bold",
        fontWeight: "700",
        lineHeight: 16
    }
})
export default Action;