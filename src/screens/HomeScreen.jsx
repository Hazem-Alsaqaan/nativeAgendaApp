import { Text, View, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"





const HomeScreen = ()=>{
    const [currentUser, setCurrentUser] = useState()
    useEffect(()=>{
        const cleaner = async()=>{
            const userStorage = await AsyncStorage.getItem("@user")
            setCurrentUser(JSON.parse(userStorage))
        }
        return()=> cleaner()
    },[currentUser])
    return (
        <>
            <View style={styles.container}>
                <Text>Home</Text>
                {currentUser ? <Text>{currentUser?.email}</Text> : <Text>loading...</Text>}
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
    }
})