import React from 'react';
import GA from '../gaLite.min.js'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  onGALoad() {
   ga('create', 'UA-XXXXX-Y', 'auto');
   ga('send', 'pageview', '/about.html');
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <GA onload={this.onGALoad}/>
      </div>
    )
  }
}

export default About;

