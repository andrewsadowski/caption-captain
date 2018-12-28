import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Hover from '../components/hover'
import CC from '../components/cc'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const ccContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <ccContainer>
      <CC />
    </ccContainer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
