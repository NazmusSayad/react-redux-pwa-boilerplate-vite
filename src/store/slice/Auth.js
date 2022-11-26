import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jwt: null,
}

const sessionState = {
  ...initialState,
  jwt: localStorage.getItem('jwt-token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState: sessionState,
  reducers: {
    login(state, { payload }) {
      state.jwt = payload
    },
    logout(state) {
      Object.assign(state, initialState)
    },
  },
})

export const authReducers = authSlice.reducer
export default authSlice.actions
