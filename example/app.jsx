import React from 'react';
import Checkout from '../StripeCheckoutLite.min.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.config = {
      key: 'pk_test_5qV78InO5XtnYvFRZ2VKnIjy',
      locale: 'auto',
      description: 'Gold Plan',
      amount: 999,
      allowRememberMe: false,
      name: 'Subscribe - $9.99/month',
      token: this.handleToken
    }
  }

  handleToken(token) {
    fetch('/post-to-server', {
      method: 'POST',
      body: JSON.stringify(token),
    })
      .then(response => response.json())
      .then(data => {
        alert(`Got money!, ${data.email}`);
      })
  }


  render() {
    return (
      <div>
        <h1>Example</h1>
        <Checkout
          config={ this.config }
          style={ { color: 'orange' } }
          label="Subscribe" />
      </div>
    )
  }
}

export default App;

