import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import './Dashboard.css'; // Import the CSS file
import MyBookingCalendar from '../MyBookingCalendar';

const Dashboard = () => {
  const cars = [];
  const user = useSelector((state) => state.authReducer.user);

  if (!user) {
    return (
      <div style={{ textAlign: 'left', marginTop: '1px' }}>
        <Spinner
          style={{ width: '3rem', height: '3rem', color: 'secondary' }}
          type="grow"
        />
      </div>
    );
  }

  return (
    <div className="dashboard-container"> {/* Apply background image */}
      <AppNavbar />
      <div className="content-container"> {/* Apply styling to content */}
        <h1 className="mb-3 ml-4"> Hello "{user.name} {user.lastName}"</h1>
        <p  className="dashboard-text">
 Welcome to our Rent Car dashboard. 
 Here, you can manage your car rentals and enjoy a seamless experience. 
          Check out our list of available cars and find your perfect match! </p>


          <MyBookingCalendar cars={cars} />
      </div>
    </div>
  );
};

export default Dashboard;
