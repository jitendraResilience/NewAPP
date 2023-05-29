
import { Button, Container,Nav, Navbar } from "react-bootstrap";
import {GoSignIn} from "react-icons/go"
import { NavLink } from "react-router-dom";
import react, { useState } from "react"
import { Form, Image, Modal} from "react-bootstrap"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import "./style.css"

function MyVerticallyCenteredModal(props) {
  return (
      <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered 
          className="modal"
      >
          <Modal.Header className="ModalHeader">
         
              <Modal.Title id="contained-modal-title-vcenter">
              <i className="fas fa-user logo" size="lg"></i>  Login Your Account</Modal.Title>
<Modal.Title className="ml-auto">
  <Button className="button" variant="light" ><BsFacebook/> Fecebook</Button> 
<Button className="ml-1 button" variant="light" ><FcGoogle/> Google</Button>
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form  className="form">
                  <Form.Group className="mb-3" controlId="formBasicEmail" >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Exampl@gmail.com" style={{ borderRadius: "19px" }} size="md"/>
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" style={{ borderRadius: "19px" }} size="md"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="dark" type="submit" onClick={props.onHide} className="m-auto" size="md">
                      Login
                  </Button>
              </Form>
          </Modal.Body>
        

             
         

      </Modal>
  );
}
const Header=()=>
{
  const [modalShow, setModalShow] = useState(false);

    return(
       <>
        <Navbar   variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">MyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to={'/'}  className={"m-2 link"} style={{color:"white",textDecoration:"none", border:"1.5px solid white", padding:"5px", boxShadow:"2px 2px 4px white"}} >Home</NavLink>
            <NavLink onClick={()=>{setModalShow(true)}} className={"m-2"} style={{color:"white",textDecoration:"none", border:"1.5px solid white", padding:"5px",boxShadow:"2px 2px 4px white"}}><GoSignIn/> Login</NavLink>
            <NavLink to={'/Registration'} className={"m-2"} style={{color:"white",textDecoration:"none", border:"1.5px solid white", padding:"5px",boxShadow:"2px 2px 4px white"}}> <i className="fas fa-user"> </i> Registration</NavLink>
           
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
      <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
      </>
    )
}

export default Header;