import {createAsyncThunk} from "@reduxjs/toolkit";
import { createFollow, deleteFollow, findFollowByUid } from "./follow-service";

export const createFollowThunk = createAsyncThunk(
    'createFollow',
    async(company) => {
        return await createFollow(company.company, company.uid)
    }
)

export const deleteFollowThunk = createAsyncThunk(
    'deleteFollow',
    async(fid) => {
        return await deleteFollow(fid)
    }
)

export const findFollowByUidThunk = createAsyncThunk(
    'findFollowByUid',
    async(uid) => {
        return await findFollowByUid(uid)
    }
)