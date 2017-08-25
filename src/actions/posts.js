import * as constants from './constants'
import * as services from '../lib/readableServices'

const loadPosts = posts => ({ type: constants.POSTS_LOAD, payload: posts })
const deletePost = id => ({ type: constants.POST_DELETE, payload: id })
const addPost = post => ({ type: constants.POST_ADD, payload: post })
const replacePost = post => ({ type: constants.POST_UPDATE, payload: post })
const addPostVote = id => ({ type: constants.ADD_POST_VOTE, payload: id })
const minusPostVote = id => ({ type: constants.MINUS_POST_VOTE, payload: id })

export const fetchAllPosts = () => {
  return dispatch => {
    services.getAllPosts().then(posts => dispatch(loadPosts(posts)))
  }
}
export const removePost = id => {
  return dispatch => {
    services.destroyPost(id).then(() => dispatch(deletePost(id)))
  }
}
export const savePost = post => {
  return dispatch => {
    services.createPost(post).then(res => dispatch(addPost(res)))
  }
}
export const editPost = editedPost => {
  return dispatch => {
    services.updatePost(editedPost).then(res => dispatch(replacePost(res)))
  }
}
export const upVote = id => {
  return dispatch => {
    services.addPostLike(id).then(() => dispatch(addPostVote(id)))
  }
}
export const downVote = id => {
  return dispatch => {
    services.substractPostLike(id).then(() => dispatch(minusPostVote(id)))
  }
}
