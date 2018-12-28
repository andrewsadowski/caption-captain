import React, { Component, Fragment } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
`
const TitleText = styled.h1`
  font-family: 'Roboto'
  justify-content: center;
  font-size: 600;
`

export default class CC extends Component {
  render() {
    return (
      <TitleContainer>
        <TitleText>CC</TitleText>
      </TitleContainer>
    )
  }
}
