import { Text, View, StyleSheet } from "react-native"


const RegisterScreen = ()=>{
    return (
        <>
            <View style={styles.container}>
                <Text>Register</Text>
            </View>
        </>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#01eca5"
    }
})