import { Component } from 'react';
import {withRouter, Link } from 'react-router-dom'
import '../componentCSS/component.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import favicon from '../image/favicon.png'
import SearchComponent from './SearchComponent';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosHelpCircle } from 'react-icons/io';
import ProfileNavbarComponent from './ProfileNavbarComponent';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import CartModalComponent from './CartModalComponent';
import AuthenticationService from '../service/AuthenticationService';
import LoginService from '../springboot api/LoginService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




class HeaderComponent extends Component{
    state={
        show:false,
        isActive:false,
        message:'',
        product:[],
        productorder:[{}],

    }

    buttonClicked=()=>{
        this.setState({isActive:true})
    }

    handleClose = () =>{
        this.setState({show:false});
    }
    handleShow = () =>{
        this.setState({show:true})
        LoginService.executeGetCart(sessionStorage.getItem('id'),sessionStorage.getItem('authenticationToken'))
        .then(response=>{
            this.setState({
                product:response.data,

            })
            console.log(this.state.productorder)
        })
        .catch(error=>{
            console.log(error)
        });
    } 

    logout=()=>{
        LoginService.executeLogoutAndDeleteRefreshToken(sessionStorage.getItem('refreshToken'))
        .then(
            response=>{
                this.setState({message:response.data});
                AuthenticationService.logOut();
                this.props.history.push('/login');
            }
        )
        
    }
    deleteCartItem=(cartId)=>{

        LoginService.executeDeleteCart(cartId,sessionStorage.getItem('authenticationToken'))
        .then(
            response=>{
                this.handleShow();
                
        })
        .catch(error=>{
            console.log(error);
        })
    }

    summaryPrice=(price, quantity)=>{
        let totalPrice = 0;
        return totalPrice += price * quantity;
    }

    reserveList=(totalPrice)=>{
        LoginService.executeGetCart(sessionStorage.getItem('id'),sessionStorage.getItem('authenticationToken'))
        .then(response=>{
            this.setState({product:response.data,})
                
                 
            console.log(this.state.productorder);
            let orderToBePending={
                "address": null,
                "email": sessionStorage.getItem('username'),
                "product":  this.state.product,
                "totalPrice": totalPrice,
                "userId": sessionStorage.getItem('id')
            }
            //umpisa dito
            LoginService.executePending(orderToBePending)
            .then(
                response=>{
                    this.deleteAllCart();
                    alert(response.data+" please wait for someone to call for the confirmation");
                })
                .catch(
                    error=>{
                        console.log(error)
                    })
        })
        .catch(error=>{
            console.log(error)
        });

        
    }

    render(){
      
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        let totalPrice= this.state.product.reduce(((a,c)=> a+c.price*c.quantity), 0)
        return (
            <header>
                <ToastContainer />
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="peach-nav">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={Link} to="/"><img src={favicon} alt="logo"/></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <SearchComponent/>
                    <Nav className="mr-auto">
                    {isUserLoggedIn && <Nav.Link onClick={this.handleShow} style={{'color': "#000000"}}><FaShoppingCart/></Nav.Link>}
                    <Nav.Link as={Link} to="/help" style={{'color': "#000000"}}><IoIosHelpCircle/>Help</Nav.Link>
                    </Nav>
                    <Nav>
                    {!isUserLoggedIn && <Nav.Link as={Link} to="/signup"><Button variant="outline-success" >Sign Up</Button></Nav.Link>}
                    {!isUserLoggedIn &&<Nav.Link as={Link} to="/login"><Button variant="outline-primary" >Login</Button></Nav.Link>}
                    
                    {isUserLoggedIn &&<DropdownButton
                            menuAlign={{ lg: 'right' }}
                            title={<ProfileNavbarComponent/>}
                            variant="light"
                            >
                                <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/account">My Purchase</NavDropdown.Item>
                                <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
                    </DropdownButton>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        <Modal show={this.state.show} onHide={this.handleClose} scrollable>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {
                  this.state.product.map(
                      cart=>
                  
                <CartModalComponent key={cart.id}
                    category={cart.category}
                    color={cart.color}
                    flavor={cart.flavor}
                    id={cart.id}
                    img={cart.img}
                    price={cart.price}
                    productName={cart.productName}
                    quantity={cart.quantity}
                    userId={cart.userId}
                    deleteCartItem={()=>this.deleteCartItem(cart.id)
                    }
                />
                  )
              }
          </Modal.Body>

          <Modal.Footer>
          <Modal.Body>
 
            <Modal.Title>
                ₱ {totalPrice}
            </Modal.Title>

          </Modal.Body>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>

            <Button variant="dark" onClick={()=>this.reserveList(totalPrice)}>
              Check Out
            </Button>
          </Modal.Footer>
        </Modal>
        </header>
        );

    }
    checkOut=()=>{
 
    }

    deleteAllCart=()=>{
        LoginService.executeDeleteAllCart(sessionStorage.getItem('id'),sessionStorage.getItem('authenticationToken'))
        .then(response=>{
            console.log(response.data);
            this.handleShow();
        })
        .catch(error=>{
            console.log(error);
        })

    }
    



}

export default withRouter(HeaderComponent)