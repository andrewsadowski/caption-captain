import React from 'react'
import { Link } from 'gatsby'

import Hover from '../components/hover'
import CC from '../components/cc'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <CC />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
