import React, { Component, Fragment } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const TitleText = styled.h1`
  font-family: 'Roboto'
  font-size: 600;
`

export default class CC extends Component {
  render() {
    return (
      <>
        <TitleText>CC</TitleText>
      </>
    )
  }
}
