import React from "react";

const Spinner = ({ color }) => {
  return (
    <div style={{ color: `${color}` }} className="loader">
      Loading...
    </div>
  );
};

export default Spinner;
