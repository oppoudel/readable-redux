import React, { Component } from 'react'

class PostForm extends Component {
  render() {
    return (
      <form className="columns">
        <div className="column is-half is-offset-one-quarter">
          <div className="field">
            <label className="label">Title</label>
            <input className="input" type="text" />
          </div>
          <div className="field">
            <label className="label">Body</label>
            <textarea className="textarea" type="text" />
          </div>
        </div>
      </form>
    )
  }
}

export default PostForm
