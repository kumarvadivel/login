import React from 'react';
import { useHistory } from 'react-router-dom';


const Home = () => {
const history = useHistory();
    function handleclick(e){
        
        history.push('/login/')
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <p> login sucessfull</p>
      <button onClick={handleclick}>Log Out</button>
    </div>
  )
};

export default Home;
