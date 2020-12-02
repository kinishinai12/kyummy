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



class HeaderComponent extends Component{
    state={
        show:false,
        isActive:false
    }

    buttonClicked=()=>{
        this.setState({isActive:true})
    }

    handleClose = () =>{
        this.setState({show:false});
    }
    handleShow = () =>{
        this.setState({show:true})
    } 

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light" className="peach-nav">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={Link} to="/"><img src={favicon} alt="logo"/></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                <SearchComponent/>
                    <Nav className="mr-auto">
                    <Nav.Link onClick={this.handleShow} style={{'color': "#000000"}}><FaShoppingCart/></Nav.Link>
                    <Nav.Link as={Link} to="/help" style={{'color': "#000000"}}><IoIosHelpCircle/>Help</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">lorem</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">lorem</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">lorem</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">lorem</NavDropdown.Item>
                    </NavDropdown> */}
                    </Nav>
                    <Nav>
                    {!isUserLoggedIn && <Nav.Link as={Link} to="/signup"><Button variant="outline-success" >Sign Up</Button></Nav.Link>}
                    {!isUserLoggedIn &&<Nav.Link as={Link} to="/login"><Button variant="outline-primary" >Login</Button></Nav.Link>}
                    
                    {isUserLoggedIn &&<DropdownButton
                            menuAlign={{ lg: 'right' }}
                            title={<ProfileNavbarComponent/>}
                            variant="dark"
                            >
                                <NavDropdown.Item as={Link} to="/account">My Account</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/account">My Purchase</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/login" onClick={AuthenticationService.logOut}>Logout</NavDropdown.Item>
                    </DropdownButton>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        <Modal show={this.state.show} onHide={this.handleClose} scrollable>
          <Modal.Header closeButton>
            <Modal.Title>Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <CartModalComponent/>
                <CartModalComponent/>
                <CartModalComponent/>
                <CartModalComponent/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.handleClose}>
              go to cart
            </Button>
          </Modal.Footer>
        </Modal>
        </header>
        );

    }
}



            //     <nav className="navbar navbar-expand-md peach-nav">
            // <ul className="nav justify-content-center">
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            //     <li claclassNamess="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">lorem</a>
            //     </li>
            // </ul>
            // </nav>

export default withRouter(HeaderComponent)