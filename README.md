#stripe-checkout-lite
### A Minimal(~1kb Gzipped) React Stripe Checkout library. Easily import Stripe Checkout in your React Apps

##Motivation
There are libs that add 10KB to 15KB of unnecessary code just so you can write it in markup attribute style (<Checkout price="999" />. So, stripe-checkout-lite was created. It takes attributes as a JS object, loads Stripe's checkout.js file and creates a button.

```
npm install stripe-checkout-lite --save
```

##Usage:

```
import Checkout from 'stripe-checkout-lite'

// In the below code, 
// @config is Stripe checkout's config
// @style is style for the button
// @label label for the button

<Checkout 
	config={ this.config } 
	style={ { color: 'blue' } }  
	label="Subscribe" 
/>
  
```
### 1. Checkout Options
This is simply a Javascript literal that contains options mentioned in
<a href="https://stripe.com/docs/checkout#integration-custom" target="_blank">Stripe's docs.</a>

```
    this.config = {
      key: 'pk_test_5qV78InO5XtnYvFRZ2VKnIjy', //Test/Live Token (Required)
      locale: 'auto',
      description: 'Gold Plan',
      amount: 999,
      allowRememberMe: false,
      name: 'Subscribe - $9.99/month',
      token: this.handleToken   //This is a callback function (Required)
    }
```

### 2. Style Options
This is style JS object that needs to be applied to the button.

### 3. label
This is the button's label

## Complete Example

```
import Checkout from 'stripe-checkout-lite'

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
          style={ { color: 'blue' } }
          label="Subscribe" 
        />
      </div>
    )
  }
}
```

#Running And Debugging Example
```
git clone && cd
npm install 
npm run build //build new StripeReactCheckout.min.js
webpack
webpack-dev-server
(npm install webpack-dev-server -g)
```


#License
MIT
