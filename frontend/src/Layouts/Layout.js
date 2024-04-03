import React from 'react';
import Navgbar from './NavgBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Navgbar />
      <div style={{ marginTop: '60px' }}>
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
