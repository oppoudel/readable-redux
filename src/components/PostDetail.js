import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterDeletedPosts } from '../reducers/posts'
import { fetchAllPosts, fetchComments, removePost, upVote, downVote } from '../actions'
import Post from './Post'
import Comments from './Comments'

class PostDetail extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id)
    if (this.props.posts.length === 0) this.props.fetchAllPosts()
  }
  handleDelete(id) {
    this.props.removePost(id)
    this.props.history.push('/')
  }
  handleEdit(id) {
    this.props.history.push(`/post/${id}`)
  }
  render() {
    const { id, posts, comments } = this.props
    const post = posts.find(post => post.id === id)
    return (
      <div>
        <div className="Post-List">
          <ul>
            <div className="box">
              <Post
                {...post}
                removePost={this.props.removePost}
                comments={comments}
                upVote={this.props.upVote}
                downVote={this.props.downVote}
              />
              <button
                className="button is-danger is-outlined"
                onClick={() => this.handleDelete(id)}
              >
                Delete Post
              </button>
              <button className="button is-info is-outlined" onClick={() => this.handleEdit(id)}>
                Edit Post
              </button>
            </div>
          </ul>
        </div>
        <p>
          <button className="button is-primary">Add Comment</button>
        </p>
        <Comments comments={comments} />
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
    removePost,
    upVote,
    downVote
  }
)(PostDetail)
