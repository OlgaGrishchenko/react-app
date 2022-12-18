import { GetPostsPayload } from './../Types/posts';
import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { 
  getPosts,
  setPosts,
  getSinglePost,
  setSinglePost,
  setTotalCount,
} from "../Reducers/postsReducer";

import API from "../utils/api";

function* getPostsWorker(action: PayloadAction<GetPostsPayload>) {
  const {offset, search} = action.payload;
  const { ok, data, problem } = yield call(API.getAllPosts, offset, search);

  if (ok && data) {
    yield put(setPosts(data.results));
    yield put(setTotalCount(data.count));
  } else {
    console.warn("Error fetching posts: ", problem);
  }
}

function* getSinglePostWorker(action: PayloadAction<string>) {
  const { ok, data, problem } = yield call(API.getSinglePost, action.payload);
  if (ok && data) {
    yield put(setSinglePost(data));
  } else {
    console.warn("Error fetching single post: ", problem);
  }
}


export default function* postsSaga() {
  yield all([
    takeLatest(getPosts, getPostsWorker),
    takeLatest(getSinglePost, getSinglePostWorker),
  ]);
}