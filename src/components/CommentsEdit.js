import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const comment = {
      author: this.authorInput.value,
      body: this.commentInput.value,
      parentId: this.props.parentId
    }
    this.props.saveComment(comment)
    this.commentForm.reset()
  }
  render() {
    return (
      <div className="container Comment-Form">
        <p>
          <strong>Add a new comment</strong>
        </p>
        <form onSubmit={this.handleSubmit} ref={input => (this.commentForm = input)}>
          <input
            type="text"
            className="input"
            placeholder="Author"
            ref={input => (this.authorInput = input)}
          />
          <input
            type="text"
            className="input"
            placeholder="Comment"
            ref={input => (this.commentInput = input)}
          />
          <button style={{ display: 'none' }} onClick={this.handleSubmit}>
            submit
          </button>
        </form>
      </div>
    )
  }
}

export default CommentForm
