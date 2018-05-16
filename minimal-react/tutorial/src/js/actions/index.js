import { ADD_ARTICLE } from '../constants/action-types'

export const addArticle = article => ({
    type: 'ADD_ARTICLE', payload: article
})


/* The second principle of Redux says the only way to change the state is by sending a signal to the store.This signal is an action. “Dispatching an action” is the process of sending out a signal.
Every action needs a type property for describing how the state should change.

You can specify a payload as well. In the above example the payload is a new article. A reducer will add the article to the current state later.

It is a best pratice to wrap every action within a function. Such function is an action creator.

So, the type property is nothing more than a string.
The reducer will use that string to determine how to calculate the next state.

Since strings are prone to typos and duplicates it’s better to have action types declared as constants.

*/