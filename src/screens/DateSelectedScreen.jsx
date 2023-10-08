import { ImageBackground, ScrollView  } from "react-native"
import tw from "twrnc"
import ShowDateCases from "../components/ShowDateCases"
import CreateCase from "../components/CreateCase"

const DateSelectedScreen = ()=>{
    
    return(
        <>
        <ScrollView>
        <ImageBackground
        source={{uri:"https://res.cloudinary.com/dkhu7rt8n/image/upload/v1691845471/judicial_agenda/14547742_rm218batch4-ning-34_fxd8rj.jpg"}} 
        style={tw`w-full min-h-screen flex-1 items-center justify-center py-7`}>
                <CreateCase/>
                <ShowDateCases/>
        </ImageBackground>
        </ScrollView>
        </>
    )
}

export default DateSelectedScreen