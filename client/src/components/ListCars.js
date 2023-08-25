import {useEffect}  from "react"
import {useDispatch,useSelector} from "react-redux"
import {getCars} from "./Redux/actions"
import CarCard from "./CarCard"
import AppNavbar from "./AppNavbar"
import FilteredListCars from "./FilteredListCars"
import { useNavigate } from "react-router-dom"

const ListCars=()=>{
    const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getCars())
  },[])

  const cars=useSelector((state)=>state.carsReducer.cars)

  const navigate = useNavigate();

  const handleFilterList = (filteredCars) => {
    navigate("/FiltredListCars", { state: { filteredCars } });
  };
  console.log(cars,'rrrrrrrrrrrrrrr')
    return( 
      <div>
        <AppNavbar/>
    
<div>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" , justifyContent:"center"}}>

{
    cars && cars.map((el)=>(
        <CarCard  key={el.id}el={el}/>
     
    ))
}</div>
        </div>
        
        </div>
    )
}
export default ListCars