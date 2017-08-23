import {
  POSTS_LOAD,
  CATEGORIES_LOAD,
  COMMENTS_LOAD,
  POST_DELETE,
  POST_ADD,
  POST_UPDATE,
  ADD_POST_VOTE,
  MINUS_POST_VOTE,
  COMMENT_ADD
} from './constants'
import {
  getAllPosts,
  getAllCategories,
  getCommentsById,
  destroyPost,
  createPost,
  updatePost,
  addPostLike,
  substractPostLike,
  createComment
} from '../lib/readableServices'

export const loadPosts = posts => ({ type: POSTS_LOAD, payload: posts })
export const loadCategories = categories => ({ type: CATEGORIES_LOAD, payload: categories })
export const loadComments = comments => ({ type: COMMENTS_LOAD, payload: comments })
export const deletePost = id => ({ type: POST_DELETE, payload: id })
export const addPost = post => ({ type: POST_ADD, payload: post })
export const replacePost = post => ({ type: POST_UPDATE, payload: post })
export const addPostVote = id => ({ type: ADD_POST_VOTE, payload: id })
export const minusPostVote = id => ({ type: MINUS_POST_VOTE, payload: id })
export const addComment = comment => ({ type: COMMENT_ADD, payload: comment })

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
export const savePost = post => {
  return dispatch => {
    createPost(post).then(res => dispatch(addPost(res)))
  }
}
export const editPost = editedPost => {
  return dispatch => {
    updatePost(editedPost).then(res => dispatch(replacePost(res)))
  }
}
export const upVote = id => {
  return dispatch => {
    addPostLike(id).then(() => dispatch(addPostVote(id)))
  }
}
export const downVote = id => {
  return dispatch => {
    substractPostLike(id).then(() => dispatch(minusPostVote(id)))
  }
}
export const saveComment = comment => {
  return dispatch => {
    createComment(comment).then(res => dispatch(addComment(res)))
  }
}
