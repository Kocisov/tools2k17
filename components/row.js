import React from 'react'

export default ({ children }) => (
  <div className="row">
    {children}
    <style jsx>{`
      .row {
        align-items: center;
        display: flex;
      }
    `}</style>
  </div>
)
