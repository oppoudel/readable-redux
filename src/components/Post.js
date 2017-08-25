import React from 'react'
import FaThumbsup from 'react-icons/lib/fa/thumbs-up'
import FaThumbsdown from 'react-icons/lib/fa/thumbs-down'
import CommentButton from './CommentButton'

const Post = ({ id, title, body, upVote, author, voteScore, downVote }) => {
  return (
    <li className="post">
      <p>
        <strong>
          {title}
        </strong>
      </p>
      <p>
        {body} - {author}
      </p>
      <div>
        <button className="button" onClick={() => upVote(id)} title="Up Vote">
          <FaThumbsup />
        </button>
        <button className="button">
          {voteScore}
        </button>
        <button className="button" onClick={() => downVote(id)} title="Down Vote">
          <FaThumbsdown />
        </button>
        <CommentButton id={id} />
      </div>
    </li>
  )
}

export default Post
