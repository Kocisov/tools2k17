import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//graphql.org/">
        <img className="image" src="/static/graphql.svg" alt="" />
      </a>
      {md`
# GraphQL
> A query language for APIs and a runtime for fulfilling those queries with your existing data.
`}
    </Layout>
  </Slide>
)
