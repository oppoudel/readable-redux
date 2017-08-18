import { CATEGORIES_LOAD } from '../actions/constants'
const initState = {
  categories: []
}
export default function(state = initState, action) {
  switch (action.type) {
    case CATEGORIES_LOAD:
      return { ...state, categories: action.payload }
    default:
      return state
  }
}
