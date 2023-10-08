import { ScrollView, Text, View } from "react-native"
import tw from "twrnc"


const SingleRow = ({item})=>{
    return(
        <>
        <ScrollView horizontal contentContainerStyle={tw`flex flex-row-reverse p-5  bg-transparent `}>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-purple-700    px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>الرقم</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.number} لسنة {item.theYear}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-amber-400     px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>المدعى</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.plaintiff}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-blue-700      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>المدعى عليه</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.defendant}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-pink-500      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>من جلسة</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.fromSession}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-sky-500       px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>إلى جلسة</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.toSession}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-green-500     px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>نوع الدعوى</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.caseType}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-rose-500      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}>القرار</Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>{item.decision}</Text>
                        </View>
                    </View>
                    <View style={tw`w-50 h-32 bg-white rounded-lg mx-1 flex items-center border-solid border-2 border-gray-200 shadow-2xl`}>
                        <Text style={tw`w-40 h-10 rounded bg-violet-900      px-2 py-1 text-white text-xl text-center font-bold -mt-3 shadow-2xl`}></Text>
                        <View style={tw`w-full flex-1 overflow-hidden`}>
                            <Text style={tw`mt-2 p-1 text-black text-base font-bold text-center`}>""</Text>
                        </View>
                    </View>
                </ScrollView>
        
        </>
    )
}

export default SingleRow