import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Weap,{screenOptions as weapSO} from './screen/Welcome/Weapons';
import Acc ,{screenOptions as AccsSO}from './screen/Account/Account';
import Characters,{screenOptions as CharactersSO} from './screen/Characters/Characters';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CharInfo ,{screenOptions as InfoSO}from './screen/Characters/Info'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const StackStyle={
    headerStyle:{
    backgroundColor:'#808080',
    },
    headerTintColor: '#ffffff'

}

const Stacks=createNativeStackNavigator();
export const InfoChar=(props)=>{
    return(
        <Stacks.Navigator screenOptions={StackStyle}>
            <Stacks.Screen name='Characters' component={Characters} options={CharactersSO}/>
        </Stacks.Navigator>
    )


}





const TabNavigator = createMaterialBottomTabNavigator();
export const Tabs=()=>{
    return(
        <TabNavigator.Navigator activeColor="#071013" inactiveColor="#071013" barStyle={{backgroundColor:'#ECD444'}}>
            <TabNavigator.Screen name="Characters List"
            options={{tabBarLabel:'Characters List',tabBarIcon:({color})=>(<Feather name='list'size={25} color={color}/>)}}
            component={InfoChar}/>
            <TabNavigator.Screen name="Weapons"
            options={{tabBarLabel:'Weapons',tabBarIcon:({color})=>(<FontAwesome name='legal'size={25} color={color}/>)}}
            component={Weap}/>
            <TabNavigator.Screen name="Account"
            options={{tabBarLabel:'Account',tabBarIcon:({color})=>(<MCIcons name='account-circle'size={25} color={color}/>)}}
            component={Acc}/>
        </TabNavigator.Navigator>
    )
}