import React from 'react'
import FaSortasc from 'react-icons/lib/fa/sort-asc'

const SortButton = props => {
  return (
    <div>
      <button className="button is-outlined" onClick={props.sortPosts}>
        <span className="icon is-small">
          <FaSortasc />
        </span>
        <span>Sort By # of Votes</span>
      </button>
    </div>
  )
}

export default SortButton
