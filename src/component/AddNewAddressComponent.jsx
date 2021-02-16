import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginService from '../springboot api/LoginService'

export default class AddNewAddressComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            region:'',
            province:'',
            city:'',
            barangay:'',
            postalCode:'',
            detailedAddress:'',
        }
    }
    handlerChange=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    AddnewAddressForTheUser=()=>{
        if(this.state.region === ''){
            toast.error('🤔 Why missed?', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else if(this.state.province === ''){
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
        else if(this.state.city === ''){
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
        else if(this.state.barangay === ''){
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
        else if(this.state.postalCode === ''){
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
        else if(this.state.detailedAddress === '' || this.state.detailedAddress.length <= 6){
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
        else{  

            let addressDetails ={
            region: this.state.region,
            province: this.state.province,
            city: this.state.city,
            barangay: this.state.barangay,
            postalCode: this.state.postalCode,
            detailedAddress: this.state.detailedAddress,
            userId: sessionStorage.getItem('id'),
            youWantItToBeDefault:false
        }
        //input ka dito

        LoginService.executeAddAddressInformation(addressDetails)
        .then(respond=>{
            toast.success('❤️ '+respond.data, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                });
            this.props.history.push('/account');
            
        })
        .catch(error=>{
            console.error(error);
            this.notify();
        })
    
    
    }
    }

    notify=()=>{
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
    render() {
        return (
            <div>
                <ToastContainer />
               <CardGroup>
                                    
                <Card style={{display: 'flex', flexDirection: 'row'}}>

                    <Card.Body>
                    <Card.Title as="h5">Add new Address</Card.Title>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                <Form.Label>Region</Form.Label>
                                <Form.Control type="text" placeholder="Region" name="region" onChange={this.handlerChange}/>
                                </Form.Group>

                                <Form.Group as={Col}>
                                <Form.Label>Province</Form.Label>
                                <Form.Control type="text" placeholder="Province" name="province" onChange={this.handlerChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" name="city" onChange={this.handlerChange}/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Barangay</Form.Label>
                                    <Form.Control type="text" placeholder="Barangay" name="barangay" onChange={this.handlerChange}/>
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type="text" placeholder="Postal Code" name="postalCode" onChange={this.handlerChange}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col}>
                                    <Form.Label>Detailed Address</Form.Label>
                                    <p>Unit number, house number, building, street name</p>
                                    <Form.Control type="text" placeholder="Unit number, house number, building, street name" name="detailedAddress"
                                    onChange={this.handlerChange}/>
                            </Form.Group>
                            </Form.Row>

                    <Button variant="dark" onClick={this.AddnewAddressForTheUser}>Save</Button>
                </Form>
                    </Card.Body>
                    
                </Card>

                </CardGroup> 
            </div>
        )
    }
}
