import { CATEGORIES_LOAD } from './constants'
import { getAllCategories } from '../lib/readableServices'

const loadCategories = categories => ({ type: CATEGORIES_LOAD, payload: categories })

export const fetchCategories = () => {
  return dispatch => {
    getAllCategories().then(categories => dispatch(loadCategories(categories)))
  }
}
