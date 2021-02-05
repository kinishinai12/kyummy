import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import FacebookLoginComponent from './FacebookLoginComponent'
import RegisterService from '../springboot api/RegisterService'
import Modal from 'react-bootstrap/Modal'

class SignUpComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            phoneNumber:'',
            password:'',
            lastname:'',
            firstname:'',
            birthday:'',
            address:'',
            gender:'',
            isCheck: false,
            message:'',
            isSuccessfull:false,
            isNotSuccessfull:false,
            show:false,
        }
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
            console.log("please fill up the email part");
        }
        // this checks the phoneNUmber is empty
        else if(this.state.phoneNumber === '' || this.state.phoneNumber.length !== 11 ){
            console.log("must 11 numbers");
            this.setState({message:"must 11 numbers", isNotSuccessfull:true, show:true});
        }
        // this checks the password is empty or when the value's length is less than or equal to 6
        else if(this.state.password === '' || this.state.password.length<=6){
            console.log("password must contain atleast 6 characters");
            this.setState({message:"password must contain atleast 6 characters", isNotSuccessfull:true, show:true});
        }
        // this checks the gender is empty
        else if(this.state.gender === ''){
            console.log("Please select your gender");
            this.setState({message:"Please select your gender", isNotSuccessfull:true, show:true});
        }
        // this checks the birthday is empty or the age is valid
        else if(this.state.birthday === '' || this.checkAge(this.state.birthday) < 18){
            console.log("must 18 above");
            this.setState({message:"must 18 above", isNotSuccessfull:true, show:true});
        }
        // this checks if the firstname empty or contains shit
        else if(this.state.firstname === '' || this.state.firstname === /^[a-zA-Z0-9_]{3,10}$/){
            console.log("firtsname must not contain unnecessary shit");
            this.setState({message:"firtsname must not contain unnecessary characters", isNotSuccessfull:true, show:true});
        }
        // this checks if the lastname empty or contains shit
        else if(this.state.lastname ==='' || this.state.lastname === /^[a-zA-Z0-9_]{3,10}$/){
            console.log("lastname must not contain unnecessary shit");
            this.setState({message:"lastname must not contain unnecessary characters", isNotSuccessfull:true, show:true});
        }
        else if(this.state.address === ''){
            console.log("san ka nakatira");
            this.setState({message:"kyummy needs your address", isNotSuccessfull:true, show:true});
        }
        else{
            this.setState({isNotSuccessfull:false})
        // if anything doesn't go wrong do this
        let registrationRequest ={
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            birthday: this.state.birthday,
        }

        RegisterService.ExecuteRegisterRequest(registrationRequest)
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
                        <Form.Control name="lastname" value = {this.state.lastname} placeholder="lastname" onChange ={this.handlerChange}/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control name="firstname" placeholder="firstname" value = {this.state.firstname} onChange ={this.handlerChange}/>
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
                        <Form.Check type="checkbox" label="I agree to Kyummy's, Terms of Use and Privacy Policy" />
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
            </Container>
        )
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