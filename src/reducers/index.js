import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
import comments from './comments'

const rootReducer = combineReducers({
  posts,
  categories,
  comments
})

export const getPostsByCategory = (posts, category) => {
  if (category) {
    return posts.filter(post => post.category === category)
  } else {
    return posts
  }
}
export const filterComments = (posts, comments) => {
  return comments.filter(comment => !comment.deleted)
}

export default rootReducer

export function getCommentsByParentid(comments, id) {
  return comments.filter(comment => comment.parentId === id)
}
