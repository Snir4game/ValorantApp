import React,{useEffect,useState} from "react";
import { Text,View,StyleSheet,Image,FlatList } from "react-native";
import CStyle from './cStyle';

const Characters =(props)=>{

    const [character,setChar]=useState([]);

    const CharLoading= async()=>{
            const api=`https://valorant-api.com/v1/agents`;
            const req=await fetch(api,{method:'get'});
            const data= await req.json();
            setChar(data);

    }
    useEffect(()=>{
        CharLoading()
    },[])


    return(
        <View style={styles.container}>
            <FlatList 
            data={character.data}
            keyExtractor={x=>x.uuid}
            renderItem={item => <CStyle char={item} navigator={props.navigation.navigate}/>}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#a2aebb'
    }
})
export const screenOptions = (navData) => {
    return {
        headerTitle: 'Characters',
    }
}
export default Characters;