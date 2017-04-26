import React, { PureComponent } from 'react';
import pictures from './pictures.json'; // fake data

export default class App extends PureComponent {
  render () {
    return (
      <div>
        {pictures.map(picture =>
          <div className="picture-box">
            <img
              className="picture-box-image"
              src={picture.url}
              alt={picture.alt}
            />
            <h2>{picture.title}</h2>
            <p>{picture.description}</p>
          </div>
        )}
      </div>
    )
  }
}
