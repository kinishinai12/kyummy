import React, { Component } from 'react'
// import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/esm/Card';
import WelcomePageService from '../springboot api/WelcomePageService';
import { withRouter } from 'react-router-dom'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// import pork from '../image/pork.jpg';
import {
//     // PContainer,
//     // PWrapper,
//     // PHeading,
//     // PTitle,
//     // PCard,
//     PImg
//     // PInfo,
//     // PDesc,
         //PPrice,
//     // PButton
 } from './productstyled/ProductComponents';


class ProductDescriptionComponent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      windowWidth: window.innerWidth,
      img:"",
      productName:'',
      productDescription:''
    };
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
    console.log("bakit ka dumederetso dito")
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
      const { windowWidth } = this.state; 
      console.log(windowWidth);
        return (
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
                           
                        </Carousel>
                        
                        
                    
                      <Card.Body>
                      <Card.Title>{this.state.productName}</Card.Title>
                      <Card.Title as="h6">
                      <Card.Text>
                        {this.state.productDescription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta, mollitia modi excepturi accusantium ipsum dolores est blanditiis harum libero rerum repellat obcaecati dolore incidunt nobis distinctio laborum, labore sunt!
                      </Card.Text>
                      <Card.Link as={Button} variant="danger">Buy now</Card.Link>
                      
                      </Card.Title>
                      <Card.Link as={Button} variant="outline-dark">Add to cart</Card.Link>
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
                  ]}><Card.Img variant="top" src={this.state.img}/></Carousel>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text >
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link><Button variant="danger">Buy now</Button></Card.Link>
                  </Card.Body>
                  <Card.Body>
                    
                    <Card.Link><Button variant="outline-dark">Add to cart</Button></Card.Link>
                  </Card.Body>
                </Card>}

          </Container>
        )
    }
}

export default withRouter(ProductDescriptionComponent)