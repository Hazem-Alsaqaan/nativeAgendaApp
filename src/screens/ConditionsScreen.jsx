import { PixelRatio, SafeAreaView, Text, View } from "react-native"
import tw from "twrnc"

const ConditionsScreen = () => {
    const fonScale = PixelRatio.getFontScale()
    return (
        <>
            <SafeAreaView style={tw`flex-1 items-center justify-center bg-white`}>
                <Text style={tw`font-900 text-[${fonScale * 18}px] text-indigo-500`}>شروط الاستخدام</Text>
                <View style={tw`justify-center p-5`}>
                    <Text style={tw`py-2 font-bold`}>• إن استخدام التطبيق  يعني موافقتك على هذه الشروط والأحكام واتفاقك على الالتزام بها</Text>
                    <Text style={tw`py-2 font-bold`}>• يحق للتطبيق تغيير شروط الاستخدام في أي وقت، ويجب عليك الالتزام بالشروط الجديدة عند استخدام التطبيق.</Text>
                    <Text style={tw`py-2 font-bold`}>• يحظر استخدام التطبيق لأي غرض غير قانوني أو غير أخلاقي أو يتعارض مع هذه الشروط والأحكام.</Text>
                    <Text style={tw`py-2 font-bold`}>• يجب عليك تقديم معلومات دقيقة وصحيحة عند تسجيل الدخول على التطبيق وتحديثها عند الحاجة.</Text>
                </View>
            </SafeAreaView>
        </>
    )
}
export default ConditionsScreen