import { POST_ADD, POSTS_LOAD, POST_DELETE } from '../actions/constants'

const initState = {
  posts: []
}

export const filterDeletedPosts = posts => posts.filter(post => !post.deleted)

export default (state = initState, action) => {
  switch (action.type) {
    case POST_ADD:
      return { ...state, posts: state.posts.concat(action.payload) }
    case POSTS_LOAD:
      return { ...state, posts: action.payload }
    case POST_DELETE:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload) }
    default:
      return state
  }
}
