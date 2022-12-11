import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllUsers,findUserById, updateUser, register, login, logout, profile, deleteUser} from "./users-service";

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async(uid) => await deleteUser(uid)
)

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (uid) => await findUserById(uid)
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)
export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (user) => await updateUser(user)
)