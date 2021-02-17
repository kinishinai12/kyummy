import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import CardColumns from 'react-bootstrap/CardColumns'
// import pork from '../image/pork.jpg';
// import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/esm/Nav';
// import Image from 'react-bootstrap/Image'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import ProfileCardComponent from './ProfileCardComponent';
import PurchaseCardComponent from './PurchaseCardComponent';
import GCashComponent from './GCashComponent';
import AddAddressComponent from './AddAddressComponent';
import SetNewPasswordComponent from './SetNewPasswordComponent';
import LoginService from '../springboot api/LoginService';
import Button from 'react-bootstrap/Button'
import AddNewAddressComponent from './AddNewAddressComponent';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import UpdateAddressComponent from './UpdateAddressComponent';

export default class AccountComponent extends Component {
    state={
        id:'', 
        birthday: '', 
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        isVerified: '',
        wantToEdit:false,
        isAdding:false,
        error:'',
        addressOfTheUser:[],
        defaultAddress:'',
        region:'',
        province:'',
        city:'',
        barangay:'',
        postalCode:'',
        detailedAddress:'',
        isUpdate:false,
        idToUpdate:'',
    }

    componentDidMount(){
        this.refresh();
        this.addressRefresh();
    }

    //fetching address of the user
    addressRefresh=()=>{
        let userid = sessionStorage.getItem('id');
        let token = sessionStorage.getItem('authenticationToken');
        LoginService.executeGetUserAddressInformation(userid, token)
        .then(
            response=>{
                this.setState({
                    addressOfTheUser: response.data,
                })
            }
        ).catch(
            error =>{
                this.setState({error:error});
                console.log(error);
            }
        );
    }

    
    // fetching user information
    refresh =()=>{
        let userid = sessionStorage.getItem('id');
        let token = sessionStorage.getItem('authenticationToken');
        LoginService.executeGetUserInformation(userid, token)
        .then(
            response =>{
                console.log(response.data);
                this.setState({
                    id: response.data.id,
                    address: response.data.address, 
                    birthday: response.data.birthday, 
                    email: response.data.email,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    gender: response.data.gender,
                    phoneNumber: response.data.phoneNumber,
                    isVerified: response.data.isVerified,
                    })
            }
        ).catch(
            error =>{
                this.setState({error:error});
            }
        );
    }
    // for enabling the edit or save button in profilecard component
    editClicked=()=>{
        if(this.state.wantToEdit === false){
            this.setState({wantToEdit:true})
        }
        else{
            this.setState({wantToEdit:false})
        }
        
    }

    // addAddressClicked=()=>{
    //     if(this.state.isAdding === false){
    //         this.setState({isAdding:true})
    //         this.setState({isUpdate:false})
    //         this.setState({isUpdateOrAdd: false})
    //     }
    //     else{
    //         this.setState({isAdding:false})
    //         this.setState({isUpdate:true})
    //         this.setState({isUpdateOrAdd: true})
    //     }
        
    // }

    deleteClicked=(addressId, token)=>{
        LoginService.executeDeleteAddressInformation(addressId, token)
        .then(
            response=>{
            console.log(response.data);
            this.addressRefresh();
        }).catch(
            error=>{
                console.log(error);
            }
        )
    }
    saveClicked=()=>{
            this.setState({isUpdate:false});
            this.addressRefresh();
    }

    updateClicked=(addressInfo)=>{
        if(!this.state.isUpdate){
            this.setState({isUpdate:true});
            this.setState({idToUpdate: addressInfo})
        }
        else{
            this.setState({isUpdate:false});
        }
    }

    cleanTheInputs=()=>{
        this.setState({
        region:'',
        province:'',
        city:'',
        barangay:'',
        postalCode:'',
        detailedAddress:'',
        })
    }
    
    

    render() {
        return (
            <div className="container"  style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"2%"}}>
                    <ToastContainer />
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">

                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">My Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">My Purchase</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">GCASH</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fourth">Address</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="fifth">Add Address</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="sixth">New password</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            {/* profile */}
                            <Tab.Pane eventKey="first">
                            
                                <ProfileCardComponent 
                                id={this.state.id} 
                                birthday={this.state.birthday} 
                                email={this.state.email} 
                                firstName={this.state.firstName} 
                                lastName={this.state.lastName} 
                                gender={this.state.gender} 
                                phoneNumber={this.state.phoneNumber} 
                                isVerified={this.state.isVerified}
                                wantToEdit={this.state.wantToEdit}
                                editClicked={this.editClicked}/>

                            </Tab.Pane>
                            {/* purchased item */}
                            <Tab.Pane eventKey="second">

                                <PurchaseCardComponent/>

                            </Tab.Pane>
                            {/* payment method */}
                            <Tab.Pane eventKey="third">
                            
                                <GCashComponent/>

                            </Tab.Pane>
                            {/* change address */}
                            <Tab.Pane eventKey="fourth">
                            {(!this.state.isUpdate) &&

                                this.state.addressOfTheUser.map(
                                    addressInfo=>
                                
                                <AddAddressComponent
                                id = {addressInfo.id}
                                region = {addressInfo.region}
                                province = {addressInfo.province}
                                city = {addressInfo.city}
                                barangay = {addressInfo.barangay}
                                postalcode = {addressInfo.postalCode}
                                detailedaddress = {addressInfo.detailedAddress}
                                userid = {addressInfo.userId}
                                defaultAddress = {addressInfo.youWantItToBeDefault}
                                updateClicked ={()=>this.updateClicked(addressInfo.id)}
                                deleteClicked ={()=>this.deleteClicked(addressInfo.id, sessionStorage.getItem('authenticationToken'))}
                                />
                                )
                            }
                            {(this.state.isUpdate)&& <UpdateAddressComponent
                                            id={this.state.idToUpdate}
                                            saveClicked = {this.saveClicked}
                                        />}
                         
                            {(this.state.isUpdate) && <Button variant="outline-warning" onClick={this.updateClicked}>Cancel</Button>}
                            </Tab.Pane>
                            {/* change password */}
                            <Tab.Pane eventKey="fifth">
                                <AddNewAddressComponent
                                region={this.state.region}
                                province={this.state.province}
                                city={this.state.city}
                                barangay={this.state.barangay}
                                postalCode={this.state.postalCode}
                                detailedAddress={this.state.detailedAddress}
                                handlerChange={this.handlerChange}
                                AddnewAddressForTheUser={this.AddnewAddressForTheUser}
                                addressRefresh={this.addressRefresh}
                            />


                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <SetNewPasswordComponent/>

                            </Tab.Pane>

                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
    // for handling the text in inputs
    handlerChange=(event)=>{
        console.log(event.target.name);
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    // api for the adding a address
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
            const userId = sessionStorage.getItem('id');

            let addressInfo ={
                "barangay": this.state.barangay,
                "city": this.state.city,
                "detailedAddress": this.state.detailedAddress,
                "postalCode": this.state.postalCode,
                "province": this.state.province,
                "region": this.state.region,
                "userId": userId,
                "youWantItToBeDefault": true,
        }
        console.log(addressInfo);
        //input ka dito

        LoginService.executeAddAddressInformation(addressInfo)
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
                this.cleanTheInputs();
                this.addressRefresh();
            
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
}
