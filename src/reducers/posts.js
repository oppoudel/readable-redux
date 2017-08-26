import * as constants from '../actions/constants'

const initState = {
  posts: []
}

export const filterDeletedPosts = posts => posts.filter(post => !post.deleted)

export default (state = initState, action) => {
  switch (action.type) {
    case constants.POST_ADD:
      return { ...state, posts: state.posts.concat(action.payload) }
    case constants.POSTS_LOAD:
      return { ...state, posts: action.payload }
    case constants.POST_DELETE:
      return { ...state, posts: state.posts.filter(post => post.id !== action.payload) }
    case constants.POST_UPDATE:
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload.id ? action.payload : post))
      }
    case constants.ADD_POST_VOTE:
      const post = state.posts.find(post => post.id === action.payload)
      const newPost = { ...post, voteScore: post.voteScore + 1 }
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload ? newPost : post))
      }
    case constants.MINUS_POST_VOTE:
      const oldPost = state.posts.find(post => post.id === action.payload)
      const updatedPost = { ...oldPost, voteScore: oldPost.voteScore - 1 }
      return {
        ...state,
        posts: state.posts.map(post => (post.id === action.payload ? updatedPost : post))
      }
    case constants.SORT_POSTS:
      return {
        ...state,
        posts: state.posts.slice().sort((a, b) => a.voteScore - b.voteScore)
      }
    default:
      return state
  }
}
