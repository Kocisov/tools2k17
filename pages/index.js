import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      {md`
# Web technologies and tools
### You should learn and have in 2017
`}
    </Layout>
  </Slide>
)
