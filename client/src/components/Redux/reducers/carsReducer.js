import { GET_CARS, UPDATE_CAR_AVAILABILITY } from "../actionTypes";

const initState = {
  cars: null,
};

const initialState = {
  cars: [], 
};

const carsReducer = (state = { ...initState, ...initialState }, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload.cars,
      };
    case UPDATE_CAR_AVAILABILITY:
      const updatedCars = state.cars.map((car) => {
        if (car.id === action.payload.carId) {
          return { ...car, isAvailable: action.payload.isAvailable };
        }
        return car;
      });

      return {
        ...state,
        cars: updatedCars,
      };
   
    default:
      return state;
  }
};

export default carsReducer;
