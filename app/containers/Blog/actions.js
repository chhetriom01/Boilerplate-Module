/*
 *
 * Blog actions
 *
 */

import * as types from './constants';
import action from 'utils/action';

export const fetchBlogRequest = action(types.FETCH_BLOG_REQUEST);
export const fetchBlogSuccess = action(types.FETCH_BLOG_SUCCESS, 'response');
export const fetchBlogError = action(types.FETCH_BLOG_ERROR, 'error');
