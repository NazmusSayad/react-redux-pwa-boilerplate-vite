import { configureStore } from '@reduxjs/toolkit'
import authReducers from '$slice/auth'

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
})

export default store
