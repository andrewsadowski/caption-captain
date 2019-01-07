import React, { Component, Fragment } from 'react'
import { Spring } from 'react-spring'
import styled from 'styled-components'

import TitleCard from './TitleCard'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 120px;
  width: 240px;
  height: 240px;
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
          width: hovering ? '480px' : '240px',
          height: hovering ? '480px' : '240px',
          borderRadius: hovering ? '240px' : '120px',
        }}
      >
        {styles => (
          <TitleContainer style={{ ...styles }}>
            <TitleText>
              {hovering ? <TitleCard hovering={hovering} /> : 'CC'}
            </TitleText>
            <TitleCard />
          </TitleContainer>
        )}
      </Spring>
    )
  }
}
