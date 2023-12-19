import React from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom';
const Support = () => {
  const navigate = useNavigate();
  function clickHandler() {
    navigate("/About");
  }
  return(
    <div>
      <div>
        <h1>Support</h1>
      </div>
      <button onClick = {clickHandler}>Move to the About Page</button>
    </div>
  );
}

export default Support;