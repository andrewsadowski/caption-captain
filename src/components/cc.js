import React, { Component, Fragment } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 60px;
  width: 120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const TitleText = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  align-self: center;
  margin: 0;
  font-size: 900;
`

export default class CC extends Component {
  render() {
    const { hovering } = this.props
    return (
      <Spring
        to={{
          width: hovering ? '240px' : '120px',
          height: hovering ? '240px' : '120px',
          borderRadius: hovering ? '20px' : '60px',
        }}
      >
        {styles => (
          <TitleContainer style={{ ...styles }}>
            <TitleText>CC</TitleText>
          </TitleContainer>
        )}
      </Spring>
    )
  }
}
