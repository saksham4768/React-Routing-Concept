import React from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  function MoveHandler() {
    navigate("/Support");
  }
  return (
    <div>
      <div>
        <h1>Home</h1>
      </div>
      <button onClick={MoveHandler}>Back to the Support</button>
    </div>
  );
}

export default Home;
