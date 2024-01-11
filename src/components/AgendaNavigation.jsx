import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import DateSelectedScreen from "../screens/DateSelectedScreen"
import { useSelector } from "react-redux"
import SearchScreen from "../screens/SearchScreen"
import { PixelRatio, Text } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import ProfileScreen from "../screens/ProfileScreen"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import * as SplashScreen from "expo-splash-screen"
import PrivacyScreen from "../screens/PrivacyScreen"
import ConditionsScreen from "../screens/ConditionsScreen"
const StackOutside = createNativeStackNavigator()
const StackInside = createNativeStackNavigator()
const TabBar = createBottomTabNavigator()

const InsideHomePage = () => {
    return (
        <StackInside.Navigator initialRouteName="homePage">
            <StackInside.Screen name="homePage" component={HomeScreen} options={{ headerShown: false }} />
            <StackInside.Screen name="DateSelected" component={DateSelectedScreen} options={{ headerShown: false }} />
            <StackInside.Screen name="privacy" component={PrivacyScreen} options={{ headerShown: false }} />
            <StackInside.Screen name="conditions" component={ConditionsScreen} options={{ headerShown: false }} />
        </StackInside.Navigator>
    )
}
const InSideNavigator = () => {
    const headerTitleSize = PixelRatio.getFontScale() * 18
    const [fontsLoaded] = useFonts({
        AlexBold: require("../../assets/fonts/Cairo-Bold.ttf")
    })
    useEffect(() => {
        const cleanerFont = async () => {
            if (fontsLoaded) {
                await SplashScreen.preventAutoHideAsync();
            }
        };
        cleanerFont();
    }, [fontsLoaded])
    return (
        <>
            <TabBar.Navigator initialRouteName="home">
                <TabBar.Screen name="home" component={InsideHomePage} options={{
                    // headerTitle: "الأجندة القضائية",
                    // headerTitleStyle: {
                    //     fontWeight: 900,
                    //     fontSize: headerTitleSize,
                    //     color: "#fff",
                    //     fontFamily: "AlexBold"
                    // },
                    // headerStyle: {
                    //     backgroundColor: "#6266F0",
                    // },
                    // headerTitleAlign: "center",
                    // title: "الصفحة الرئيسية",
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#6266F0" : "#999", fontWeight: "bold" }}>الرئيسية</Text>,
                    tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} color={focused ? "#6266F0" : "#ccc"} />
                }} />
                <TabBar.Screen name="search" component={SearchScreen} options={{
                    headerTitle: "الأجندة القضائية",
                    headerTitleStyle: {
                        fontWeight: 900,
                        fontSize: headerTitleSize,
                        color: "#fff",
                        fontFamily: "AlexBold"
                    },
                    headerStyle: {
                        backgroundColor: "#6266F0",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#eee"
                    },
                    headerTitleAlign: "center",
                    title: "بحث",
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#6266F0" : "#999", fontWeight: "bold" }}>البحث</Text>,
                    tabBarIcon: ({ focused }) => <AntDesign name="search1" size={24} color={focused ? "#6266F0" : "#ccc"} />
                }} />
                <TabBar.Screen name="profile" component={ProfileScreen} options={{
                    // headerTitle: "الأجندة القضائية",
                    // headerTitleStyle: {
                    //     fontWeight: 900,
                    //     fontSize: headerTitleSize,
                    //     color: "#fff"
                    // },
                    // headerStyle: {
                    //     backgroundColor: "#6266F0",
                    //     borderWidth: 1,
                    //     borderStyle: "solid",
                    //     borderColor: "#eee"
                    // },
                    // headerTitleAlign: "center",
                    // title: "الصفحة الشخصية",
                    headerShown: false,
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#6266F0" : "#999", fontWeight: "bold" }}>الحساب</Text>,
                    tabBarIcon: ({ focused }) => <EvilIcons name="user" size={34} color={focused ? "#6266F0" : "#ccc"} />
                }} />
            </TabBar.Navigator>
        </>
    )
}
const OutsideNavigator = () => {
    return (
        <>
            <StackOutside.Navigator initialRouteName="login">
                <StackOutside.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
                <StackOutside.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
            </StackOutside.Navigator>
        </>
    )
}
const AgendaNavigation = () => {
    const { currentUser } = useSelector((state) => state.authSlice)
    return (
        <>
            <NavigationContainer>
                {Object.keys(currentUser).length > 0 ?
                    <InSideNavigator />
                    :
                    <OutsideNavigator />
                }
            </NavigationContainer>
        </>
    )
}

export default AgendaNavigation