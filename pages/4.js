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
          <a href="//facebook.github.io/react">
            <img className="image" src="/static/react.svg" alt="" />
          </a>
        {md`
# React
> A declarative, efficient, and flexible JavaScript library for building user interfaces.
`}
        </Box>
        <Box>
          <Code>
            {include('../codes/react.js')}
          </Code>
        </Box>
      </Row>
    </Layout>
  </Slide>
)
