import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//reactivex.io/rxjs/">
        <img className="image" src="/static/reactivex.svg" alt="" />
      </a>
      {md`
# RxJS
> RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
`}
    </Layout>
  </Slide>
)
