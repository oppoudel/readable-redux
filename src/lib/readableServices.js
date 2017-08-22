import { v4 } from 'node-uuid'
const api = 'http://localhost:5001'

let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers }).then(res => res.json()).then(data => data.categories)

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers }).then(res => res.json()).then(data => data.posts)

export const getAllPosts = () => fetch(`${api}/posts`, { headers }).then(res => res.json())

export const getCommentsById = id =>
  fetch(`${api}/posts/${id}/comments`, { headers }).then(res => res.json())

export const destroyPost = id =>
  fetch(`${api}/posts/${id}`, { method: 'DELETE', headers }).catch(err => console.log(err))
export const createPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: v4(),
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    })
  }).then(res => res.json())
export const updatePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: post.id,
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: post.voteScore,
      deleted: false
    })
  }).then(res => res.json())
export const addPostLike = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: 'upVote'
    })
  }).then(res => res.json())
export const substractPostLike = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option: 'downVote'
    })
  }).catch(err => console.log(err))
