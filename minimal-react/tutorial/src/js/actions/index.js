import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
    type: 'ADD_ARTICLE', payload: article
})

/*
Redux reducers are without doubt the most important concept in Redux. Reducers produce the state of the application.

But how does a reducer know when to produce the next state?

The second principle of Redux says the only way to change the state is by sending a signal to the store.This signal is an action. “Dispatching an action” is the process of sending out a signal.

Now, how do you change an immutable state? You won’t. The resulting state is a copy of the current state plus the new data.

Every action needs a type property for describing how the state should change.

You can specify a payload as well. The payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to wrap every action within a function. Such function is an action creator.
*/