// src/js/components/List.js
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { articles: state.articles }
}
const ConnectedList = ({ articles }) => (
  <ul className='list-group list-group-flush'>
    {articles.map(el => (
      <li className='list-group-item' key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
)
const List = connect(mapStateToProps)(ConnectedList)
export default List
/*
List, will interact with the Redux store

The List component receives the prop 'articles' which is a copy of the articlesarray. Such array lives inside the Redux state we created earlier. It comes from the reducer:
```javascript
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
```
Then it’s a matter of using the prop inside JSX for generating a list of articles:

```javascript
{articles.map(el => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
))}
```

Finally the component gets exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.
*/
