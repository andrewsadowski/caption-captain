import React, { Component } from 'react'
import { Spring, Transition, animated } from 'react-spring'
import styled from 'styled-components'

import Hover from './hover'

const TitleText = styled(animated.div)`
  font-family: 'Roboto';
  background-color: green;
`

export default class TitleCard extends Component {
  render() {
    const { hovering } = this.props
    return (
      <Spring
        native
        from={{ opacity: 0, y: '-50px' }}
        to={{ opacity: 1, y: '0px' }}
      >
        {styles => (
          <Hover
            render={hovering => (
              <TitleText
                hovering={hovering}
                style={{
                  transform: styles.y.interpolate(
                    y => `translate3d(0, ${y}, 0)`
                  ),
                  ...styles,
                }}
              >
                I'm The TitleCard!
              </TitleText>
            )}
          />
        )}
      </Spring>
    )
  }
}

/**
 *       <Transition
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
 */
