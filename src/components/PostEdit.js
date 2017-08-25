import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPost, fetchAllPosts } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchCategories()
    this.props.fetchAllPosts()
  }
  handleSubmit(e, id) {
    e.preventDefault()
    const originalPost = this.props.posts.find(post => post.id === id)
    const post = {
      id: id,
      timestamp: Date.now(),
      voteScore: originalPost.voteScore,
      title: this.titleInput.value,
      body: this.bodyInput.value,
      author: this.authorInput.value,
      category: this.categoryInput.value
    }
    this.props.editPost(post)
    this.props.history.push('/')
  }
  render() {
    const { id, posts, categories } = this.props
    const post = posts.find(post => post.id === id)
    return (
      <form className="columns" onSubmit={this.handleSubmit}>
        <div className="column is-half is-offset-one-quarter">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Title</label>
            </div>
            <div className="field-body">
              <input
                className="input"
                type="text"
                defaultValue={post.title}
                ref={input => (this.titleInput = input)}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Body</label>
            </div>
            <div className="field-body">
              <textarea
                className="textarea"
                type="text"
                ref={input => (this.bodyInput = input)}
                defaultValue={post.body}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Author</label>
            </div>
            <div className="field-body">
              <input
                className="input"
                type="text"
                ref={input => (this.authorInput = input)}
                defaultValue={post.author}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Category</label>
            </div>
            <div className="field-body">
              <div className="select">
                <select ref={input => (this.categoryInput = input)} defaultValue={post.category}>
                  {categories.map(category =>
                    <option value={category.name} key={category.name}>
                      {category.name}
                    </option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button className="button is-primary" onClick={e => this.handleSubmit(e, id)}>
              Save Post
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(
  state => ({
    posts: state.posts.posts,
    categories: state.categories.categories
  }),
  {
    fetchCategories,
    editPost,
    fetchAllPosts
  }
)(PostForm)
