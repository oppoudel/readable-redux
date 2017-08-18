import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchComments, removePost } from '../actions'
import Post from './Post'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id)
    if (this.props.posts.length === 0) this.props.fetchAllPosts()
  }
  render() {
    const { id, posts, comments } = this.props
    const post = posts.find(post => post.id === id)
    return (
      <ul className="box">
        <Post {...post} removePost={this.props.removePost} />
        <hr />
        <pre>
          <p>
            <strong>Comments</strong>
          </p>
          {comments.map(comment =>
            <p key={comment.id}>
              {comment.body} - {comment.author}
            </p>
          )}
          <hr />
          <p>Add a Comment</p>
        </pre>
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    posts: state.posts.posts,
    comments: state.comments.comments
  }),
  {
    fetchComments,
    fetchAllPosts,
    removePost
  }
)(PostDetail)
