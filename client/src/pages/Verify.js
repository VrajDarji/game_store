import React, { Component } from "react";

class Verify extends Component {
  componentDidMount() {
    window.history.pushState(null, null, document.URL);
    window.addEventListener("popstate", this.preventBackNavigation);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.preventBackNavigation);
  }

  preventBackNavigation = (event) => {
    window.history.pushState(null, null, document.URL);
  };

  render() {
    return (
      <div>
        <p>Verify yourself</p>
      </div>
    );
  }
}

export default Verify;
