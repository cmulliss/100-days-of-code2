import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnimalDetails extends Component {
  render () {
   // console.log('details', this)
    //console.log('this.props', this.props)

    if (!this.props.selectedAnimal) {
      return <div>...</div>
    }
    return (
      <div className='card'>
        <h6>Details</h6>
        <div>Species: {this.props.selectedAnimal.species}</div>
        <div>Age: {this.props.selectedAnimal.age}</div>
        <div>
          Gender: {this.props.selectedAnimal.gender === 'm' ? 'male' : 'female'}
        </div>
      </div>
    )
  }
}
// pass down the state object, props is LHS, from store on RHS
function mapStateToProps (state) {
  return {
    selectedAnimal: state.selectedAnimal
  }
}
export default connect(mapStateToProps)(AnimalDetails)
