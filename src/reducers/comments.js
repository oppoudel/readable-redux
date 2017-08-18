import { COMMENTS_LOAD } from '../actions/constants'

const initState = {
  comments: []
}

export default function comments(state = initState, action) {
  switch (action.type) {
    case COMMENTS_LOAD:
      return { ...state, comments: action.payload }
    default:
      return state
  }
}
