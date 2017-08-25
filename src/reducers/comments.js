import { COMMENTS_LOAD, COMMENT_ADD, COMMENT_UPDATE } from '../actions/constants'
import uniqBy from 'lodash/uniqBy'

const initState = {
  comments: []
}

export default function comments(state = initState, action) {
  switch (action.type) {
    case COMMENTS_LOAD:
      const allComments = state.comments.concat(action.payload)
      const flattenedComments = uniqBy(allComments, 'id')
      return { ...state, comments: flattenedComments }
    case COMMENT_ADD:
      return { ...state, comments: state.comments.concat(action.payload) }
    case COMMENT_UPDATE:
      return {
        ...state,
        comments: state.comments.map(
          comment => (comment.id === action.payload.id ? action.payload : comment)
        )
      }
    default:
      return state
  }
}
