import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>I'm the VERY VERY BEST home component</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </div>
  )
}

export default HomePage
// need to ship down the js as well as the html
// step 1, ship down html
// step 2, load up event handlers etc
