import React, { useState, useEffect, useRef, createContext } from "react";
import ContextChild from "./ContextChild";
import SecondChild from "./SecondChild";

export const userContext = createContext({ user: null, setUser: undefined });

const ContextParent = () => {
  const [user, setUser] = useState(null);
  const [trip, setTrip] = useState(null);

  // For tracking renders:
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("ContextParent render number:", renderCount.current);
  });

  const childProps = { trip, setTrip };

  return (
    <div className="hooks-container" key="Context Parent">
      <h2> useContext and State Change Rendering</h2>
      <p>
        Everything in this white box a part of the "ContextParent" component.
        View the console in your browser's dev tools to see when each of the
        components on this page render based on when state is updated
      </p>
      <userContext.Provider
        value={{ user, setUser }}
        key="userContext Provider"
      >
        <ContextChild {...childProps} key={"ContextChild"} />
      </userContext.Provider>
      <SecondChild />
    </div>
  );
};

export default ContextParent;
