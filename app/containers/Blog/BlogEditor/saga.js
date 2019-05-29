import { take, call, put, select, fork, takeLatest } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import * as actions from './actions';
import * as types from './constants';
import { push } from 'connected-react-router';
function* redirectOnSuccess() {
  const action = yield take(types.POST_BLOG_SUCCESS);
  yield put(push('/admin/blog'));
}

function* postData(action) {
  console.log('from saga', action.data);
  const token = localStorage.getItem('token');
  const { data } = action;
  const apiUri = `/blog`;
  const successWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      apiUri,
      actions.postBlogSuccess,
      actions.postBlogError,
      data,
      token,
    ),
  );
}

// Individual exports for testing
export default function* blogEditorSaga() {
  yield takeLatest(types.POST_BLOG_REQUEST, postData);
}
