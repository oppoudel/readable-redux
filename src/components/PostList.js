import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllPosts, fetchCategories, removePost } from '../actions'
import { getPostsByCategory } from '../reducers'
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
                <Post {...post} removePost={this.props.removePost} />{' '}
                <Link to={`/posts/${post.id}`}>
                  <button className="button is-link">Details</button>
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    posts: getPostsByCategory(state.posts.posts, ownProps.category),
    categories: state.categories.categories
  }),
  {
    fetchAllPosts,
    fetchCategories,
    removePost
  }
)(PostList)