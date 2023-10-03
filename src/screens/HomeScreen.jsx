import { Text, View, ImageBackground, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import tw from "twrnc"
import DateTimePicker from '@react-native-community/datetimepicker';


const HomeScreen = ()=>{
    const navigation = useNavigation()
    const [currentDate, setCurrentDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const cleanerGetUser = async ()=>{
            const userStorage = await AsyncStorage.getItem("@user")
            if(Object.keys(JSON.parse(userStorage)).length > 0){
                setCurrentUser(JSON.parse(userStorage))
            }else{
                navigation.navigate("login")
            }
        }
        cleanerGetUser()
    },[])

    
    const handleOnDateChange =(event, selectedDate)=>{
        const date = selectedDate;
        setCurrentDate(date)
        setShowDate(!showDate)
        const dayId = `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`
        navigation.setParams({dateId: dayId})
        navigation.navigate("DateSelected",{
            dateId: dayId
        })
    }

    const signOut = async()=>{
        await AsyncStorage.clear()
        navigation.navigate("login")
    }
    return (
        <>
        <ImageBackground
        source={{uri: "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}}
        style={tw`w-full min-h-screen flex-1 items-center justify-center`}>
            <View>
                <View style={tw`flex flex-row justify-between items-center`}>
                    <View style={tw`flex items-center mx-4`}>
                        <View style={tw`w-20 h-20 rounded-full border-solid border-2 border-gray-200 shadow-2xl`}>
                            <Image
                            source={{uri: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=826&t=st=1692854231~exp=1692854831~hmac=890d90455b84ed25340a76fb179b52cb7e819cdaf544f9cd1e47b70eb46861df"}}
                            style={tw`w-full h-full rounded-full`}
                            />
                        </View>
                        <Text style={tw`text-black font-bold text-lg mt-1`}>{Object.keys(currentUser).length > 0 ? currentUser?.name : "user not found"}</Text>
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






                <TouchableOpacity style={tw`bg-sky-500`} onPress={()=>signOut()}>
                    <Text>sign out</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </>
    )
}
export default HomeScreen




