import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  border: 1px solid black;
  border-radius: 30px;
`

const InfoHeader = styled.h1``

export default class InfoBanner extends Component {
  render() {
    return (
      <InfoContainer>
        <h1>Coming Soon...</h1>
        <p>Check out these tools in the meantime</p>
      </InfoContainer>
    )
  }
}
