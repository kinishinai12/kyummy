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
    };
  }
  // this fucntion is for when the button "buy now " is click by the user
  buyNowClicked=()=>{
    console.log("clicked");
    if(this.state.show === true){
      this.setState({show:false});
    }
    else{
      this.setState({show:true});
    }
  }

  AddToCartClicked=()=>{
    console.log("add to cart clicked");
    if(this.state.showAddToCart === true){
      this.setState({showAddToCart: false});
    }
    else{
      this.setState({showAddToCart: true});
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
        this.setState({img: response.data.img, productName: response.data.productName, productDescription: response.data.productDescription})
      })
  }else{
    console.log("it is not koreanfame")
    WelcomePageService.executeGetProductById(this.props.match.params.id)
    .then(
      response => {
        this.setState({img: response.data.img, productName: response.data.productName, productDescription: response.data.productDescription})
        
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

//   shouldComponentUpdate(nextProps,nextState){
//     if(this.props.match.params.id !== nextState.id){
//     console.log(nextState)
//     console.log(nextProps)
//       console.log("shouldComponentUpdate")
//       this.refresh();
//       return true
//     }
//     return false
// }
 
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

    return (
          // when the screen is wide
      <Container style={{'marginTop': "100px", 'marginBottom': "45px" }} >
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
                style={{ width: '18rem' }}
              />
                           <Card.Img
                          variant = "top"
                          className="mr-3"
                          src={this.state.img}
                          alt ="network error"
                          style={{ width: '18rem' }}
                           />
                           <Card.Img
                          variant = "top"
                          className="mr-3"
                          src={this.state.img}
                          alt ="network error"
                          style={{ width: '18rem' }}
                           />
                           
                        </Carousel>
                        
                        
                    
                      <Card.Body>
                      <Card.Title>{this.state.productName}</Card.Title>
                      <Card.Title as="div">
                      <Card.Text>
                        {this.state.productDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta, mollitia modi excepturi accusantium ipsum dolores est blanditiis harum libero rerum repellat obcaecati dolore incidunt nobis distinctio laborum, labore sunt!
                      </Card.Text>
                      <Card.Title>
                      <Card.Link as={Button} variant="danger" onClick={this.buyNowClicked}>Buy now</Card.Link>
                      </Card.Title>
                      </Card.Title>
                        <Card.Link as={Button} variant="outline-dark" onClick={this.AddToCartClicked}>Add to cart</Card.Link>
                      </Card.Body>
                    
                   
                  </Card>            
            }   


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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link><Button variant="danger" onClick={this.buyNowClicked}>Buy now</Button></Card.Link>
                  </Card.Body>
                  <Card.Body>
                    
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
                            {this.state.productDescription}
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

                {/* this modal is for add to cart confirmation*/}
                <Modal show={this.state.showAddToCart} onHide={this.AddToCartClicked}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add to Cart hell yeah!</Modal.Title>
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
                            {this.state.productDescription}
                        </p>
                        </Media.Body>
                    </Media>
                 </ul>
                 </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.AddToCartClicked}>
                      Cancel
                    </Button>
                    <Button variant="danger">
                      Confirm
                    </Button>
                  </Modal.Footer>
                </Modal>

          </Container>
        )
    }
}

export default withRouter(ProductDescriptionComponent)