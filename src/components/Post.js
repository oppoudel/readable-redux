import React from 'react'
import FaThumbsup from 'react-icons/lib/fa/thumbs-up'
import FaThumbsdown from 'react-icons/lib/fa/thumbs-down'

const Post = ({
  id,
  title,
  body,
  deleted,
  category,
  upVote,
  author,
  comments,
  voteScore,
  downVote
}) => {
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
        <button className="button" onClick={() => upVote(id)}>
          <FaThumbsup />
        </button>
        <button className="button">
          {voteScore}
        </button>
        <button className="button" onClick={() => downVote(id)}>
          <FaThumbsdown />
        </button>
      </div>
    </li>
  )
}

export default Post
