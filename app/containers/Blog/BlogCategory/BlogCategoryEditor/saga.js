import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';
import { push } from 'connected-react-router';

function* redirectOnSuccess() {
  const action = yield take(types.POST_BLOG_CATEGORY_SUCCESS);
  yield put(push('/admin/blog/blogcategory'));
}

function* postData(action) {
  const apiUri = `/blogcategory`;
  const { data } = action;
  const token = localStorage.getItem('token');
  const succesWatcher = yield fork(redirectOnSuccess);
  yield fork(
    XcelTrip.post(
      apiUri,
      actions.postBlogCategorySuccess,
      actions.postBlogCategoryError,
      data,
      token,
    ),
  );
}

export default function* blogCategoryEditorSaga() {
  yield takeLatest(types.POST_BLOG_CATEGORY_REQUEST, postData);
}
