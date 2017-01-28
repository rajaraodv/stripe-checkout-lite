import React from 'react';
import GA from '../gaLite.min.js'
import About from './about.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onGALoad() {
    ga('create', 'UA-XXXXX-Y', 'auto');
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

