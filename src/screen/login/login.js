import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text,TouchableOpacity,Button,TextInput,Alert } from "react-native";
import firebaseConfig from '../../firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login=()=>{

    const [LoginView,setLoginView]=useState(true);
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [errMessage,setErrMessage]=useState(null);

    useEffect(()=>{
    if(errMessage!=null)
        Alert.alert(errMessage);
    },[errMessage])

    const SignUp=async()=>{
        setErrMessage(null);
            try{
                    const user = await firebaseConfig.auth().createUserWithEmailAndPassword(Email,Password);
            }
            catch(error){
                setErrMessage(error.message);

            }
    }

    const login=async ()=>{
        setErrMessage(null);
        try{
            const user= await firebaseConfig.auth().signInWithEmailAndPassword(Email,Password);
            AsyncStorage.setItem('Account',JSON.stringify({
                use_email:user.user.email,
                use_uid:user.user.uid,
                use_token:user.user.stsTokenManager.accessToken
            }))
        }
        catch(error){
            setErrMessage(error.message);
        }
    }

    return(
        <View style={styles.container}>
            { 

            LoginView?(
            <View name="Email" style={styles.SPassAndEmail}>
                <Text style={{fontSize:30}}>Login</Text>
                <TextInput 
                    placeholder="Email"
                    keyboardType='email-address'
                    style={styles.input}
                    value={Email}
                    onChangeText={text=>setEmail(text)}
                    fontSize={20}
                />
            <View name="Password" style={styles.SPassAndEmail}>
                <TextInput 
                placeholder="Password"
                keyboardType='default'
                secureTextEntry={true}
                value={Password}
                style={styles.input}
                onChangeText={text=>setPassword(text)}
                fontSize={20}
                />
            </View>
                <TouchableOpacity onPress={login} style={styles.btn}> 
                    <Text style={{fontSize:25}}>Login</Text>
                </TouchableOpacity>
                <View style={styles.SignInOrLogin}>
                    <TouchableOpacity   TouchableOpacity onPress={()=>{setLoginView(!LoginView)}}>
                        <Text style={{fontSize:20}}>Login or Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            ):(
            <View name="Sign Up" style={styles.SPassAndEmail}>
                <Text style={{fontSize:30}}>Sign Up</Text>
                <TextInput 
                placeholder="Email"
                keyboardType='email-address'
                style={styles.input}
                value={Email}
                onChangeText={text=>setEmail(text)}
                fontSize={20}
                />
                <TextInput
                placeholder="Password"
                keyboardType='default'
                secureTextEntry={true}
                style={styles.input}
                value={Password}
                onChangeText={text=>setPassword(text)}
                fontSize={20}
                />
                <TouchableOpacity onPress={SignUp} style={styles.btn}>
                    <Text>Sign Up Now</Text>
                </TouchableOpacity>

                <View style={styles.SignInOrLogin}>
                    <TouchableOpacity onPress={()=>{setLoginView(!LoginView)}}>
                        <Text style={{fontSize:20}}>Login or Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
                )
            }
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:30,
        width:'100%',
        height:'100%',
        backgroundColor:"#99C5B5",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        width:"50%",
        height:'5%',
        backgroundColor:'#81F499',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    input:{
        width:'100%',
        paddingVertical:12,
        backgroundColor:'#ffffff',
        borderRadius:10,
        margin:2
    },
    SPassAndEmail:{
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        
    },
    SignInOrLogin:{
        width:'50%',
        height:'5%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#AFECE7',
        margin:3,
        borderRadius:10
    }
})
export default Login;