import React from 'react'
import Highlight from 'react-syntax-highlight'

export default ({ children, lang }) => (
  <div className="code">
    <Highlight
      lang={lang || 'javascript'}
      value={children}
    />
    <style jsx>{`
      .code {
        width: 550px;
        padding: 10px;
      }
    `}</style>
  </div>
)
