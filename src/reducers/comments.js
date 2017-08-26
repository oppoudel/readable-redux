import * as constants from '../actions/constants'
import uniqBy from 'lodash/uniqBy'

const initState = {
  comments: []
}

export default function comments(state = initState, action) {
  switch (action.type) {
    case constants.COMMENTS_LOAD:
      const allComments = state.comments.concat(action.payload)
      const flattenedComments = uniqBy(allComments, 'id')
      return { ...state, comments: flattenedComments }
    case constants.COMMENT_ADD:
      return { ...state, comments: state.comments.concat(action.payload) }
    case constants.COMMENT_UPDATE:
      return {
        ...state,
        comments: state.comments.map(
          comment => (comment.id === action.payload.id ? action.payload : comment)
        )
      }
    case constants.ADD_COMMENT_VOTE:
      const comment = state.comments.find(comment => comment.id === action.payload)
      const newComment = { ...comment, voteScore: comment.voteScore + 1 }
      return {
        ...state,
        comments: state.comments.map(
          comment => (comment.id === action.payload ? newComment : comment)
        )
      }
    case constants.MINUS_COMMENT_VOTE:
      const oldComment = state.comments.find(comment => comment.id === action.payload)
      const updatedComment = { ...oldComment, voteScore: oldComment.voteScore - 1 }
      return {
        ...state,
        comments: state.comments.map(
          comment => (comment.id === action.payload ? updatedComment : comment)
        )
      }
    default:
      return state
  }
}
