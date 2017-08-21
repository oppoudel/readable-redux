import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterDeletedPosts } from '../reducers/posts'
import { fetchAllPosts, fetchComments, removePost } from '../actions'
import Post from './Post'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id)
    if (this.props.posts.length === 0) this.props.fetchAllPosts()
  }
  handleClick(id) {
    this.props.removePost(id)
    this.props.history.push('/')
  }
  render() {
    const { id, posts, comments } = this.props
    const post = posts.find(post => post.id === id)
    return (
      <div>
        <div className="Post-List">
          <ul>
            <div className="box">
              <Post {...post} removePost={this.props.removePost} />
            </div>
          </ul>
        </div>
        <button className="button is-danger" onClick={() => this.handleClick(id)}>
          Delete
        </button>
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
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    posts: filterDeletedPosts(state.posts.posts),
    comments: state.comments.comments
  }),
  {
    fetchComments,
    fetchAllPosts,
    removePost
  }
)(PostDetail)
