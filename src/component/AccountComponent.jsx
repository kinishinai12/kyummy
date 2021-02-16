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
        defaultAddress:''
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

    addAddressClicked=()=>{
        if(this.state.isAdding === false){
            this.setState({isAdding:true})
        }
        else{
            this.setState({isAdding:false})
        }
        
    }
    

    render() {
        return (
            <div className="container"  style={{'marginTop': "80px", 'marginBottom': "5px", 'padding':"2%"}}>

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
                            <Nav.Link eventKey="fifth">New password</Nav.Link>
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
                            {!this.state.isAdding &&

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
                                />
                                )
                            }
                            {this.state.isAdding && <AddNewAddressComponent/>}<br/>
                            {!this.state.addressOfTheUser.length>=3 || this.state.addressOfTheUser.length===0 && !this.state.isAdding &&<Button variant="outline-dark" onClick={this.addAddressClicked}>Add</Button>}
                            {this.state.isAdding && <Button variant="outline-warning" onClick={this.addAddressClicked}>Cancel</Button>}
                            </Tab.Pane>
                            {/* change password */}
                            <Tab.Pane eventKey="fifth">
                            
                                <SetNewPasswordComponent/>

                            </Tab.Pane>

                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        )
    }
}
