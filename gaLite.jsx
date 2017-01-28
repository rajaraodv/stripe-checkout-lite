import React from 'react';

export default class GoogleAnalyticsLite extends React.Component {

  componentDidMount() {
    debugger;
    //return if not in browser
    if (!process.browser) return;

    //dont reload analytics.js if ga already exists
    if (window.ga) {
      this.props && this.props.onload();
      return;
    }

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    this.props && this.props.onload();
  }
  render() {
    return null
  }
}