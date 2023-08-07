import React, { useState, createContext } from 'react';
import ContextChild from './ContextChild'

export const userContext = createContext({ user: null, setUser: undefined });

const ContextParent = () => {
  const [user, setUser] = useState(null);
  const [trip, setTrip ] = useState(null);

  const childProps = { trip, setTrip}

  return (
    <div className='hooks-container' key='Context Parent'>
      <h2> useContext </h2>
      <userContext.Provider value={{ user, setUser }} key="userContext Provider">
        <ContextChild {...childProps} key={'ContextChild'}/>
      </userContext.Provider>
    </div>
  );
}

export default ContextParent;