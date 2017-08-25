import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterDeletedPosts } from '../reducers/posts'
import { fetchAllPosts, removePost, upVote, downVote } from '../actions/posts.js'
import {
  fetchComments,
  saveComment,
  editComment,
  upCommentVote,
  downCommentVote
} from '../actions/comments.js'
import Post from './Post'
import Comments from './Comments'
import CommentForm from './CommentForm'

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
    const {
      id,
      posts,
      comments,
      saveComment,
      editComment,
      upCommentVote,
      downCommentVote
    } = this.props
    const post = posts.find(post => post.id === id)
    return post
      ? <div>
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
          <CommentForm parentId={id} saveComment={saveComment} />
          <Comments
            comments={comments}
            editComment={editComment}
            parentId={id}
            upVote={upCommentVote}
            downVote={downCommentVote}
          />
        </div>
      : <div>Sorry the Post You Are Looking For Does Not Exists - 404</div>
  }
}

export default connect(
  state => ({
    posts: filterDeletedPosts(state.posts.posts),
    comments: state.comments.comments
  }),
  {
    fetchComments,
    fetchAllPosts,
    removePost,
    upVote,
    downVote,
    saveComment,
    editComment,
    upCommentVote,
    downCommentVote
  }
)(PostDetail)
