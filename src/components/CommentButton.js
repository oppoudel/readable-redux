import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../actions/comments'
import FaComments from 'react-icons/lib/fa/comments'

class CommentButton extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.id)
  }
  render() {
    return (
      <div>
        <button className="button" title="No of Comments">
          <span className="icon is-small">
            <FaComments />
          </span>
          <span>
            {this.props.comments.filter(comment => comment.parentId === this.props.id).length}
          </span>
        </button>
      </div>
    )
  }
}

export default connect(state => ({ comments: state.comments.comments }), {
  fetchComments
})(CommentButton)
