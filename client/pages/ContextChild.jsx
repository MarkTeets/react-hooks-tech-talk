import React, { useState, useEffect, useContext } from 'react';
import { userContext } from './ContextParent';

const ContextChild = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const { user, setUser } = useContext(userContext);
  const { trip, setTrip } = props;

  useEffect(() => {
    setUser('Mark');
    setTrip('Yosemite');
  }, []);
  
  useEffect(() => {
    setAllUsers([...allUsers, user])
  }, [user]);

  const clickSetUser = () => {
    if (user === 'Mark') setUser('Jeff')
    else setUser('Mark');
  }

  return (
    <section className='hook-data-section'>
      <p>user: {user}</p>
      <p>trip: {trip}</p>
      <p>AllUsers: {`[${printArray(allUsers)}]`}</p>
      <button onClick={clickSetUser}>Switch user</button>
    </section>
    );
}


export default ContextChild;


function printArray(arr) {
  return arr.map(el => {
    if (el === null) {
      return 'null'
    } else {
      return ' ' + el;
    }
  });
}