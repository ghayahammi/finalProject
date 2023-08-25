import React from 'react';
import RegisterModal from '../auth/RegisterModal';
import LoginModal from '../auth/LoginModal';
import './Home.css'; // Import the CSS file for styling
import { Button } from 'reactstrap';


const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="home-title">" Hit the Road, Let the Fun Unfold "</h1>
        <div className="modal-buttons">
          
       <button><RegisterModal /></button>   
          <button><LoginModal /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;