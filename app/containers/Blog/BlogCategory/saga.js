import { take, call, put, select, takeLatest, fork } from 'redux-saga/effects';
import XcelTrip from 'utils/apiHelper';
import * as types from './constants';
import * as actions from './actions';

function* getBlogCategory() {
  const apiUri = `/blogcategory`;
  const token = localStorage.getItem('token');
  yield fork(
    XcelTrip.get(
      apiUri,
      actions.getBlogCategorySuccess,
      actions.getBlogCategoryError,
      token,
    ),
  );
}

export default function* blogCategorySaga() {
  yield takeLatest(types.GET_BLOG_CATEGORY_REQUEST, getBlogCategory);
}
