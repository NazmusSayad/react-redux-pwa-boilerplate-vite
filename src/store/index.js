import { configureStore } from '@reduxjs/toolkit'
import { authReducers } from '$slice/Auth'

const store = configureStore({
  reducer: {
    auth: authReducers,
  },
})

window.$store = store
export default store
