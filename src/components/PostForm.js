import React, { Component } from 'react'
import { connect } from 'react-redux'
import { savePost } from '../actions/posts'
import { fetchCategories } from '../actions/categories'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.fetchCategories()
  }
  handleSubmit(e) {
    e.preventDefault()
    const post = {
      title: this.titleInput.value,
      body: this.bodyInput.value,
      author: this.authorInput.value,
      category: this.categoryInput.value
    }
    this.props.savePost(post)
    this.props.history.push('/')
  }
  render() {
    return (
      <form className="columns" onSubmit={this.handleSubmit}>
        <div className="column is-half is-offset-one-quarter">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Title</label>
            </div>
            <div className="field-body">
              <input className="input" type="text" ref={input => (this.titleInput = input)} />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Body</label>
            </div>
            <div className="field-body">
              <textarea className="textarea" type="text" ref={input => (this.bodyInput = input)} />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Author</label>
            </div>
            <div className="field-body">
              <input className="input" type="text" ref={input => (this.authorInput = input)} />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Category</label>
            </div>
            <div className="field-body">
              <div className="select">
                <select ref={input => (this.categoryInput = input)}>
                  {this.props.categories.map(category =>
                    <option value={category.name} key={category.name}>
                      {category.name}
                    </option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button className="button is-primary" onClick={this.handleSubmit}>
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
    categories: state.categories.categories
  }),
  {
    fetchCategories,
    savePost
  }
)(PostForm)
