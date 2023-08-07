import React, { useState, useEffect, useContext, useRef } from "react";
import { userContext } from "./ContextParent";

const ContextChild = (props) => {
  const { user, setUser } = useContext(userContext);
  const { trip, setTrip } = props;
  const [snack, setSnack] = useState("Trail Mix");

  const [allUsers, setAllUsers] = useState([]);
  const [allTrips, setAllTrips] = useState([]);
  const [allSnacks, setAllSnacks] = useState([]);

  // For tracking renders:
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("ContextChild render number:", renderCount.current);
  });

  useEffect(() => {
    setUser("Mark");
    setTrip("Yosemite");
  }, []);

  useEffect(() => {
    setAllUsers([...allUsers, user]);
  }, [user]);

  useEffect(() => {
    setAllTrips([...allTrips, trip]);
  }, [trip]);

  useEffect(() => {
    setAllSnacks([...allSnacks, snack]);
  }, [snack]);

  const clickSwitchUser = () => {
    if (user === "Mark") setUser("Jeff");
    else setUser("Mark");
  };

  const clickSwitchTrip = () => {
    if (trip === "Yosemite") setTrip("Glacier");
    else setTrip("Yosemite");
  };

  const clickSwitchSnack = () => {
    if (snack === "Trail Mix") setSnack("Builder Bar");
    else setSnack("Trail Mix");
  };

  return (
    <div className="context-child">
      <p>This green dashed box holds the "ContextChild" component</p>
      <section className="hook-data-section">
        <p>
          "user" is stored via useState in the parent component and passed down
          to the "ContextChild" component via useContext
        </p>
        <p>user: {user}</p>
        <p>AllUsers: {`[${printArray(allUsers)}]`}</p>
        <button onClick={clickSwitchUser}>Switch user</button>
      </section>
      <section className="hook-data-section">
        <p>
          "trip" is stored via useState in the parent component and passed down
          to the "ContextChild" component via prop drilling
        </p>
        <p>trip: {trip}</p>
        <p>AllTrips: {`[${printArray(allTrips)}]`}</p>
        <button onClick={clickSwitchTrip}>Switch trip</button>
      </section>
      <section className="hook-data-section">
        <p>"snack" is stored via useState in the "ContextChild" component</p>
        <p>snack: {snack}</p>
        <p>AllSnacks: {`[${printArray(allSnacks)}]`}</p>
        <button onClick={clickSwitchSnack}>Switch snack</button>
      </section>
    </div>
  );
};

export default ContextChild;

function printArray(arr) {
  return arr.map((el) => {
    if (el === null) {
      return "null";
    } else {
      return " " + el;
    }
  });
}
