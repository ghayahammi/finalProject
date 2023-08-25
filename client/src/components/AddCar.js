import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import  getCars  from "../components/Redux/actions";
import ListCars from "./ListCars";
import {addCar} from "./Redux/actions"
import axios from "axios"
import AppNavbar from "./AppNavbar";

const AddCar = () => {
const[Marque,setMarque]=useState("")
const[Nbportes,setNbportes]=useState("")
const [boiteVitesse,setboiteVitesse]=useState("")
const[annèe,setannèe]=useState("")
const[prix,setprix]=useState("")
const[image,setImage]=useState("")
const[dispo,setDispo]=useState("")
const [uploading, setUploading] = useState(false);
  const [cancel, setCancel] = useState(false);
 const dispatch=useDispatch()
 const navigate=useNavigate()

const add=()=>{
    dispatch(addCar({Marque,Nbportes,boiteVitesse,annèe,prix,image,dispo}))
    setCancel(!cancel)
}
const uploadProfileImage = (e) => {
  const file = e.target.files[0];
  const bodyFormData = new FormData();
  bodyFormData.append("image", file);
  setUploading(true);
  axios
    .post("/api/uploads", bodyFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      setImage(response.data);
      setUploading(false);
    })
    .catch((err) => {
      console.log(err);
      setUploading(false);
    });
};

  return (
    <>
 {cancel?(
navigate("/list")
 ):(
  
        <div style={{ margin: "100px" }}>
       
          <Form>
            <FormGroup>
              <Label for="exampleMarque">Marque</Label>
              <Input
onChange={(event)=>(setMarque(event.target.value))}
                type="text"
                name="Marque"
                id="exampleMarque"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleNbportes">Nbportes</Label>
              <Input
             onChange={(event)=>(setNbportes(event.target.value))}
                type="text"
                name="Nbportes"
                id="exampleNbportes"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">boiteVitesse</Label>
              <Input
          onChange={(event)=>(setboiteVitesse(event.target.value))}
                type="text"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">annèe</Label>
              <Input
          onChange={(event)=>(setannèe(event.target.value))}
                type="text"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">prix</Label>
              <Input
          onChange={(event)=>(setprix(event.target.value))}
                type="text"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">dispo</Label>
              <Input
          onChange={(event)=>(setDispo(event.target.value))}
                type="date"
                name="password"
                id="examplePassword"
                placeholder=""
              />
            </FormGroup>
            <FormGroup>
      <>
                  {image ? (
                    <img
                      src={image}
                      width="100%"
                      style={{ margin: "8px 0" }}
                      height="150px"
                      alt="product"
                    />
                  ) : (
                    <div style={{ margin: "8px 0" }}>
                      {!uploading ? "Upload Image For Product" : "Loading ..."}
                    </div>
                  )}
                  <div
                  >
                    Select File
                    <input
                      accept="image/*"
                      type="file"

                      onChange={uploadProfileImage}
                    />
                  </div>
                </>
      </FormGroup>
            <Button onClick={add}> + Car </Button>
            <Button onClick={() => setCancel(!cancel)}>cancel</Button>
          </Form>
        </div>
 )
}
    </>

  );
};

export default AddCar;