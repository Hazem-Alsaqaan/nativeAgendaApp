import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"



const RegisterScreen = ()=>{
    const navigation = useNavigation()
    return (
        <>
        <ImageBackground
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}
        style={styles.container}
        >
            <View>
                <Text style={styles.title}>الأجندة القضائية</Text>
            </View>
            <Image
            source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694094219/judicial_agenda/letter_5075929_swbsj1.png"}}
            width={280}
            height={450}
            />
            <Text style={styles.paragraph}>سجل الدخول باستخدام بريدك الالكترونى</Text>
            <TouchableOpacity
            style={styles.googleButton}
            onPress={()=>navigation.navigate("home")}
            >
                <Image
                source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694190476/google_2504914_ft5isu.png"}}
                width={45}
                height={45}
                />
                <View style={styles.googleButtonTextContainer}>
                    <Text style={styles.googleButtonText}>Google</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.footerParagraph}>
                <Text onPress={()=>navigation.navigate("login")} style={styles.textTwo}> تسجيل الدخول</Text>
                <Text style={styles.textOne}>لديك حساب بالفعل؟</Text>
            </View>
        </ImageBackground>
        </>
    )
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
    },
    title:{
        color: "#0ea4e8",
        fontSize: 44,
        fontWeight: "900",
    },
    paragraph: {
        color: "#0ea4e8",
        fontSize: 20,
        fontWeight: "bold"
    },
    googleButton:{
        backgroundColor: "#fff",
        borderRadius: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        marginVertical: 20,
        width: 220,
        height: 50,
        shadowColor: "#777",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 15
    },
    googleButtonTextContainer:{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    googleButtonText:{
        color: "#0ea4e8",
        fontSize: 24
    },
    footerParagraph: {
        display: "flex",
        flexDirection: "row"
    },
    textOne:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textTwo:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#0ea4e8"
    }
})