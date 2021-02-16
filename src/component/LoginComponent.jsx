import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FacebookLoginComponent from './FacebookLoginComponent'
import AuthenticationService from '../service/AuthenticationService'
import { Link } from 'react-router-dom'
import LoginService from '../springboot api/LoginService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state ={
            email:"",
            password:"",
            isSuccess: false,
            notSuccess: false,
            message:'',
        }
    }

    notify=()=>{

        if(this.state.notSuccess === true){
            toast.error('🤔 sounds suspicous', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
    }

    readingInputs=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    loginClicked=()=>{

        if(this.state.email === ""){
            this.setState({message:"Incomplete", isSuccess:false, notSuccess:true});
            console.log(this.state.message);
        }
        else if(this.state.password === "" || this.state.password.length < 6){
            this.setState({message:"Access denied", isSuccess:false, notSuccess:true});
            console.log(this.state.message);
        }
        else{
        let loginRequest = {
            email: this.state.email,
            password: this.state.password
        }
        

        LoginService.executeLoginRequest(loginRequest)
        .then(respond=>{
            this.setState({isSuccess:true, notSuccess:false});
            toast.success('❤️ Wow so easy!, you are logged in now!, Please wait..', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                });
            AuthenticationService.successfullyLogin(respond.data.authenticationToken, 
                respond.data.expiresAt, respond.data.refreshToken, respond.data.username, respond.data.id);
               
            this.props.history.push(`/home/${respond.data.username}`);
            
        })
        .catch(error=>{
            this.setState({message: error.data, isSuccess:false, notSuccess:true})
            this.notify();
        })

    }
        // if(this.state.email==='junie@.com' && this.state.password === '111'){
        //     console.log('success')
        //     AuthenticationService.successfullyLogin(this.state.email);
        //     // this.props.history.push(`/home/${this.state.email}`)


        // this.setState({isSuccess:true});
        // this.setState({notSuccess:false});
        // }

        

        // else{
        //     console.log('failed')
        //     this.setState({isSuccess:false});
        //     this.setState({notSuccess:true});
        // }
    }

    render() {
        return (
            
           <Container style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"5%"}}>
               {this.state.notSuccess && <div className="alert alert-danger">{this.state.message}: Wrong email or password</div>}
               <ToastContainer />
            <Card border="dark" style={{'backgroundColor': "#e96196",
                        'backgroundImage': "linear-gradient(315deg, #e96196 0%, #ffffff 90%)", 'padding':"5%"}} >
                <Card.Header as="h5">Login</Card.Header>
                <Card.Body>
                    <div className="form-group">
                    <Card.Title as="h6">Email:</Card.Title>

                    <input className="form-control" 
                    type="email" 
                    name = "email" 
                    placeholder = "Enter your Email"
                    value={this.state.email} 
                    onChange={this.readingInputs}/>
                    
                    </div>
                    <div className="form-group">
                    <Card.Title as="h6">Password:</Card.Title>
                    
                    <input 
                    className="form-control " 
                    type="password" 
                    name = "password"
                    value = {this.state.password}
                    onChange={this.readingInputs}/>

                    </div>
                    <Button variant="dark" onClick={this.loginClicked}>Login</Button>
                    <div className="text-center">
                    
                    <Card.Title as="h6" className="text-center">Or</Card.Title>
                    <FacebookLoginComponent/>
                    <Link to="/signup">Don't have an account? regiter here!</Link>
                    </div>
                </Card.Body>
            </Card>
           </Container>
          
        )
    }
}

export default LoginComponent