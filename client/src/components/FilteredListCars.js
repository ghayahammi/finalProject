import React from "react";
import CarCard from "./CarCard";


const FilteredListCars = ({ filteredCars }) => {



  return (
    <div>
      
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "center" }}>
          {filteredCars.map((el) => (
            <CarCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredListCars;
