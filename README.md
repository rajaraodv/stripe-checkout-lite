#react-google-analytics-lite
#### A Minimal(2kb) React Google Analytics library. It has no dependencies.

##Motivation
There are libs that add 10KB to 15KB of unnecessary code just so you can write it in markup-attribute style. Last thing we want to do is make the app heavy. That's why react-google-analytics-lite was created. 

It simply loads <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/" target="_blank">analytics.js</a>  and then calls a callback *onload*.

**Note:** 

1. It loads analytics code **only once** irrespective of how many times the component is called, or called from multiple components. So you don't have to worry of the order or where it is added.
2. "ga" is a global variable that Google Analytics adds. All you need to do is to simply call "ga" function as per their docs.
3. Make sure to add this component and initialize analytics `i.e. call ga('create', 'UA-XXXXX-Y', 'auto');`in the top-most/parent component.


##Installation

```
npm install react-google-analytics-lite --save
```

##Usage:

```
import GA from 'react-google-analytics-lite'

// In the below code, 
// @onload is the callback (required)

<GA onload={ this.onGALoad } />
  
```
### "onload" callback
This callback is called when "ga" function is ready. So you can call "ga" like below:

```
this.onGALoad() {
   ga('create', 'UA-XXXXX-Y', 'auto');
   ga('send', 'pageview', '/about.html');
}
```
## Complete Example

```
import React from 'react'
import GA from 'react-google-analytics-lite'
import About from './about.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onGALoad() {
    ga('create', 'UA-XXXXX-Y', 'auto');//initialize
    ga('send', 'pageview', '/app.html');
  }


  render() {
    return (
      <div>
        <About />
        <h1>Example</h1>
        <GA
            onload={ this.onGALoad } />
      </div>
    )
  }
}

export default App;
```

##Building
```
git clone https://github.com/rajaraodv/stripe-checkout-lite.git
cd stripe-checkout-lite
npm install 
npm run build  //build new StripeReactCheckout.min.js


```

##Running Example
`npm install webpack-dev-server -g`

```
//In the stripe-checkout-lite folder run:
webpack //Bundle latest StripeReactCheckout.min.js
webpack-dev-server
```


#License
MIT
