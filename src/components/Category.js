import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Category = props =>
  <ul className="Category-List">
    <NavLink exact to="/">All</NavLink>
    {props.categories.map((category, i) =>
      <NavLink to={`/${category.name}`} key={i}>
        {category.name}
      </NavLink>
    )}
  </ul>

export default connect(state => ({
  categories: state.categories.categories
}))(Category)
