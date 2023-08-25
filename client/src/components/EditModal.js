import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import {editCar} from "./Redux/actions"



const EditModal = ({el}) => {
  const [modal, setModal] = useState(false);
  const[Marque,setMarque]=useState(el.Marque)
const[Nbportes,setNbportes]=useState(el.Nbportes)
const[boiteVitesse,setboiteVitesse]=useState(el.boiteVitesse)
const[dispo,setDispo]=useState(el.dispo)
const[annèe,setannèe]=useState(el.annèe)
const[prix,setprix]=useState(el.prix)
const[image,setimage]=useState(el.image)
  const toggle = () => {
    setModal(!modal);

  };
  const dispatch = useDispatch();

  const editt=()=>{
    dispatch(editCar(el._id,{Marque,Nbportes,boiteVitesse,annèe,prix,image,dispo}))
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        edit car{" "}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>edit modal</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="examplemarque">Marque</Label>
              <Input
            value={Marque}
            onChange={(e)=>setMarque(e.target.value)}
                type="marque"
                name="marque"
                id="examplemarque"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Nbportes</Label>
              <Input
         value={Nbportes}
         onChange={(e)=>setNbportes(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">boiteVitesse</Label>
              <Input
              value={boiteVitesse}
              onChange={(e)=>setboiteVitesse(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
          
          
            <FormGroup>
              <Label for="examplePassword">annèe</Label>
              <Input
              value={annèe}
              onChange={(e)=>setannèe(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">prix</Label>
              <Input
              value={prix}
              onChange={(e)=>setprix(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">image</Label>
              <Input
              value={image}
              onChange={(e)=>setimage(e.target.value)}
                type="text"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">dispo</Label>
              <Input
              value={dispo}
              onChange={(e)=>setDispo(e.target.value)}
                type="date"
              
                id="examplePassword"
                placeholder="dispo placeholder"
              />
            </FormGroup>
          
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>
            save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default EditModal