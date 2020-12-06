import React, { Component } from 'react'
import pork from '../image/pork.jpg';
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/esm/Card';
// import {
//     PContainer,
//     PWrapper,
//     PHeading,
//     PTitle,
//     PCard,
//     PImg,
//     PInfo,
//     PDesc,
//     PPrice,
//     PButton
//   } from './productstyled/ProductComponents';

export default class ProductDescriptionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }


  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }
  
   componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
   } 

    render() {
      const { windowWidth } = this.state; 
        return (
            <Container style={{'marginTop': "100px", 'marginBottom': "45px" }}>
             {windowWidth>=543 && <CardDeck>
                  <Card>
                    <Media>
                    <img
                          variant = "top"
                            width={210}
                            height={210}
                            className="mr-3"
                            src={pork}
                            alt="it's pork"
                          />
                    <Media.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Link as={Button} variant="danger">Buy now</Card.Link>
                    <Card.Link as={Button} variant="outline-dark">Add to cart</Card.Link>
                    </Media.Body>
                    </Media>
                  </Card>            
            </CardDeck> }   


            {windowWidth<=543 && <Card>
              <Card.Img variant="top" src={pork}/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
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
 /* <Card style={{'marginTop': "80px"}}>
                <Media style={{'marginTop': "30px", 'padding': "1%"}}>
                  <img
                    width={200}
                    height={200}
                    className="align-self-center mr-3"
                    src={pork}
                    alt="it's pork"
                  />
                  <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                      fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                      leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.
                    </p>
                  </Media.Body>
                </Media>
                </Card> */