import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
    getUser: () => {},
    createUser:()=>{},
    deleteUser:()=>{},
    updateUser:()=>{},
    setUser: (state, action) => {
      const userData = action.payload;
      return {...state.userData, userData}
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser, setUser, createUser, deleteUser, updateUser } = userSlice.actions

export default userSlice.reducer
