import {useNavigation, useRoute} from "@react-navigation/native"
import { ScrollView, Text, TouchableOpacity , TextInput, View} from "react-native"
import { Ionicons } from '@expo/vector-icons'; 
import tw from "twrnc"
import { useDispatch, useSelector } from "react-redux"
import { setDecision, setDefendant, setFromSession, setItemId, setNumber, setPlaintiff, setTheYear, setToSession, setTypeCase } from "../redux/reducers/caseStateSlice";
import { addNewCases, updateCases } from "../redux/actions/casesAction";


const CreateCase = ()=>{
    const dispatch = useDispatch()
    const {dateId} = useRoute().params
    const navigation = useNavigation()
    const { token } = useSelector((state)=>state.authSlice)
    // import case states from caseStateSlice
    const { number,
            theYear,
            plaintiff, 
            defendant, 
            typeCase, 
            fromSession, 
            toSession, 
            decision,
            itemId } = useSelector((state)=>state.caseStateSlice)


    // handle add new cases
    const submitCreateCase = ()=>{
        dispatch(addNewCases({
            number,
            theYear,
            plaintiff, 
            defendant, 
            typeCase, 
            toSession, 
            fromSession, 
            decision,
            token: token
        }));
        // return inputs to empty value
        dispatch(setDecision(""))
        dispatch(setDefendant(""))
        dispatch(setFromSession(""))
        dispatch(setNumber(""))
        dispatch(setPlaintiff(""))
        dispatch(setTheYear(""))
        dispatch(setToSession(""))
        dispatch(setTypeCase(""))
    }
    // handle update value of cases
    const submitUpdateCases = ()=>{
        dispatch(updateCases({
            id: itemId,
            number,
            theYear,
            plaintiff, 
            defendant, 
            typeCase, 
            toSession, 
            fromSession, 
            decision,
            token: token
        }))
        // return inputs to empty value
        dispatch(setItemId(""))
        dispatch(setDecision(""))
        dispatch(setDefendant(""))
        dispatch(setFromSession(""))
        dispatch(setNumber(""))
        dispatch(setPlaintiff(""))
        dispatch(setTheYear(""))
        dispatch(setToSession(""))
        dispatch(setTypeCase(""))
    }
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
                        <Text style={tw`text-center font-bold text-base`}>الرقم</Text>
                        <TextInput
                        placeholder="الرقم"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setNumber(text))}
                        value={number}
                        />
                        <Text style={tw`text-center font-bold text-base`}>لسنة</Text>
                        <TextInput
                        placeholder="لسنة"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setTheYear(text))}
                        value={theYear}
                        />
                        <Text style={tw`text-center font-bold text-base`}>المدعى</Text>
                        <TextInput
                        placeholder="المدعى"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setPlaintiff(text))}
                        value={plaintiff}
                        />
                        <Text style={tw`text-center font-bold text-base`}>المدعى عليه</Text>
                        <TextInput
                        placeholder="المدعى عليه"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setDefendant(text))}
                        value={defendant}
                        />
                        <Text style={tw`text-center font-bold text-base`}>من جلسة</Text>
                        <TextInput
                        placeholder="من جلسة"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setFromSession(text))}
                        value={fromSession}
                        />
                        <Text style={tw`text-center font-bold text-base`}>الى جلسة</Text>
                        <TextInput
                        placeholder="إلى جلسة"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setToSession(text))}
                        value={toSession}
                        />
                        <Text style={tw`text-center font-bold text-base`}>نوع الدعوى</Text>
                        <TextInput
                        placeholder="نوع الدعوى"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setTypeCase(text))}
                        value={typeCase}
                        />
                        <Text style={tw`text-center font-bold text-base`}>القرار</Text>
                        <TextInput
                        placeholder="القرار"
                        style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                        onChangeText={(text)=>dispatch(setDecision(text))}
                        value={decision}
                        />
                        <TouchableOpacity onPress={()=>submitCreateCase()}  style={tw`bg-sky-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                            <Text style={tw`text-white font-bold text-lg`}>إنشاء</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>submitUpdateCases()} style={tw`bg-sky-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
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