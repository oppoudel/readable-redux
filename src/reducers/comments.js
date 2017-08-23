import { COMMENTS_LOAD, COMMENT_ADD, COMMENT_UPDATE } from '../actions/constants'

const initState = {
  comments: []
}

export default function comments(state = initState, action) {
  switch (action.type) {
    case COMMENTS_LOAD:
      return { ...state, comments: action.payload }
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
