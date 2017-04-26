import React from 'react'

export default ({ children }) => (
  <div className="box">
    {children}
    <style jsx>{`
      .box {
        align-items: center;
        display: flex;
        flex-direction: column;
      }

      .box:first-of-type {
        width: 450px;
      }
    `}</style>
  </div>
)
