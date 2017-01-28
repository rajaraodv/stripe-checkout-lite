import React from 'react';

export default class StripeCheckoutLite extends React.Component {
  constructor(props) {
    super(props);
  }

  addHandler() {
    this.handler = StripeCheckout.configure(this.props.config);
  }

  componentDidMount() {
    if (!process.browser) return;

    if (document.getElementById('SCLJS')) {//reuse
      this.addHandler();
      return;
    }

    var that = this;
    var s = document.createElement("script");
    s.id = 'SCLJS'
    s.src = "https://checkout.stripe.com/checkout.js";
    s.onload = this.addHandler.bind(this);
    s.onerror = this.props.onerror;
    document.body.appendChild(s);
  }

  openStripe(e) {
    if(!this.handler) return;
    
    this.handler.open();
    window.addEventListener('popstate', function() {
      this.handler.close();
    });
  }

  render() {
    const p = this.props;
    return (
      <button
              style={ p.style }
              onClick={ this.openStripe.bind(this) }
              onTouchStart={ this.openStripe.bind(this) }>
        { p.label }
      </button>
      );
  }
}
