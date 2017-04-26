import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//cssnext.io/">
        <img className="image" src="/static/cssnext.svg" alt="" />
      </a>
      {md`
# CSSNext
> Use tomorrow’s CSS syntax, today..
`}
    </Layout>
  </Slide>
)
