import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"


const SelectBox = () => {
    const naigation = useNavigation()
    return (
        <View style={tw`p-2`}>
            <Text style={tw`text-base font-900 text-center`}>القوانين</Text>
            <View style={tw`w-full flex-row`}>
                <TouchableOpacity
                    onPress={() => naigation.navigate("oquobat")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>قانون العقوبات</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => naigation.navigate("ijraat")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>قانون الاجراءات الجنائية</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`w-full flex-row`}>
                <TouchableOpacity
                    onPress={() => naigation.navigate("madany")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>القانون المدني</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => naigation.navigate("morafaat")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>قانون المرافعات</Text>
                </TouchableOpacity>
            </View>
            <View style={tw`w-full flex-row`}>
                <TouchableOpacity
                    onPress={() => naigation.navigate("ahwal")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>قانون الاحوال الشخصية</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => naigation.navigate("mohamah")}
                    style={tw`bg-indigo-600  h-12 rounded-3xl p-2 m-1 shadow-2xl flex-1 items-center justify-center`}>
                    <Text style={tw`text-white font-900 text-base`}>قانون المحاماة</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectBox