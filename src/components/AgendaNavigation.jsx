import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import DateSelectedScreen from "../screens/DateSelectedScreen"
import { useSelector } from "react-redux"

const StackOutside = createNativeStackNavigator()
const StackInside = createNativeStackNavigator()

const InSideNavigator = ()=>{
    return(
        <>
            <StackInside.Navigator initialRouteName="home">
                <StackInside.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
                <StackInside.Screen name="DateSelected" component={DateSelectedScreen} options={{headerShown: false}}/>
            </StackInside.Navigator>
        </>
    )
}
const OutsideNavigator =()=>{
    return(
        <>
        <StackOutside.Navigator initialRouteName="login">
            <StackOutside.Screen name="login" component={LoginScreen}  options={{headerShown: false}}/>
            <StackOutside.Screen name="register" component={RegisterScreen}  options={{headerShown: false}}/>
        </StackOutside.Navigator>
        </>
    )
}
const AgendaNavigation = ()=>{
    const {currentUser} = useSelector((state)=> state.authSlice)
    return(
        <>
        <NavigationContainer>
            { Object.keys(currentUser).length > 0 ?
                <InSideNavigator/>
                :
                <OutsideNavigator/>
            }
        </NavigationContainer>
        </>
    )
}

export default AgendaNavigation