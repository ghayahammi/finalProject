import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBooking, updateCarAvailability } from "./Redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const MyBookingCalendar = ({ cars }) => {
  const [dateRetrait, setdateRetrait] = useState("");
  const [dateRetour, setdateRetour] = useState("");
  const [availableCars, setAvailableCars] = useState([]);
  const { carId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = { dateRetrait,dateRetour  };
    try {
      await dispatch(addBooking(bookingData));
      
     
      if (availableCars.length > 0) {
        availableCars.forEach((car) => {
          dispatch(updateCarAvailability(car.id, false));
        });
      }
      
      navigate("/filteredListCars");
    } catch (error) {
      console.error("Error adding booking:", error);
    }
  };
  
  useEffect(() => {
    if (dateRetrait) {
      const filteredCars = cars.filter(car => {
        const carDispoDate = new Date(car.dispo);
        const selectedDateObj = new Date(dateRetrait);
        return carDispoDate <= selectedDateObj;
      });
      setAvailableCars(filteredCars);
    }
  }, [dateRetrait, cars]);
 

  const containerStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    color: "black",
  };

  const formGroupStyle = {
    marginBottom: "15px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2980b9",
  };

  return (
    <div style={containerStyle}>
      <Form onSubmit={handleSubmit}>
        <FormGroup style={formGroupStyle}>
          <Label for="exampleDateRetrait">Date Retrait</Label>
          <Input
            onChange={(event) => setdateRetrait(event.target.value)}
            type="date"
            name="dateRetrait"
            id="exampleDateRetrait"
            placeholder=""
            style={inputStyle}
          />
        </FormGroup>

        <FormGroup style={formGroupStyle}>
          <Label for="exampleNbjours">Date Retour</Label>
          <Input
            onChange={(event) => setdateRetour(event.target.value)}
            type="date"
            name="dateRetour"
            id="exampleDateRetour"
            placeholder=""
            style={inputStyle}
          />
        </FormGroup>
        <Button type="submit" style={buttonStyle}>
      Book Now
        </Button>
      </Form>
    </div>
  );
};

export default MyBookingCalendar;
