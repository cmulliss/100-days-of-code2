// actions/index.js
// list of ALL the actions
import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  payload: article
})
