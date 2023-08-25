import { Card, Button, CardTitle, CardText } from "reactstrap";
import {deletCar} from "./Redux/actions"
import {useDispatch, useSelector} from "react-redux"
import EditModal from "./EditModal" 
import '../App.css'


const CarCard=({el})=>{
  console.log(el,"hellllllllllo")
const dispatch=useDispatch()
console.log(el,"imeeeeen")
    const deletee=()=>{
    
dispatch(deletCar(el._id))
    }
    const user=useSelector((state)=>state.authReducer.user)
    const year = new Date(el.dispo).getFullYear();
    console.log(year,'year')
    const month = new Date(el.dispo).getMonth();
    console.log(month,"month")
    const day = new Date(el.dispo).getDate();
    console.log(day,"day")
    return(
   
        <div style={{ minWidth: "300px", margin: "10px" }}
        >
        <Card 
          body
          inverse
          style={{  backgroundColor: "#FCFCFC", borderColor: "#500", }}
        >
            <CardTitle  style={{color:"black"}} tag="h5"> {el.Marque} </CardTitle>
            <img  style={{width:"300px",height:"150px"}}src={el.image} alt="immg"/>
       
          <CardText style={{color:"black"}}>Nbportes : {el.Nbportes} </CardText>
          <CardText style={{color:"black"}}>Boîte de vitesse : {el.boiteVitesse} </CardText>
          <CardText style={{color:"black"}} >Annèe : {el.annèe} </CardText>
          <CardText style={{color:"black"}}> Prix par jour : {el.prix} </CardText>
          <CardText style={{color:"black"}}> dispo : {el.dispo} </CardText>
     
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {user && user.isAdmin && 
            <>
       <Button onClick={deletee}>delete</Button>
       <EditModal el={el}/>
       </>
      }
          </div>
        </Card>
      </div>
    )
}
export default CarCard