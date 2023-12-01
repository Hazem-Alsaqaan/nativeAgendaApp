import { useNavigation, useRoute } from "@react-navigation/native"
import { ScrollView, Text, TouchableOpacity, TextInput, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import tw from "twrnc"
import { useDispatch, useSelector } from "react-redux"
import { setButtonMood, setDefendant, setItemId, setNumber, setPlaintiff, setTheYear, setTypeCase } from "../redux/reducers/caseStateSlice";
import { addNewCases, showCasesByDate, updateCases } from "../redux/actions/casesAction";
import AddSession from "./AddSession";
import { setSessionInputVisiable } from "../redux/reducers/casesSlice";


const CreateCase = () => {
    const dispatch = useDispatch()
    const { dateId } = useRoute().params
    const navigation = useNavigation()
    const { token } = useSelector((state) => state.authSlice)
    const { caseStates } = useSelector((state) => state.caseStateSlice)
    const { buttonMood } = useSelector((state) => state.caseStateSlice)

    // handle add new cases
    const submitCreateCase = () => {
        dispatch(addNewCases({
            number: caseStates.number,
            theYear: caseStates.theYear,
            plaintiff: caseStates.plaintiff,
            defendant: caseStates.defendant,
            typeCase: caseStates.typeCase,
            token: token
        }));
        // return inputs to empty value
        dispatch(setDefendant(""))
        dispatch(setNumber(""))
        dispatch(setPlaintiff(""))
        dispatch(setTheYear(""))
        dispatch(setTypeCase(""))
        dispatch(setSessionInputVisiable(true))
    }
    // handle update value of cases
    const submitUpdateCases = () => {
        dispatch(setButtonMood("create"))
        if (caseStates.itemId) {
            dispatch(updateCases({
                id: caseStates.itemId,
                number: caseStates.number,
                theYear: caseStates.theYear,
                plaintiff: caseStates.plaintiff,
                defendant: caseStates.defendant,
                typeCase: caseStates.typeCase,
                token: token
            }))
            dispatch(showCasesByDate({ token: token, date: dateId }));
            // return inputs to empty value
            dispatch(setDefendant(""))
            dispatch(setNumber(""))
            dispatch(setPlaintiff(""))
            dispatch(setTheYear(""))
            dispatch(setTypeCase(""))
        }
    }

    return (
        <>
            <View style={tw`flex-1 w-full p-5`}>
                <ScrollView style={tw`flex-1 bg-white/25 rounded-2xl my-2 p-5`}>
                    <View style={tw`flex flex-row justify-between items-center mb-2`}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={tw`flex flex-row items-center justify-center bg-transparent px-3 py-1 border-solid border-2 border-sky-500 rounded-lg`}>
                            <Ionicons name="return-down-back-outline" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={tw`text-lg font-bold text-sky-500`}>تاريخ الصفحة: {dateId}</Text>
                    </View>
                    <View>
                        <Text style={tw`text-center font-bold text-base`}>الرقم</Text>
                        <TextInput
                            placeholder="الرقم"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                            onChangeText={(text) => dispatch(setNumber(text))}
                            value={`${caseStates.number}`}
                        />
                        <Text style={tw`text-center font-bold text-base`}>لسنة</Text>
                        <TextInput
                            placeholder="لسنة"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                            onChangeText={(text) => dispatch(setTheYear(text))}
                            value={`${caseStates.theYear}`}
                        />
                        <Text style={tw`text-center font-bold text-base`}>المدعى</Text>
                        <TextInput
                            placeholder="المدعى"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                            onChangeText={(text) => dispatch(setPlaintiff(text))}
                            value={`${caseStates.plaintiff}`}
                        />
                        <Text style={tw`text-center font-bold text-base`}>المدعى عليه</Text>
                        <TextInput
                            placeholder="المدعى عليه"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                            onChangeText={(text) => dispatch(setDefendant(text))}
                            value={`${caseStates.defendant}`}
                        />
                        <Text style={tw`text-center font-bold text-base`}>نوع الدعوى</Text>
                        <TextInput
                            placeholder="نوع الدعوى"
                            style={tw`mb-4 placeholder:text-gray-900 rounded-xl text-lg mx-2 bg-white bg-opacity-40 p-2  border-b-2 border-solid border-b-slate-300 text-center`}
                            onChangeText={(text) => dispatch(setTypeCase(text))}
                            value={`${caseStates.typeCase}`}
                        />
                        {buttonMood === "create"
                            ? <TouchableOpacity onPress={() => submitCreateCase()} style={tw`bg-blue-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                                <Text style={tw`text-white font-bold text-lg`}>إنشاء</Text>
                            </TouchableOpacity>
                            : buttonMood === "edit" ? <TouchableOpacity onPress={() => submitUpdateCases()} style={tw`bg-blue-500 rounded-lg  my-1 p-1 flex items-center justify-center`}>
                                <Text style={tw`text-white font-bold text-lg`}>تعديل</Text>
                            </TouchableOpacity> : ""
                        }

                    </View>
                </ScrollView>
                <TextInput />
            </View>
        </>
    )
}

export default CreateCase