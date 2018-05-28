import React from 'react'

const Title = props => {
  console.log(props.title)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
export default Title
