import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import DateSelectedScreen from "../screens/DateSelectedScreen"

const Stack = createNativeStackNavigator()

const AgendaNavigation = ()=>{
    return(
        <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}}/>
                <Stack.Screen name="home" component={HomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name="DateSelected" component={DateSelectedScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    )
}

export default AgendaNavigation