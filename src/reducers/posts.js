import {
  POST_ADD,
  POSTS_LOAD,
  POST_DELETE,
  POST_UPDATE,
  ADD_POST_VOTE,
  MINUS_POST_VOTE
} from '../actions/constants'

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
    case POST_UPDATE:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload.id ? action.payload : post))
      }
    case ADD_POST_VOTE:
      const post = state.posts.find(post => post.id === action.payload)
      const newPost = { ...post, voteScore: post.voteScore + 1 }
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload ? newPost : post))
      }
    case MINUS_POST_VOTE:
      const oldPost = state.posts.find(post => post.id === action.payload)
      const updatedPost = { ...oldPost, voteScore: oldPost.voteScore - 1 }
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload ? updatedPost : post))
      }
    default:
      return state
  }
}
