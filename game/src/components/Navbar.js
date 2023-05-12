import React, { useState } from "react";

import "../styles/Navbar.css";


function Navbar() {
  const [ setOpenLinks] = useState(false);

  return (
    <div>
      <div className="navbar">
      <button onClick={setOpenLinks}>

          </button>
      </div>
    </div>
  );
}
export default Navbar;