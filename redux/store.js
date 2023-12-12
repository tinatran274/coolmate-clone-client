import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import authReducer from './auth/authSlice'
import userReducer from './user/userSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    user: userReducer
  }
})
