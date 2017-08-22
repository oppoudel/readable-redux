import React from 'react'
import FaThumbsup from 'react-icons/lib/fa/thumbs-up'
import FaThumbsdown from 'react-icons/lib/fa/thumbs-down'

const Comments = props => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {props.comments.map(comment =>
            <tr key={comment.id}>
              <td>
                <strong>
                  {comment.author}
                </strong>
              </td>
              <td>
                {comment.body}
              </td>
              <td>
                <button className="button">
                  <FaThumbsup />
                </button>
              </td>
              <td>
                <button className="button">
                  {comment.voteScore}
                </button>
              </td>
              <td>
                <button className="button">
                  <FaThumbsdown />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Comments
