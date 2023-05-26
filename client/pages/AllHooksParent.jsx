import React, {useState, createContext} from 'react';
import AllHooksChild from './AllHooksChild';

// userInCreateContext is different from 'user' to see where this variable name showed up in the AST
export const userContext = createContext({ user: 'null', setUser: undefined });
export const tripContext = createContext({ trip: 'null', setTrip: undefined });

const AllHooksParent = () => {
  const [user, setUser] = useState('null');
  const [trip, setTrip ] = useState('Hawaii');

  return (
    <div className='hooks-container' key='All Hooks Parent'>
      <userContext.Provider value={{ user, setUser }} key="userContext Provider">
        <tripContext.Provider value={{ trip, setTrip }} key="tripContext Provider">
          <AllHooksChild key={'AllHooksChild'} />
        </tripContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default AllHooksParent;
