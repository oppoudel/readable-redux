//import { v4 } from 'node-uuid'

import { POSTS_LOAD, CATEGORIES_LOAD, COMMENTS_LOAD, POST_DELETE } from './constants'
import {
  getAllPosts,
  getAllCategories,
  getCommentsById,
  destroyPost
} from '../lib/readableServices'

export const loadPosts = posts => ({ type: POSTS_LOAD, payload: posts })
export const loadCategories = categories => ({ type: CATEGORIES_LOAD, payload: categories })
export const loadComments = comments => ({ type: COMMENTS_LOAD, payload: comments })
export const deletePost = id => ({ type: POST_DELETE, payload: id })

export const fetchAllPosts = () => {
  return dispatch => {
    getAllPosts().then(posts => dispatch(loadPosts(posts)))
  }
}
export const fetchCategories = () => {
  return dispatch => {
    getAllCategories().then(categories => dispatch(loadCategories(categories)))
  }
}
export const fetchComments = id => {
  return dispatch => {
    getCommentsById(id).then(comments => dispatch(loadComments(comments)))
  }
}

export const removePost = id => {
  return dispatch => {
    destroyPost(id).then(() => dispatch(deletePost(id)))
  }
}
