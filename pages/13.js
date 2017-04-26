import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//www.apollodata.com/">
        <img className="image" src="/static/apollostack.svg" alt="" />
      </a>
      {md`
# Apollo
> The flexible, production ready GraphQL client for React and native apps.
`}
    </Layout>
  </Slide>
)
