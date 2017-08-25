import { COMMENTS_LOAD, COMMENT_ADD, COMMENT_UPDATE } from './constants'
import { getCommentsById, createComment, updateComment } from '../lib/readableServices'

const loadComments = comments => ({ type: COMMENTS_LOAD, payload: comments })
const addComment = comment => ({ type: COMMENT_ADD, payload: comment })
const replaceComment = comment => ({ type: COMMENT_UPDATE, payload: comment })

export const fetchComments = id => {
  return dispatch => {
    getCommentsById(id).then(comments => dispatch(loadComments(comments)))
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
