import React from 'react'
import styled from 'styled-components'
import { Spring } from 'react-spring'

const Note = styled.div`
  display: flex;
  justify-content: center;
  height: 200px;
  width: fit-content;
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4286f4,
    #373b44
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4286f4,
    #373b44
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const NoteText = styled.p`
  padding: 30px;
  align-self: center;
  font-weight: ${props => (props.bold ? 'bold' : null)};
`

function Card(props) {
  const { hovering } = props
  return (
    <>
      <Spring
        to={{
          fontSize: hovering ? '100px' : '20px',
          // height: hovering ? '600px' : '200px',
          color: hovering ? 'hotpink' : 'palegoldenrod',
        }}
      >
        {styles => (
          <Note style={{ ...styles }}>
            <NoteText style={{ ...styles }} bold>
              {props.hovering ? 'Now get out!' : 'Hello from Card!'}
            </NoteText>
          </Note>
        )}
      </Spring>
    </>
  )
}
export default Card
