
import Footer from "./Footer";
import Header from "./Header";
import { Carousel, Col, Form, Row } from "react-bootstrap";
import react, { useState } from "react"
import { Button, Container, Image, Modal, } from "react-bootstrap"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import "./style.css"




const Main = () => {

    return (
        <>
            <Header />
            <Row className="">
                <Col>
                    <Carousel >
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/r1.jpg"
                                alt="First slide"
                                style={{ height: "100%" }}
                            />

                        </Carousel.Item>
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/p2.jpg"
                                alt="Second slide"

                                style={{ height: "100%" }}

                            />


                        </Carousel.Item>
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/p5.jpg"
                                alt="Third slide"
                                style={{ height: "100%" }}
                            />

                        </Carousel.Item>
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/p3.jpg"
                                alt="Third slide"
                                style={{ height: "100%" }}
                            />

                        </Carousel.Item>
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/p4.jpg"
                                alt="Third slide"
                                style={{ height: "100%" }}

                            />

                        </Carousel.Item>
                        <Carousel.Item style={{ height: "100vh" }}>
                            <img
                                className="d-block w-100"
                                src="/images/p6.jpg"
                                alt="Third slide"
                                style={{ height: "100%" }}

                            />

                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col className="col2" >
 <form>
  
  <div class="row mt-3">
    <h1 style={{textAlign:"center" , margin:"10px", textShadow:"2px 2px 5px black"}}>Registration</h1>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form3Example1">First name</label>
        <input type="text" id="form3Example1" class="form-control" placeholder="Enter First Name" />
       
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form3Example2">Last name</label>
        <input type="text" id="form3Example2" class="form-control" placeholder="Enter Last Name"/>
        
      </div>
    </div>
  </div>

  <div class="form-outline mb-4 mt-2">
  <label class="form-label" for="form3Example3">Email address</label>
    <input type="email" id="form3Example3" class="form-control" placeholder="example@gmail.com" />
    
  </div>


  <div class="row mt-3">
    
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form3Example1">Password</label>
        <input type="password" id="form3Example1" class="form-control" placeholder="Enter Password" />
       
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form3Example2">Comfirm password </label>
        <input type="password" id="form3Example2" class="form-control" placeholder="Enter Comfirm Password"/>
        
      </div>
    </div>
  </div>
  



  <button type="submit" class="btn btn-primary btn-block mt-4">Sign up</button>

  <div class="text-center">
    <p>or sign up with :</p>
    <button type="button" class="btn btn-secondary btn-floating mx-1">
    <BsFacebook/>
    </button>

    <button type="button" class="btn btn-secondary  mx-1">
    <FcGoogle/>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <BsTwitter/>
    </button>

    <button type="button" class="btn btn-secondary btn-floating mx-1">
     <BsGithub/>
    </button>
  </div>
</form>

                </Col>
            </Row>
          
        </>
    )
}

export default Main;