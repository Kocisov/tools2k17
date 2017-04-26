import React, { PureComponent } from 'react';
import Router from 'next/router';

export default class Slide extends PureComponent {
  state = {
    afterMount: false
  };

  onKeyUp = e => {
    if (event.which === 37) {
      this.onPrev();
    }

    if (event.which === 39) {
      this.onNext();
    }
  };

  onPrev = e => {
    const { url: { pathname } } = this.props;
    const page = +pathname.replace(/^\//, '');
    if (page > 0) {
      Router.push(`/${page - 1 || ''}`);
    }
  };

  onNext = e => {
    const { url: { pathname } } = this.props;
    const page = +pathname.replace(/^\//, '');
    if (page < 13) {
      Router.push(`/${page + 1}`);
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
    this.setState({
      afterMount: true
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
    this.setState({
      afterMount: false
    });
  }

  render() {
    const { children } = this.props;
    const trn = this.state.afterMount ? 'animated fadeIn' : 'animated';

    return (
      <div className={trn}>
        {children}
        <style jsx>
          {
            `
          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }

          .fadeIn {
            animation-name: fadeIn;
          }

          .animated {
            animation-duration: 1s;
            animation-fill-mode: both;
          }
        `
          }
        </style>
      </div>
    );
  }
}
