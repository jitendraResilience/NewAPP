import react, { useState } from "react"
import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import "./style.css"
import Header from "./Header"
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            
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

const Login = () => {
    const [modalShow, setModalShow] = useState(false);
    return (<>
        <Header/>
        <div style={{display:"flex", marginTop:"20%" ,justifyContent:"center"}}>

       
                <Button onClick={() => { setModalShow(true) }} style={{width:"150px"}}>Get Start</Button>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
              
          </div>
          </>
    )
}

export default Login;