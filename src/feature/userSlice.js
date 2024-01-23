import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  position: 0 //position of edit user details
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

    createUser: (state, action) => {
      const user = action.payload.user
      state.users.push(user)
    },

    editUser: (state, action) => {
      const user = action.payload.user
      state.users[action.payload.position] = user
      console.log("editUser: payload "+JSON.stringify(action))
      console.log("editUser: users "+JSON.stringify(state.users))

    },

    deleteUser: (state, action) => {
      state.users.splice(action.payload.position, 1)
    },

    crudUserPosition: (state, action) => {
      const position = action.payload.position
      state.position = position
    }

  },
})

// Action creators are generated for each case reducer function
export const { createUser, editUser, deleteUser, crudUserPosition } = userSlice.actions

export default userSlice.reducer