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
          <a href="//webpack.js.org/">
            <img className="image" src="/static/webpack.svg" alt="" />
          </a>
          {md`
# Webpack
> A bundler for javascript and friends. Packs many modules into a few bundled assets.
`}
        </Box>
        <Box>
          <Code>{include('../codes/webpack.config.js')}</Code>
        </Box>
      </Row>
    </Layout>
  </Slide>
)
