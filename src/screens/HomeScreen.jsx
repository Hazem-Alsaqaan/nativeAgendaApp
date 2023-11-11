import { Text, View, ImageBackground, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
// import AsyncStorage from "@react-native-async-storage/async-storage"
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from "react-redux"
import { loginFulfilled, logout } from "../redux/reducers/authSlice"
import { GoogleSignin } from "@react-native-google-signin/google-signin"
import tw from "twrnc"


const HomeScreen = ()=>{
    const navigation = useNavigation()
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const {currentUser} = useSelector((state)=> state.authSlice)
    const dispatch = useDispatch()

    
    const handleOnDateChange =(event, selectedDate)=>{
        const date = selectedDate;
        setCurrentDate(date)
        setShowDate(!showDate)
        // const dayId = `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`
        const dayId = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate().toString().length <= 1 ? `0${selectedDate.getDate()}` : selectedDate.getDate()}`
        navigation.setParams({dateId: dayId})
        navigation.navigate("DateSelected",{
            dateId: dayId
        })
    }

    const signOut =()=>{
        GoogleSignin.signOut()
        dispatch(logout())
    }
    return (
        <>
        <ImageBackground
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}
        style={tw`w-full min-h-full flex-1 items-center justify-center`}>
            <View>
                <View style={tw`flex flex-row justify-between items-center`}>
                    <View style={tw`flex items-center mx-4`}>
                        <View style={tw`w-20 h-20 rounded-full border-solid border-2 border-gray-200 shadow-2xl`}>
                            <Image
                            source={{uri: currentUser?.photo}}
                            // source={{uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1692854231~exp=1692854831~hmac=890d90455b84ed25340a76fb179b52cb7e819cdaf544f9cd1e47b70eb46861df"}}
                            style={tw`w-full h-full rounded-full`}
                            />
                        </View>
                        <View style={tw`mt-2 max-w-3xl p-1 `}>
                            <Text style={tw`text-black font-bold text-lg`}>
                                {Object.keys(currentUser).length > 0 ? currentUser?.name : "user not found"}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={tw`my-5 flex justify-center items-center`}>
                    <TouchableOpacity 
                    style={tw`w-52 bg-sky-500 py-2 px-4 mb-5 rounded-lg shadow-2xl flex items-center justify-center`}
                    onPress={()=>setShowDate(!showDate)}>
                        <Text style={tw`text-white text-2xl font-bold`}>حدد اليوم</Text>
                    </TouchableOpacity>
                    <Image
                    source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1693517092/judicial_agenda/main_icon_va2l3e.png"}}
                    style={tw`w-56 h-56`}
                    />
                    { showDate ?
                        <DateTimePicker
                        value={currentDate}
                        onChange={handleOnDateChange}
                        display="spinner"
                        />
                        : ""
                    }
                </View>
                <View style={tw`flex flex-row items-center justify-between `}>
                    <Image
                    source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1696339068/judicial_agenda/diary_10748433_mgiezi.png"}}
                    style={tw`w-20 h-20`}
                        />
                    <Image
                    source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1694094193/judicial_agenda/user-interface_2920328_rgkmky.png"}}
                    style={tw`w-35 h-35 mx-3`}
                        />
                    <Image
                    source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1696339157/judicial_agenda/24-hours-support_5075962_cteslj.png"}}
                    style={tw`w-20 h-20`}
                        />
                </View>





                <TouchableOpacity 
                style={tw`bg-sky-500 rounded-lg px-5 py-2 flex items-center justify-center mt-5 shadow-2xl flex-row`} 
                onPress={()=>signOut()}>
                    <Text style={tw`text-white font-bold text-xl pr-2`}>تسجيل الخروج</Text>
                    <Feather name="power" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </>
    )
}
export default HomeScreen




