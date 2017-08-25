import * as constants from './constants'
import * as services from '../lib/readableServices'

const loadComments = comments => ({ type: constants.COMMENTS_LOAD, payload: comments })
const addComment = comment => ({ type: constants.COMMENT_ADD, payload: comment })
const replaceComment = comment => ({ type: constants.COMMENT_UPDATE, payload: comment })
const addCommentVote = id => ({ type: constants.ADD_COMMENT_VOTE, payload: id })
const minusCommentVote = id => ({ type: constants.MINUS_COMMENT_VOTE, payload: id })

export const fetchComments = id => {
  return dispatch => {
    services.getCommentsById(id).then(comments => dispatch(loadComments(comments)))
  }
}
export const saveComment = comment => {
  return dispatch => {
    services.createComment(comment).then(res => dispatch(addComment(res)))
  }
}
export const editComment = editedComment => {
  return dispatch => {
    services.updateComment(editedComment).then(res => dispatch(replaceComment(res)))
  }
}
export const upCommentVote = id => {
  return dispatch => {
    services.addCommentLike(id).then(() => dispatch(addCommentVote(id)))
  }
}
export const downCommentVote = id => {
  return dispatch => {
    services.substractCommentLike(id).then(() => dispatch(minusCommentVote(id)))
  }
}
