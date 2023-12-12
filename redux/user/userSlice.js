import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    phonenumber: '',
    username: '',
    birthday: '',
    gender: '',
    weight: '',
    height: ''
  },
  reducers: {
    updateUser: (state, action) => {
      const {
        name = '',
        email = '',
        phonenumber = '',
        username = '',
        birthday = '',
        gender = '',
        weight = '',
        height = ''
      } = action.payload
      state.name = name ? name : state.name
      state.email = email ? email : state.email
      state.username = username ? username : state.username
      state.birthday = birthday ? birthday : state.birthday
      state.phonenumber = phonenumber ? phonenumber : state.phonenumber
      state.gender = gender ? gender : state.gender
      state.height = height ? height : state.height
      state.weight = weight ? weight : state.weight
    },
    resetUser: (state) => {
      state.name = ''
      state.email = ''
      state.username = ''
      state.birthday = ''
      state.phonenumber = ''
      state.gender = ''
      state.height = ''
      state.weight = ''
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer
