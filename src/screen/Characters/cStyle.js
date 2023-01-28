import React from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
const Cstyle=(props)=>{
        if(props.char.item.isPlayableCharacter == true){

            return(
                <View name="Main" style={styles.main}>
                <View name="char name" style={styles.boxTxt}> 
                        <Image style={styles.ImageStyle} source={{uri:props.char.item.displayIcon}}>
                        </Image>
                        <View name='textbox' style={styles.charTxt}>
                        <Text style={styles.text}>Name: {props.char.item.displayName}</Text>
                        <Text style={styles.text}>Role: {props.char.item.role.displayName}</Text>
                        </View>
                </View>
        </View>
        )
    }
    

}   
const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    boxTxt:{borderBottomLeftRadius:50,borderTopLeftRadius:50,
        width:300,height:100,backgroundColor:'#dfe0e2',alignItems:'flex-start',justifyContent:'flex-start',
        flexDirection:'row'
    },
    ImageStyle:{
        borderRadius:100,borderWidth:2,
        width:100,height:100,backgroundColor:'#ffffff',borderColor:'#000000'
    },
    text:{
    fontSize:24,color:'#000000'},
    charTxt:{
        flexDirection:'column',
    }

})
export default Cstyle;