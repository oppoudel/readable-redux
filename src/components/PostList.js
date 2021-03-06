import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchAllPosts,
  removePost,
  upVote,
  downVote,
  sortPosts
} from '../actions/posts';
import { fetchCategories } from '../actions/categories';
import { getPostsByCategory } from '../reducers';
import { filterDeletedPosts } from '../reducers/posts';
import SortButton from './SortButton';
import Post from './Post';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.fetchCategories();
  }
  render() {
    return (
      <div>
        <SortButton sortPosts={this.props.sortPosts} />
        <div className="Post-List">
          <ul>
            {this.props.posts.map(post => (
              <div key={post.id} className="box">
                <Post
                  {...post}
                  upVote={this.props.upVote}
                  downVote={this.props.downVote}
                />
                <Link to={`/${post.category}/${post.id}`}>
                  <button className="button is-link">Details</button>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <Link to="/newPost">
          <button className="button is-primary">Add Post</button>
        </Link>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    posts: getPostsByCategory(
      filterDeletedPosts(state.posts.posts),
      ownProps.category
    ),
    categories: state.categories.categories
  }),
  {
    fetchAllPosts,
    fetchCategories,
    removePost,
    upVote,
    downVote,
    sortPosts
  }
)(PostList);
