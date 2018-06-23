// src/components/List.js
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
// List is the result of connecting the stateless component ConnectedList with the Redux store

export default List

/* The List component receives the prop 'articles' which is a copy of the __articles__ array. Such array lives inside the Redux state we created earlier. It comes from the reducer

Then it’s a matter of using the prop inside JSX for generating a list of articles:

{articles.map(el => (
  <li className="list-group-item" key={el.id}>
    {el.title}
  </li>
))}

Finally the component gets exported as List. List is the result of connecting the stateless component ConnectedList with the Redux store.

A stateless component does not have its own local state. Data gets passed to it as props
*/
