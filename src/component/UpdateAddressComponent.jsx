import React, { Component } from 'react'
import Card from 'react-bootstrap/esm/Card';
import { Field, Formik, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginService from '../springboot api/LoginService'
import CardGroup from 'react-bootstrap/CardGroup'

export default class UpdateAddressComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            region:'',
            province:'',
            city:'',
            barangay:'',
            postalCode:'',
            detailedAddress:'',

        }
    }
    UpdateAddressForTheUser=(values)=>{
        if(values.region === ''){
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
        else if(values.province === ''){
            toast.error('🤔 province', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        }
        else if(values.city === ''){
            toast.error('🤔 city', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else if(values.barangay === ''){
            toast.error('🤔 barangay', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else if(values.postalCode === ''){
            toast.error('🤔 postal code', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else if(values.detailedAddress === '' || this.state.detailedAddress.length <= 6){
            toast.error('🤔 detailed address', {
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
            const userId = sessionStorage.getItem('id');

            let updatedAddressInfo ={
                "barangay": values.barangay,
                "city": values.city,
                "detailedAddress": values.detailedAddress,
                "postalCode": values.postalCode,
                "province": values.province,
                "region": values.region,
                "userId": userId,
                "youWantItToBeDefault": true,
        }
        //input ka dito

        LoginService.executeUpdateAddressInformation(this.state.id,updatedAddressInfo)
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
                this.props.saveClicked();
            
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
        let {region,province,city,barangay,postalCode,detailedAddress} = this.state
        return (
            <div>
                <ToastContainer />
               <CardGroup>
                                    
                    <Card style={{display: 'flex', flexDirection: 'row'}}>
                        <Card.Body>
                            <Card.Title as="h5">Update Address</Card.Title>
                                <Formik 
                                initialValues={{region,province,city,barangay,postalCode,detailedAddress}} 
                                onSubmit={this.UpdateAddressForTheUser} 
                                enableReinitialize={true}
                                validateOnChange={false}
                                validateOnBlur={false}>
                                    <Form> 
                                        <fieldset className="form-group">
                                            <label>
                                                Region
                                            </label>
                                            <Field className="form-control" type="text" name="region"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                province
                                            </label>
                                            <Field className="form-control" type="text" name="province"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                City
                                            </label>
                                            <Field className="form-control" type="text" name="city"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                Barangay
                                            </label>
                                            <Field className="form-control" type="text" name="barangay"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                Postal Code
                                            </label>
                                            <Field className="form-control" type="text" name="postalCode"/>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>
                                                Detailed Address
                                            </label>
                                            <Field className="form-control" type="text" name="detailedAddress"/>
                                        </fieldset>
                                        <button className="btn btn-dark" type="submit" >Save</button>
                                    </Form>
                            </Formik>
                        </Card.Body>
                     </Card>
                </CardGroup>
            </div>
        )
    }
    componentDidMount(){
        this.getSpecificAddress();
    }

 
    getSpecificAddress=()=>{
        let token = sessionStorage.getItem('authenticationToken');
        LoginService.executeGetSpecificAddressInformation(this.state.id, token)
        .then(response=>{
            this.setState({
            region:response.data.region,
            province:response.data.province,
            city:response.data.city,
            barangay:response.data.barangay,
            postalCode:response.data.postalCode,
            detailedAddress:response.data.detailedAddress,
            })

        })
        .catch(error=>{
            console.log(error);
        })
    }

}
