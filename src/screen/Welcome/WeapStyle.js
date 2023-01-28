import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";
const WeapStyle =(props)=>{
    return(
        <View name="Main" style={styles.main}>
            <View name="Info Box" style={styles.boxInfo}>
                <View name="IMG BOX">
                    <Image style={styles.imgBox} source={{uri:props.char.item.displayIcon}}></Image>
                </View>
                <View name="Text">
                <Text style={styles.text}>Name: {props.char.item.displayName}</Text>
                </View>
            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:20
    },
    boxInfo:{
        borderColor:'#000000',
        width:"100%",
        height:300,
        borderWidth:2,
        backgroundColor:'#ffffff',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    imgBox:{
        resizeMode:'stretch',
        width:"100%",
        height:200,
        backgroundColor:'#000000',
        borderBottomWidth:2,
        borderColor:'#ffcc00'

    },
    text:{
        fontSize:24,color:'#000000'},
})


export default WeapStyle;