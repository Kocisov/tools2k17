import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//reacttraining.com/react-router/">
        <img className="image" src="/static/react-router.svg" alt="" />
      </a>
      {md`
# React-Router
> Declarative routing for React.
`}
    </Layout>
  </Slide>
)
