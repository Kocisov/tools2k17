import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//flow.org/">
        <img className="image" src="/static/flow.svg" alt="" />
      </a>
      {md`
# Flow
> Adds static typing to JavaScript to improve developer productivity and code quality.
`}
    </Layout>
  </Slide>
)
