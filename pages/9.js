import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//redux-observable.js.org/">
        <img className="image" src="/static/redux-observable.svg" alt="" />
      </a>
      {md`
# Redux-Observable
> RxJS 5-based middleware for Redux. Compose and cancel async actions to create side effects and more.
`}
    </Layout>
  </Slide>
)
