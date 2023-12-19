import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const MainHeader = () => {
  return(
    <div>
      <Outlet/>
    </div>
  );
}

export default MainHeader;