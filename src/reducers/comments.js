import { COMMENTS_LOAD, COMMENT_ADD } from '../actions/constants'

const initState = {
  comments: []
}

export default function comments(state = initState, action) {
  switch (action.type) {
    case COMMENTS_LOAD:
      return { ...state, comments: action.payload }
    case COMMENT_ADD:
      return { ...state, comments: state.comments.concat(action.payload) }
    default:
      return state
  }
}
