// import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'


// const createUser = createAsyncThunk('users/create', async (userData, {rejectedWithValue}) => {
//     try {
//         const response = await axios.post("https://65b09dd3d16d31d11bdcdd04.mockapi.io/users", userData);
//         console.log(response);
//         return response.data;
//     } catch (error) {
//         return rejectedWithValue(error);
//     }
// });

// const initialState = {
//     users: [],
//     loading: false,
//     error: null
// }

// export const userSlice = createSlice({
//     name: 'userDetail',
//     initialState,
//     // reducers: {

//     // },
//     extraReducers: {
//         [createUser.pending]: (state) => {
//             state.loading = true;
//         },
//         [createUser.fulfilled]: (state, action) => {
//             state.loading = false;
//             state.users.push(action.payload);
//         },
//         [createUser.rejected]: (state, action) => {
//             state.error = action.payload
//         }
//     }
// })

// // Action creators are generated for each case reducer function
// // export const {  } = userSlice.actions
// export default userSlice.reducer