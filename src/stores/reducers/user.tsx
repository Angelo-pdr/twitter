import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  isLogin: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = []
      state.isLogin = false
    },
    login: (state, action: PayloadAction<never[]>) => {
      state.user = action.payload
      state.isLogin = true
      console.log(state.user)
      console.log(state.isLogin)
    }
  }
})

export const { logout, login } = userSlice.actions
export default userSlice.reducer
