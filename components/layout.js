import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

const Content = ({ children }) => (
  <div className="container">
    {children}
    <style jsx>
      {
        `
      .container {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        padding: 10px;
      }
    `
      }
    </style>
  </div>
);

export default ({ children }) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Web tooling in 2017</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/default.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/github-gist.min.css"
      />
      <link rel="stylesheet" href="static/normalize.css" />
      <link rel="stylesheet" href="static/main.css" />
    </Head>
    <Content>
      {children}
    </Content>
  </div>
);
