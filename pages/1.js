import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import Row from '../components/row'
import Box from '../components/box'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <Row>
        <Box>
          <a href="//javascript.com">
            <img className="image" src="/static/javascript.svg" alt="" />
          </a>
          {md`
# JavaScript
> Popular language used to make web pages interactive.
`}
        </Box>
        <Box>
          <a href="//nodejs.org">
            <img className="image" src="/static/nodejs.svg" alt="" />
          </a>
          {md`
# NodeJS
> A JavaScript runtime built on Chrome's V8 JavaScript engine.
`}
        </Box>
      </Row>
    </Layout>
  </Slide>
)
