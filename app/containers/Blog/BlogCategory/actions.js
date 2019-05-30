/*
 *
 * BlogCategory actions
 *
 */

import * as types from './constants';
import action from 'utils/action'

export const getBlogCategoryRequest = action(types.GET_BLOG_CATEGORY_REQUEST);
export const getBlogCategorySuccess = action(types.GET_BLOG_CATEGORY_SUCCESS,"response");
export const getBlogCategoryError = action(types.GET_BLOG_CATEGORY_ERROR,'error');
