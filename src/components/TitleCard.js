import React, { Component } from 'react'
import { Spring, Transition, animated } from 'react-spring'
import styled from 'styled-components'

import Hover from './hover'

export default class TitleCard extends Component {
  render() {
    return (
      <Transition
        native
        from={{ opacity: 0, y: '-50px' }}
        enter={{ opacity: 1, y: '0px' }}
        leave={{ opacity: 0, y: '50px' }}
      >
        {hovering &&
          (styles => (
            <Hover
              render={hovering => (
                <animated.p
                  hovering={hovering}
                  style={{
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}, 0)`
                    ),
                    ...styles,
                  }}
                >
                  I'm The TitleCard!
                </animated.p>
              )}
            />
          ))}
      </Transition>
    )
  }
}
