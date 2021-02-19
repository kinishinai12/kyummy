import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/esm/Card';
import WelcomePageService from '../springboot api/WelcomePageService';
import { withRouter } from 'react-router-dom';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import AuthenticationService from '../service/AuthenticationService';
import LoginService from '../springboot api/LoginService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ProductDescriptionComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      windowWidth: window.innerWidth,
      img:"",
      productName:'',
      productDescription:'',
      show:false,
      showAddToCart:false,
      productPrice:'',
      productQuantity:0,
      quantity:0,
      category:'',
      exist:false,
    };
  }
  // this fucntion is for when the button "buy now " is click by the user
  buyNowClicked=()=>{
    console.log("clicked");
    const user = AuthenticationService.isUserLoggedIn();
    if(user === true){
      if(this.state.show === true){
      this.setState({show:false});
    }
    else{
      this.setState({show:true});
    }
    }
    else{
      this.props.history.push('/login');
    }
  }
  notify=(ok)=>{
    toast.success('🤔 '+ ok, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        
        });
}
  AddToCartClicked=(quantity)=>{
  this.setState({quantity: quantity + 1})
  const user = AuthenticationService.isUserLoggedIn();
    if(user === true){
      LoginService.executeExistingCartItem(sessionStorage.getItem('id'),this.state.productName,sessionStorage.getItem('authenticationToken'))
      .then(
        response=>{

          let exist = response.data;
          if(exist === false){
            console.log(exist)
            let product ={
              productName: this.state.productName,
              userId: sessionStorage.getItem('id'),
              price: this.state.productPrice,
              quantity: quantity + 1,
              img: this.state.img,
              category: this.state.category,
              color:null,
              flavor:null
            }
          LoginService.executeAddToCart(product)
          .then(response=>{
            this.notify(response.data);
          })
          .catch(error=>{console.log(error);})
        }
        else{
          let updatedProduct ={
            productName: this.state.productName,
            userId: sessionStorage.getItem('id'),
            price: this.state.productPrice,
            quantity: quantity + 1,
            img: this.state.img,
            category: this.state.category,
            color:null,
            flavor:null
          }
          // dito para sa updated
          LoginService.executeUpdateQuantity(sessionStorage.getItem('id'), this.state.productName, updatedProduct)
          .then(response=>{
            this.notify(response.data);
          }).catch(error=>{console.log(error)})
        }
        }
      ).catch(error=>{
        console.log(error)
      })

      // baka hanapin mo andito lang
      
  }
    else{
      this.props.history.push('/login');
    }
    }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  
  componentDidMount() {
    this._isMounted = true;
    this.refresh();
    window.addEventListener("resize", this.handleResize); 
   }

   // TODO: catch statement
  refresh=()=>{
    if(this.props.match.params.id === "-1"){
      console.log("tumama ka den")
      console.log(this.props.match.params.id)
      console.log(this.props.match.params.productid);
      WelcomePageService.executeServiceGetKoreanFameProductById(this.props.match.params.productid)
      .then(response => {
        console.log(response.data.img)
        this.setState({
          img: response.data.img,
          productName: response.data.productName,
          productDescription: response.data.productDescription,
          productPrice: response.data.price,
          category: response.data.category,
        })
        console.log(response.data);
      })
  }else{
    WelcomePageService.executeGetProductById(this.props.match.params.id)
    .then(
      response => {
        this.setState({
          img: response.data.img, 
          productName: response.data.productName, 
          productDescription: response.data.productDescription,
          productPrice: response.data.price,
          productQuantity: response.data.quantity,
          category: response.data.category
        })
        
      }
    )
  }
   }

  componentWillUnmount() {
     console.log("componentWillUnmount")
     if(this._isMounted === true){
      this._isMounted = false;
      window.addEventListener("resize", this.handleResize);
     }
   }
 
   //TODO: Catch statement
  componentDidUpdate(prevProps, prevState) {
    if(this._isMounted === true){
      if (prevProps.match.params.id !== this.props.match.params.id) {
        console.log(prevProps)
        console.log(prevState)
        console.log("componentDidUpdate")
        this.refresh();
      }
      else{
        
        console.log("componentDidUpdate but no changes occur")
      }
    }
    else{
    console.log("memory leaked")
    }
  }

  render() {
      // for responsive ui
    const { windowWidth } = this.state; 
    console.log(windowWidth);
    let quantity = this.state.quantity
    return (
          // when the screen is wide
      <Container style={{'marginTop': "100px", 'marginBottom': "45px" }} >
        <ToastContainer />
        {windowWidth>=999 &&
        <Card style={{display: 'flex', flexDirection: 'row'}}>
        <Carousel 
          plugins={[
          'infinite',
          'fastSwipe',
             {
              resolve: slidesToShowPlugin,
               options: {
               numberOfSlides: 1
              }
              },
              ]}>
                        
              <Card.Img
                variant = "top"
                className="mr-3"
                src={this.state.img}
                 alt ="network error"
                style={{ width: '25rem'}}
              />
                           <Card.Img
                          variant = "top"
                          className="mr-3"
                          src={this.state.img}
                          alt ="network error"
                          style={{ width: '25rem' }}
                           />

                           <Card.Img
                          variant = "top"
                          className="mr-3"
                          src={this.state.img}
                          alt ="network error"
                          style={{ width: '25rem' }}
                           />
                           
                        </Carousel>
                        
                        
                    
                      <Card.Body>
                      <Card.Title>{this.state.productName}</Card.Title>
                      {/* first title */}
                      <Card.Title as="div">
                      <Card.Text as="h3">
                        ₱ {this.state.productPrice}
                      </Card.Text>
                      <Card.Text>
                        Shipping: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      </Card.Text>
                      <Card.Text>
                        Color: selection 
                      </Card.Text>
                      <Card.Text>
                        Quantity: {this.state.quantity}
                      </Card.Text>

                      <Card.Title>
                      <Card.Link as={Button} variant="danger" onClick={this.buyNowClicked}>Buy now</Card.Link>
                      <Card.Link as={Button} variant="outline-dark" onClick={()=>this.AddToCartClicked(quantity)}>Add to cart</Card.Link>
                      </Card.Title>
                      {/* last title */}
                      </Card.Title>
                        
                      </Card.Body>
                    
                   
                  </Card>            
            }   

                {/* when the screen is for mobile */}
                {windowWidth<=998 && <Card>
                  <Carousel
                  plugins={[
                    'infinite',
                    'fastSwipe',
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                       numberOfSlides: 1
                      }
                    },
                  ]}>
                    <Card.Img variant="top" src={this.state.img}/>
                    <Card.Img variant="top" src={this.state.img}/>
                    <Card.Img variant="top" src={this.state.img}/>
                    </Carousel>
                  <Card.Body>
                    <Card.Title>{this.state.productName}</Card.Title>
                    <Card.Title as="h3"> ₱{this.state.productPrice}</Card.Title>
                    <Card.Text >
                      Shipping: Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </Card.Text>
                    <Card.Text>
                        Color: selection
                      </Card.Text>
                    <Card.Text>
                        Quantity: {this.state.quantity}
                      </Card.Text>
                    <Card.Link><Button variant="danger" onClick={this.buyNowClicked}>Buy now</Button></Card.Link>
                    <Card.Link><Button variant="outline-dark" onClick={this.AddToCartClicked}>Add to cart</Button></Card.Link>
                  </Card.Body>
                    
                </Card>}

                  {/* this modal is for buying an item */}
                <Modal show={this.state.show} onHide={this.buyNowClicked}>
                  <Modal.Header closeButton>
                    <Modal.Title>Do you want to continue to buy this item?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <ul className="list-unstyled">
                    <Media as="li">
                        <img
                        width={54}
                        height={54}
                        className="mr-3"
                        src={this.state.img}
                        alt="Network Error"
                        />
                        <Media.Body>
                        <h5>{this.state.productName}</h5>
                        <p>
                          ₱ {this.state.productPrice}
                        </p>
                        </Media.Body>
                    </Media>
                 </ul>
                 </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.buyNowClicked}>
                      Cancel
                    </Button>
                    <Button variant="danger">
                      Buy
                    </Button>
                  </Modal.Footer>
                </Modal>

            <Jumbotron fluid style={{'marginBottom': "45px", 'marginTop': "45px"}}>
              <Container>
                <h5>Product Description</h5>
                 <p>
                  {this.state.productDescription}
                  </p>
                </Container>
            </Jumbotron>
              


          </Container>
        )
    }
}

export default withRouter(ProductDescriptionComponent)