import React from 'react'
import Layout from '../components/layout'
import Slide from '../components/slide'
import md from 'markdown-in-js'

export default ({ url }) => (
  <Slide url={url}>
    <Layout>
      <a href="//eslint.org/">
        <img className="image" src="/static/eslint.svg" alt="" />
      </a>
      {md`
# ESLint
> The pluggable linting utility for JavaScript and JSX
`}
    </Layout>
  </Slide>
)
