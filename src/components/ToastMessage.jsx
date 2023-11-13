import { ToastAndroid } from "react-native"


const ToastMessage = (toastMessage)=>{
    if(Object.keys(toastMessage).length > 0){
        ToastAndroid.showWithGravity(
            toastMessage,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
        )
    }
}
export default ToastMessage