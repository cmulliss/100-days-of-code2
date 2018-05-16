const initialState = {
    articles: []
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
        return  { ...state, articles: [...state.articles, action.payload] }
            default: 
            return state
        }
        
    }

export default rootReducer;


/*
In Redux reducers produce the state. The state is not something you create by hand.
A reducer is just a Javascript function. A reducer takes two parameters: the current state and an action 
The third principle of Redux says that the state is immutable and cannot change in place.
This is why the reducer must be pure. A pure function is one that returns the exact same output for the given input.
*/