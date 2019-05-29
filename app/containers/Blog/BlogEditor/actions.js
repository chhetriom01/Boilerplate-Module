/*
 *
 * BlogEditor actions
 *
 */

import * as types from './constants';
import action from 'utils/action';

export const postBlogRequest = action(types.POST_BLOG_REQUEST, 'data');
export const postBlogSuccess = action(types.POST_BLOG_SUCCESS, 'response');
export const postBlogError = action(types.POST_BLOG_ERROR, 'error');
