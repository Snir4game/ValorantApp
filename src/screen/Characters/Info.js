import React  from "react";
import { Text,View,StyleSheet,Image } from "react-native";

const CharInfo=(props)=>{
    return(
        <View name="Main Box" style={styles.mainbox}>
            <Image style={styles.imgBox} ></Image>
        </View>
    )
}
const styles=StyleSheet.create({
    mainbox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#dfe0e2'
    },
    imgBox:{
        alignItems:'flex-start',
        width:300,
        height:200,
        borderColor:'#ffffff',
        borderRadius:2,
        
    }
});
export const screenOptions = (navData) => {
    return {
        headerTitle:'Information',
    }
}

export default CharInfo;