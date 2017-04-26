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
          <a href="//babeljs.io">
            <img className="image" src="/static/babel.svg" alt="" />
          </a>
          {md`
# Babel
> JavaScript compiler that lets you use next generation JavaScript, today.
`}
        </Box>
        <Box>
          {md`> Code in`}
          <Code>
            {include('../codes/babelIn.js')}
          </Code>
          {md`> Code out`}
          <Code>
            {include('../codes/babelOut.js')}
          </Code>
        </Box>
      </Row>
    </Layout>
  </Slide>
)
