import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCars from './components/ListCars';

import { getAuthUser } from './components/Redux/actions';
import './App.css';
import Dashboard from "./components/pages/Dashboard";
import Home from "./components/pages/Home";
import {Routes ,Route, Link} from "react-router-dom";
import AddCar from './components/AddCar';
import MapComponent from './components/MapComponent';
import FilteredListCars from './components/FilteredListCars';


function App() {
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getAuthUser())
},[])

  return (
    <div className="App">




  <Routes>
   <Route path="/" element={<Home />} />
  
   <Route path="/dashboard" element={<Dashboard />} />

   <Route path="/add" element={<AddCar />} />
   <Route path="/list" element={<ListCars />} />
   <Route path="/map" element={<MapComponent/>}/>
   <Route path="/filteredList" element={<FilteredListCars/>}/>
 
  </Routes>
 

  

  
    
    </div>
  );
}

export default App;