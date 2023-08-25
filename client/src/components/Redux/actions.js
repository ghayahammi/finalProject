import AddCar from "../AddCar"
import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, GET_CARS, DELET_CAR , EDIT_CAR,Add_Booking } from "./actionTypes"
import  axios from "axios"
import { UPDATE_CAR_AVAILABILITY } from "./actionTypes";

export const registerUser=(newUser)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/register",newUser)
        dispatch({
            type:REGISTER_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}
export const loginUser=(formData)=>async(dispatch)=>{
    try{
        const res=await axios.post("/userAuth/login",formData)
        dispatch({
            type:LOGIN_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}


export const getAuthUser=()=>async(dispatch)=>{
const  config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
    try{
        const res=await axios.get("/userAuth/user",config)
        dispatch({
            type:GET_AUTH_USER,
            payload:res.data
        })
  
    }
    catch(error){
console.log(error)
    }
}

export const logout=()=>(dispatch)=>{
dispatch({
    type:LOGOUT_USER
})
}
export const getCars = () => async (dispatch) => {
const config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}

    try {
      const res = await axios.get("/api/car/cars");
      dispatch({
        type: GET_CARS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  export const deletCar=(idCar)=>(dispatch)=>{
    axios.delete(`/api/car/${idCar}`)
    .then((res)=>dispatch(getCars()))
    .catch((err)=>console.log(err))
    }
    export const editCar=(idCar,editedCar)=>(dispatch)=>{

const config={
    headers:{
        'authorization':localStorage.getItem("token")
    }
}
        axios.put(`/api/car/edit/${idCar}`,editedCar,config)
        .then((res)=>dispatch(getCars()))
        .catch((err)=>console.log(err))
    }

    export const addCar=(newCar)=>(dispatch)=>{
        axios.post("/api/car/add",newCar)
        .then((res)=>dispatch(getCars()))
        .catch((err)=>console.log(err))
            
    }

    export const addBooking=(newBooking) =>(dispatch) => { 
        axios.post("/api/book/add", newBooking)
        .then((res)=>dispatch(getCars()))
        .catch((err)=>console.log(err))
    }
  

    
    export const updateCarAvailability = (carId, isAvailable) => {
        return {
          type: UPDATE_CAR_AVAILABILITY,
          payload: { carId, isAvailable },
        };
      };