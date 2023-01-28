import React from "react";
import { Text,View,StyleSheet,Image,TouchableOpacity } from "react-native";
import firebaseConfig from '../../firebaseConfig';
const Acc =(props)=>{
const user=firebaseConfig.auth().currentUser

    return(
        <View style={styles.container}>
            <Text>Welcome back </Text>
            <View style={styles.btnLogOut}>
                <TouchableOpacity onPress={()=>{firebaseConfig.auth().signOut()}}>
                    <Text style={{fontSize:20}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#a2aebb'
    },
    btnLogOut:{
        justifyContent:'center',
        alignItems:'center',
        width:'25%',
        height:'8%',
        backgroundColor:'#899e8b',
        borderRadius:20
    }
})

export const screenOptions = (navData) => {
    return {
        headerTitle: 'Account',
    }
}
export default Acc;