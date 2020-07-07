import React from 'react';
import Appbar from '../Appbar/Appbar';

const Layout = ({ children }) => (
  <div>
    <Appbar />
    <hr />
    {children}
  </div>
);

export default Layout;
