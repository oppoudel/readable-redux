import React from 'react'

const Post = ({ id, title, body, deleted, category, removePost }) => {
  return (
    <li className="post">
      <p>
        <strong>
          {title} - {id}
        </strong>
      </p>
      <p>
        {body} - {category}
      </p>
    </li>
  )
}

export default Post
