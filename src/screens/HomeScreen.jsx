import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import React, { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"



const HomeScreen = ()=>{
    const navigation = useNavigation()
    const [currentUser, setCurrentUser] = useState({})

    React.useEffect(()=>{
        const cleanerGetUser = async ()=>{
            const userStorage = await AsyncStorage.getItem("@user")
            if(Object.keys(JSON.parse(userStorage)).length > 0){
                setCurrentUser(JSON.parse(userStorage))
            }else{
                navigation.navigate("login")
            }
        }
        cleanerGetUser()
    },[])
    const getUserStorage = async()=>{
        console.log(currentUser)
    }

    const signOut = async()=>{
        await AsyncStorage.clear()
        navigation.navigate("login")
    }
    return (
        <>
            <View style={styles.container}>
                <Text>{Object.keys(currentUser).length > 0 ? currentUser?.name : "user not found"}</Text>
                <TouchableOpacity style={styles.signOutButton} onPress={()=>getUserStorage()}>
                    <Text>console log</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signOutButton} onPress={()=>signOut()}>
                    <Text>sign out</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default HomeScreen












const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#01eca5"
    },
    signOutButton:{
        padding: 10,
        backgroundColor: "#fff",
    }
})