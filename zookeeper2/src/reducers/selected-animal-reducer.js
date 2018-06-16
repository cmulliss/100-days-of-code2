export default function (state = null, action) {
  // console.log('payload reducer_action: ', action)
  // console.log('payload reducer_state: ', state)
  switch (action.type) {
    case 'ANIMAL_CLICKED':
      // console.log(action)
      return action.payload
  }
  return state
}
