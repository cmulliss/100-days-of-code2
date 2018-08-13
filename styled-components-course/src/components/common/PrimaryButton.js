import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

const PrimaryButton = styled(Button).attrs({
  color: 'primary'
})`
  &:hover {
    color: black !important;
  }
`
export default PrimaryButton
// can use the styled helper as fn, and pass in a component, can then style this, with backticks and css
