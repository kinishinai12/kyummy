import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import FacebookLoginComponent from './FacebookLoginComponent'
import RegisterService from '../springboot api/RegisterService'
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

class SignUpComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            phoneNumber:'',
            password:'',
            lastName:'',
            firstName:'',
            birthday:'',
            gender:'',
            isCheck: false,
            message:'',
            isSuccessfull:false,
            isNotSuccessfull:false,
            show:false,
            openTerms:false,
        }
    }
    notify=(error)=>{
        toast.error('🤔 you missed '+ error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            });
    }
    handleClose=()=>{
        this.setState({show:false});
    }
    navigateToLogin=()=>{
        this.props.history.push('/login');
    }
    // this checks the age of the user
    checkAge=(birthday)=>{
        var yearBirth = birthday.substring(0, 4);
        var currentYear = new Date();
        var result = currentYear.getYear() + 1900;
        return result - parseInt(yearBirth);
    }
    handlerChange=(event)=>{
        console.log(event.target.name);
        console.log(this.state.email);
        console.log(this.state.gender);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    // when the user click the signup button
    signupClicked=()=>{
        //checks if the email input is empty
        if(this.state.email === ''){
            this.setState({message:"Incomplete fields", isNotSuccessfull:true, show:true});
            this.notify("email")
            console.log("please fill up the email part");
        }
        // this checks the phoneNUmber is empty
        else if(this.state.phoneNumber === '' || this.state.phoneNumber.length !== 11 ){
            console.log("must 11 numbers");
            this.notify("phone number")
            this.setState({message:"must 11 numbers", isNotSuccessfull:true, show:true});
        }
        // this checks the password is empty or when the value's length is less than or equal to 6
        else if(this.state.password === '' || this.state.password.length<=6){
            console.log("password must contain atleast 6 characters");
            this.notify("password")
            this.setState({message:"password must contain atleast 6 characters", isNotSuccessfull:true, show:true});
        }
        // this checks the gender is empty
        else if(this.state.gender === ''){
            console.log("Please select your gender");
            this.notify("gender!")
            this.setState({message:"Please select your gender", isNotSuccessfull:true, show:true});
        }
        // this checks the birthday is empty or the age is valid
        else if(this.state.birthday === '' || this.checkAge(this.state.birthday) < 18){
            console.log("must 18 above");
            this.notify("birthday")
            this.setState({message:"must 18 above", isNotSuccessfull:true, show:true});
        }
        // this checks if the firstname empty or contains shit
        else if(this.state.firstName === '' || this.state.firstName === /^[a-zA-Z0-9_]{3,10}$/){
            console.log("firstname must not contain unnecessary shit");
            this.notify("firstname")
            this.setState({message:"firtsname must not contain unnecessary characters", isNotSuccessfull:true, show:true});
        }
        // this checks if the lastname empty or contains shit
        else if(this.state.lastName ===''){
            console.log("lastname must not contain unnecessary shit");
            this.notify("last name")
            this.setState({message:"lastname must not contain unnecessary characters", isNotSuccessfull:true, show:true});
        }
        else{
            this.setState({isNotSuccessfull:false})
        // if anything doesn't go wrong do this
        let registrationRequest ={
            birthday: this.state.birthday,
            email: this.state.email,
            firstName: this.state.firstName,
            gender: this.state.gender,
            lastName: this.state.lastName,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
        }
        console.log(registrationRequest);

        RegisterService.executeRegisterRequest(registrationRequest)
        .then(
            res => {
                this.setState({message:res.data +" kyummy sent you a mail, please verify and activate your account. ", show:true, isSuccessfull:true});
                console.log(res.data); 
        })
        .catch(
            error=>{

                console.log(error)
                this.setState({message:error.data, show:true, isNotSuccessfull:true})
            }
        )
        }

    }
    render() {
        return (
            <Container style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"5%"}}>
                <ToastContainer />
                <Card border="dark" style={{'backgroundColor': "#e96196",
                        'backgroundImage': "linear-gradient(315deg, #e96196 0%, #ffffff 90%)", 'padding':"5%"}} >
                            {this.state.isNotSuccessfull && <div className="alert alert-danger">{this.state.message}</div>}
                <Card.Header as="h5">Sign Up</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" value = {this.state.email} onChange ={this.handlerChange}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Phone-#</Form.Label>
                        <Form.Control name="phoneNumber" type="number" placeholder="Phone number" value = {this.state.phoneNumber} onChange ={this.handlerChange}/>
                        </Form.Group>

                        
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" value = {this.state.password} onChange ={this.handlerChange}/>
                        </Form.Group>

                    <Form.Group >
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control name="lastName" value = {this.state.lastName} placeholder="lastname" onChange ={this.handlerChange}/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control name="firstName" placeholder="firstname" value = {this.state.firstName} onChange ={this.handlerChange}/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" placeholder="Address" value = {this.state.address} onChange ={this.handlerChange}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} >
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date" name="birthday" value = {this.state.birthday} onChange ={this.handlerChange}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Gender</Form.Label>
                        <Form.Control name="gender" as="select" value={this.state.gender} onChange ={this.handlerChange}>
                            <option value=""></option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </Form.Control>
                        </Form.Group>

                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        {/* TODO: term of use and pricacy policy */}
                        
                        <Form.Check><Form.Check type="checkbox"/><Link to="/signup" onClick={this.termsAndConditionClicked}>I agree to Kyummy's, Terms of Use and Privacy Policy</Link></Form.Check>
                    </Form.Group>

                    <Button variant="dark" onClick={this.signupClicked}>
                        Sign Up
                    </Button>

                    <div className="text-center">
                    <Card.Title as="h6"  className="text-center">Or</Card.Title>
                    <FacebookLoginComponent/>
                    </div>
                    
                </Form>
                </Card.Body>
                </Card>


                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}>

                    <Modal.Header closeButton>
                    <Modal.Title>Please read!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.message}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    {this.state.isSuccessfull && <Button variant="primary" onClick={this.navigateToLogin}>Understood</Button>}
                    </Modal.Footer>
                </Modal>

                <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={this.state.openTerms}
            onHide={this.termsAndConditionClicked}
            keyboard={false}>

            <Modal.Header closeButton>
            <Modal.Title>Terms And Condition</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
            Welcome to KYummy web application, a small convenient store that offers Korean food products. If you continue to browse and use this web application, you are agreeing to obey with and be bound by the following terms and conditions of use. Please read them carefully. If you disagree with any part of these terms and conditions, please do not continue using our web application.
            </p>
            <p>
            While using this web application you should comply with the following terms of use:
            </p>
            <p>●    The content of this web application is for your own use only. It can be changed without any notice.</p>
            <p>●    The information that you will provide should be true and only your real identity. It can be used to contact and identify you. Personal information includes your name, gender, birthday, cellphone number, and email address. </p>
            <p>●    You’re the one who is responsible to ensure that the products and services in this web application satisfied your necessities. Your use of any information in this web app is only at your own risk, we are not responsible for your actions.</p>
            <p>●    The design, appearance and graphics of this web application is only owned by us, any trace of reproduction is prohibited unless it is notice as copyright, which is part of this terms and conditions. </p>
            <p>●    Any unauthorized use of this web application can be called as damages or clearly a criminal offence.</p>
            
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.termsAndConditionClicked}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
            </Container>

        )
    }


    termsAndConditionClicked=()=>{
        if(!this.state.openTerms){
            this.setState({openTerms:true});
        }
        else{
            this.setState({openTerms:false});
        }
        
    }
}

export default SignUpComponent

// return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

      
//     </>
//   );
// }