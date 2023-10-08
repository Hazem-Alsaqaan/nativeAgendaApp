import {useNavigation, useRoute} from "@react-navigation/native"
import { ScrollView, Text, TouchableOpacity , TextInput, View} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import tw from "twrnc"

const CreateCase = ()=>{
    const {dateId} = useRoute().params
    const navigation = useNavigation()
    return(
        <>
            <View style={tw`flex-1 w-full p-5`}>
                <ScrollView style={tw`flex-1 bg-white/25 rounded-2xl my-2 p-5`}>
                    <View style={tw`flex flex-row justify-between items-center mb-2`}>
                        <TouchableOpacity
                        onPress={()=>navigation.goBack()} 
                        style={tw`flex flex-row items-center justify-center bg-transparent px-3 py-1 border-solid border-2 border-sky-500 rounded-lg`}>
                            <Text style={tw`text-center text-base font-bold text-sky-600 mx-0.5`}>عوده</Text>
                            <Ionicons name="return-down-back-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={tw`text-lg font-bold`}>تاريخ الصفحة: {dateId}</Text>
                    </View>
                    <View>
                        <TextInput
                        placeholder="الرقم"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="المدعى"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="المدعى عليه"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="من جلسة"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="إلى جلسة"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="نوع الدعوى"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TextInput
                        placeholder="القرار"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300`}
                        />
                        <TouchableOpacity style={tw`bg-sky-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                            <Text style={tw`text-white font-bold text-lg`}>إنشاء</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`bg-sky-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                            <Text style={tw`text-white font-bold text-lg`}>تعديل</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <TextInput/>
            </View>
        </>
    )
}

export default CreateCase