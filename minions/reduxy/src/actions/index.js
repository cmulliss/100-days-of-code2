// src/actions/index.js

import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
  type: ADD_ARTICLE,
  payload: article
})

/*
Every action needs a type property for describing how the state should change.

You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to wrap every action within a function. Such function is an action creator.

Also, update the action to use action types, see src/constants/action-types.js

Action is addArticle
*/
