import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import FacebookLoginComponent from './FacebookLoginComponent'
import AuthenticationService from '../service/AuthenticationService'

class LoginComponent extends Component{
    constructor(props){
        super(props)

        this.state ={
            email:'',
            password:"",
            isSuccess: false,
            notSuccess: false
        }
    }

    readingInputs=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    loginClicked=()=>{
        if(this.state.email==='junie@.com' && this.state.password === '111'){
            console.log('success')
            AuthenticationService.successfullyLogin(this.state.email);
            this.props.history.push(`/home/${this.state.email}`)


        this.setState({isSuccess:true});
        this.setState({notSuccess:false});
        }

        

        else{
            console.log('failed')
            this.setState({isSuccess:false});
            this.setState({notSuccess:true});
        }
    }

    render() {
        return (
            
           <Container style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"5%"}}>
               {this.state.notSuccess && <div className="alert alert-danger">Wrong email or password</div>}
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
                    </div>
                </Card.Body>
            </Card>
           </Container>
          
        )
    }
}

export default LoginComponent