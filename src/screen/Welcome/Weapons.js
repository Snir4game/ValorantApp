import React,{useEffect,useState} from "react";
import { Text,View,StyleSheet,Image, FlatList } from "react-native";
import WeapStyle from './WeapStyle'
const Weapons =(props)=>{

const [guns,setGuns]=useState([]);

const weapLoading=async()=>{
    const api=`https://valorant-api.com/v1/weapons`;
    const req =await fetch(api,{method:'get'});
    const data= await req.json();
    setGuns(data);
}
useEffect(()=>{
    weapLoading()
},[])

    return(
        <View style={styles.container}>
            <FlatList
            data={guns.data}
            keyExtractor={x=>x.uuid}
            renderItem={item=><WeapStyle char={item}/>}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#a2aebb',
        
    }
})
export const screenOptions = (navData) => {
    return {
        headerTitle: 'Weapons',
    }
}
export default Weapons;