import React from 'react'
import FaThumbsup from 'react-icons/lib/fa/thumbs-up'
import FaThumbsdown from 'react-icons/lib/fa/thumbs-down'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e, comment) {
    e.preventDefault()
    const updatedComment = { ...comment, body: this[comment.id].value }
    this.props.editComment(updatedComment)
    this[comment.id].blur()
  }
  render() {
    const { comments, parentId } = this.props
    return (
      <div className="container">
        <div>
          <div className="Comments-Title">
            <strong>Comments</strong>
          </div>
          <div>
            {comments.filter(comment => comment.parentId === parentId).map(comment =>
              <div key={comment.id} className="columns Comments-Row">
                <div className="column is-1">
                  <strong>
                    {comment.author}
                  </strong>
                </div>
                <form className="column" onSubmit={e => this.handleSubmit(e, comment)}>
                  <input
                    type="text"
                    defaultValue={comment.body}
                    className="input"
                    ref={input => (this[comment.id] = input)}
                  />
                  <button style={{ display: 'none' }}>submit</button>
                </form>
                <button className="button column is-narrow">
                  <FaThumbsup />
                </button>
                <button className="button column is-narrow">
                  {comment.voteScore}
                </button>
                <button className="button column is-narrow">
                  <FaThumbsdown />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
