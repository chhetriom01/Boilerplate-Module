/*
 *
 * BlogCategoryEditor actions
 *
 */

import * as types from './constants';
import action from 'utils/action'

export const postBlogCategoryRequest = action(types.POST_BLOG_CATEGORY_REQUEST,'data');
export const postBlogCategorySuccess = action(types.POST_BLOG_CATEGORY_SUCCESS,"response");
export const postBlogCategoryError = action(types.POST_BLOG_CATEGORY_ERROR,"error");

