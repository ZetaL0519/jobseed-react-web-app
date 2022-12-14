import {createAsyncThunk} from "@reduxjs/toolkit";
import { createFollow, deleteFollow, findFollowByUid } from "./follow-service";

export const createFollowThunk = createAsyncThunk(
    'createFollow',
    async(follow) => {
        return await createFollow(follow.company, follow.uid)
    }
)

export const deleteFollowThunk = createAsyncThunk(
    'deleteFollow',
    async(follow) => {
        return await deleteFollow(follow.uid, follow.cid)
    }
)

export const findFollowByUidThunk = createAsyncThunk(
    'findFollowByUid',
    async(uid) => {
        return await findFollowByUid(uid)
    }
)