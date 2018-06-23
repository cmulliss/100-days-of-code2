// src/js/actions/index.js
export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  payload: article
})

/*
Every action needs a type property for describing how the state should change.

You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to wrap every action within a function. Such function is an action creator.
*/
