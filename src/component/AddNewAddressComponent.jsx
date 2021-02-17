import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginService from '../springboot api/LoginService'

export default class AddNewAddressComponent extends Component {
    constructor(props){
        super(props);
        // this.state={
        //     region:'',
        //     province:'',
        //     city:'',
        //     barangay:'',
        //     postalCode:'',
        //     detailedAddress:'',
        // }
    }

    render() {
        return (
            <div>
                
               <CardGroup>
                                    
                <Card style={{display: 'flex', flexDirection: 'row'}}>

                    <Card.Body>
                    <Card.Title as="h5">Add new Address</Card.Title>
                    
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Region</Form.Label>
                                <Form.Control type="text" placeholder="Region" name="region" onChange={this.props.handlerChange} value={this.props.region}/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>Province</Form.Label>
                                <Form.Control type="text" placeholder="Province" name="province" onChange={this.props.handlerChange} value={this.props.province}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" name="city" onChange={this.props.handlerChange} value={this.props.city}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Barangay</Form.Label>
                                    <Form.Control type="text" placeholder="Barangay" name="barangay" onChange={this.props.handlerChange} value={this.props.barangay}/>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type="text" placeholder="Postal Code" name="postalCode" onChange={this.props.handlerChange} value={this.props.postalCode}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col}>
                                    <Form.Label>Detailed Address</Form.Label>
                                    <p>Unit number, house number, building, street name</p>
                                    <Form.Control type="text" placeholder="Unit number, house number, building, street name" name="detailedAddress" value={this.props.detailedAddress}
                                    onChange={this.props.handlerChange}/>
                            </Form.Group>
                            </Form.Row>

                    <Button variant="dark" onClick={this.props.AddnewAddressForTheUser}>Save</Button>
                </Form>
                    </Card.Body>
                    
                </Card>

                </CardGroup> 
            </div>
        )
    }
}
