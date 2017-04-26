import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import Code from '../components/code'
import Row from '../components/row'
import Box from '../components/box'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <Row>
        <Box>
          <a href="//redux.js.org/">
            <img className="image" src="/static/redux.svg" alt="" />
          </a>
          {md`
# Redux
> A predictable state container for JavaScript apps.
`}
        </Box>
        <Box>
          <Code>
            {include('../codes/redux.js')}
          </Code>
        </Box>
      </Row>
    </Layout>
  </Slide>
)
