import React, { Component } from 'react';
import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Loader extends Component {
  render() {
    return (
      <LoaderSpinner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        // timeout={3000}
      />
    );
  }
}

export default Loader;
