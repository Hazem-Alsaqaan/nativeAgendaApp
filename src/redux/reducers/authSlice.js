// import { createSlice } from "@reduxjs/toolkit"
// import AsyncStorage from "@react-native-async-storage/async-storage"

// const userStorage = AsyncStorage.getItem("@user")

// const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         currentUser: JSON.parse(userStorage) ? JSON.parse(userStorage) : null,
//         token: ""
//     },
//     reducers: {
//         loginFulfilled: (state, action)=>{
//             state.currentUser = action.payload
//         }
//     }
// })


// export const {  loginFulfilled  } = authSlice.actions
// export default  authSlice.reducer