import React from 'react';
import ReactDOM from 'react-dom/client';
import {useNavigate} from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  function ClickHandler(){
    navigate("/");
  }
  function BackHandler(){
    navigate(-1);
  }
  return(
    <div>
      <div>
        <h1>About</h1>
      </div>
      <button onClick={ClickHandler}>Move to Home Page</button>
      <button onClick={BackHandler}>Back to previous Page</button>
    </div>
  );
}

export default About;