import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, findUserByIdThunk, updateUserThunk,loginThunk, logoutThunk, profileThunk, registerThunk} from "../services/users-thunks";

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: true,
        isLoggedIn: false,
        currentUser: null,
        publicProfile: null,
        error: null
    },
    reducers: {
    },
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [findUserByIdThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.publicProfile = action.payload
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.isLoggedIn = true
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
            state.isLoggedIn = false
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.isLoggedIn = true
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null
            state.isLoggedIn = false
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        [profileThunk.pending]: (state, action) => {
            state.currentUser = null
            state.loading = true
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
            state.currentUser = null
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export default usersReducer.reducer