import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchCategories, removePost, upVote, downVote } from '../actions'
import { getPostsByCategory } from '../reducers'
import { filterDeletedPosts } from '../reducers/posts'
import Post from './Post'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchCategories()
  }
  render() {
    return (
      <div>
        <div className="Post-List">
          <ul>
            {this.props.posts.map(post =>
              <div key={post.id} className="box">
                <Post {...post} upVote={this.props.upVote} downVote={this.props.downVote} />
                <Link to={`/posts/${post.id}`}>
                  <button className="button is-link">Details</button>
                </Link>
              </div>
            )}
          </ul>
        </div>
        <Link to="/newPost">
          <button className="button is-primary">Add Post</button>
        </Link>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    posts: getPostsByCategory(filterDeletedPosts(state.posts.posts), ownProps.category),
    categories: state.categories.categories
  }),
  {
    fetchAllPosts,
    fetchCategories,
    removePost,
    upVote,
    downVote
  }
)(PostList)
