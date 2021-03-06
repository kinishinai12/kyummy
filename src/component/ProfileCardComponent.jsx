import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import pork from '../image/pork.jpg';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import LoginService from '../springboot api/LoginService';
// import Image from 'react-bootstrap/Image'

export default class ProfileCardComponent extends Component {
    constructor(props){
        super(props);

        // this.state = {

        //     user: [],
        //     isLoading: true,
        //     error:''

        // };
    }

    // componentDidMount(){
    //     this.refresh();
    // }

    // refresh =()=>{
    //     let userid = sessionStorage.getItem('id');
    //     let token = sessionStorage.getItem('authenticationToken');
    //     LoginService.executeGetUserInformation(userid, token)
    //     .then(
    //         response =>{
                
    //             this.setState({
    //                 user: response.data, isLoading:false})
    //             console.log(this.state.user);
    //         }
    //     ).catch(
    //         error =>{
    //             this.setState({error:error, isLoading:false});
    //             console.log(error);
    //         }
    //     )
    // }



    render() {
        //TODO: verified users
        return (
            <div>
                {/* {
                        this.state.user.map(
                            userInfo =>  */}
                <CardGroup>

                    
                <Card style={{display: 'flex', flexDirection: 'row'}} key={this.props.id}>
                
                    <Card.Body>
                    <Card.Title><Card.Img src={pork} style={{width:'10rem'}} /> </Card.Title>
                    <Card.Title><Button variant="dark" disabled>
                        Select
                    </Button></Card.Title>
                    <Card.Title as="h5">My Profile</Card.Title>
                        <Card.Title>Manage & protect your account</Card.Title>
                        
                        <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={this.props.firstName} disabled/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={this.props.lastName} disabled/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Phone #</Form.Label>
                            <Form.Control type="number" value={this.props.phoneNumber} disabled/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>email</Form.Label>
                            <Form.Control type="email" value={this.props.email} disabled/>
                        </Form.Group>

                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control type="text" value={this.props.birthday} disabled/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type="text" value={this.props.gender} disabled/>
                        </Form.Group>

                    </Form.Row>

                    {!this.props.wantToEdit && <Button variant ="success" onClick={this.props.editClicked} disabled>Edit</Button>}

                    {this.props.wantToEdit && <Button variant="dark" onClick={this.props.editClicked} disabled>Save</Button>}
                </Form>
                    </Card.Body>
                      
                </Card>
 
                </CardGroup>
                {/* )
            } */}
            </div>
        )
    }
}