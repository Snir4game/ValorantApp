import { NavigationContainer } from "@react-navigation/native";
import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet } from "react-native";
import Login from "./src/screen/login/login";
import firebaseConfig from './src/firebaseConfig'
import { Tabs } from "./src/Navigator";
export default app=()=>{
  
  const [isConnected,setIsConnected]=useState(false);
  if(firebaseConfig.apps.length){
    firebaseConfig.auth().onAuthStateChanged((user)=>{
      setIsConnected(!!user);
    })
  }

  return(
    <View style={styles.container}>
    <NavigationContainer>
    {
    isConnected?<Tabs />:<Login/>
    }
    </NavigationContainer>
</View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e333e33',
    flexDirection:'row',

  }
})

