import React, { useEffect, useRef } from "react";

const SecondChild = () => {
  // For tracking renders:
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("SecondChild render number:", renderCount.current);
  });

  return (
    <div className="context-child">
      <p className="second-child">
        This green dashed box holds the "SecondChild" component. Check the
        console logs and code to see how changing state stored in different
        places affects when "SecondChild" renders
      </p>
    </div>
  );
};

export default SecondChild;
