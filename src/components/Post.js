import React from 'react'

const Post = ({ id, title, body, deleted, category, removePost }) => {
  const handleClick = id => {
    removePost(id)
  }
  return (
    <li>
      <p>
        <strong>
          {title} - {id}
        </strong>
      </p>
      <p>
        {body} - {category}
      </p>
      <br />
      <button className="button is-danger" onClick={() => handleClick(id)}>
        Delete
      </button>
    </li>
  )
}

export default Post
