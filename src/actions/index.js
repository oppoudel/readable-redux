import {
  POSTS_LOAD,
  CATEGORIES_LOAD,
  COMMENTS_LOAD,
  POST_DELETE,
  POST_ADD,
  POST_UPDATE,
  ADD_POST_VOTE,
  MINUS_POST_VOTE,
  COMMENT_ADD,
  COMMENT_UPDATE
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
  createComment,
  updateComment
} from '../lib/readableServices'

const loadPosts = posts => ({ type: POSTS_LOAD, payload: posts })
const loadCategories = categories => ({ type: CATEGORIES_LOAD, payload: categories })
const loadComments = comments => ({ type: COMMENTS_LOAD, payload: comments })
const deletePost = id => ({ type: POST_DELETE, payload: id })
const addPost = post => ({ type: POST_ADD, payload: post })
const replacePost = post => ({ type: POST_UPDATE, payload: post })
const addPostVote = id => ({ type: ADD_POST_VOTE, payload: id })
const minusPostVote = id => ({ type: MINUS_POST_VOTE, payload: id })
const addComment = comment => ({ type: COMMENT_ADD, payload: comment })
const replaceComment = comment => ({ type: COMMENT_UPDATE, payload: comment })

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
export const editComment = editedComment => {
  return dispatch => {
    updateComment(editedComment).then(res => dispatch(replaceComment(res)))
  }
}
