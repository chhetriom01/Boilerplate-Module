import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import XcelTRip from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';

function* fetchBlog() {
  const apiUri = `blog`;
  const token = localStorage.getItem('token');
  yield fork(
    XcelTRip.get(
      apiUri,
      actions.fetchBlogSuccess,
      actions.fetchBlogRequest,
      token,
    ),
  );
}

export default function* blogSaga() {
  yield takeLatest(types.FETCH_BLOG_REQUEST, fetchBlog);
}
