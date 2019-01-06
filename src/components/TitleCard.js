import React, { Component } from 'react'
import { Spring } from 'styled-components'
import styled from 'styled-components'

export default class TitleCard extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0, bgOpacity: 0, y: '-50px' }}
          to={{ opacity: 1, bgOpacity: 0.5, y: '0px' }}
        >
          {
            <p
              style={{
                transform: styles.y.interpolate(y => `translate3d(0, ${y}, 0)`),
                ...styles,
              }}
            >
              I'm The TitleCard!
            </p>
          }
        </Spring>
      </div>
    )
  }
}
