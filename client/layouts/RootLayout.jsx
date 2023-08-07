import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return ( 
    <div className="root-layout">
      <header>
        <nav id='main-nav' className="nav">
          <NavLink to='/' className='nav-link'>Home</NavLink>
          <NavLink to='/State' className='nav-link'>useState & useEffect</NavLink>
          <NavLink to='/InfiniteEffect' className='nav-link'>useEffect Anti-Patterns</NavLink>
          <NavLink to='/ContextParent' className='nav-link'>useContext and Rendering</NavLink>
          <NavLink to='/Ref' className='nav-link'>useRef</NavLink>
          <NavLink to='/AllHooks' className='nav-link'> All Hooks </NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>

   );
}

export default RootLayout;