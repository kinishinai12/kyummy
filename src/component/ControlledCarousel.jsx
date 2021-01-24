import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import WelcomePageService from '../springboot api/WelcomePageService';
import React, { Component } from "react";
import Badge from 'react-bootstrap/Badge'

import Spinner from 'react-bootstrap/Spinner'
// import product1 from '../image/product1.jpg';
// import product2 from '../image/product2.jpg';  /productImages/koreanfame/product1.jpg
// import product3 from '../image/product3.jpg';
// import product4 from '../image/product4.jpg';
// import product5 from '../image/product5.jpg';
// import product6 from '../image/product6.jpg';
// import product7 from '../image/product7.jpg';
import { withRouter } from 'react-router-dom';
// import mart from '../image/mart.jpg';
// import pork from '../image/pork.jpg';
// import sidedish from '../image/sidedish.jpg';
class ControlledCarousel extends Component{
  constructor(){
    super()
    this.state ={
      productImg:[],
      isLoading: true,
      error: '',
      isErrorOccur: false,
    }
  }
  render() {
    return (
      <div> 
          <this.BestSellerl/>
      </div>
    )
  }

  componentDidMount(){
    this.refresh();
  }

  refresh =() =>{
    WelcomePageService.executeGetKoreanFameServiceProducts()
    .then(
      response => {
        this.setState({productImg: response.data, isLoading: false})
      }
    ).catch(error => this.handleError(error));


  }
  
  handleError=(response)=>{
    console.log(response)
    this.setState({isLoading:false, error:"Network Error/ Can't load the data.. please try to refresh the browser", isErrorOccur: true})
  }

  koreanFameClicked=(id)=>{
    console.log(id)
    this.props.history.push(`/details/${id}`)
  }

  click=()=>{
    window.location.reload();
  }

  BestSellerl =()=> {
    return (
      <Container style={{'marginTop': "80px", 'marginBottom': "5px" }} >
           {this.state.isLoading && <Spinner style={{'marginTop': "20px", 'marginBottom': "5px" }} animation="grow" variant="danger"/>}
           {this.state.isErrorOccur&&<div style={{'marginTop': "100px", 'marginBottom': "5px" }}>{this.state.error}<Badge variant="primary" onClick={this.click}>here</Badge></div>}
          {!this.state.isErrorOccur && <Carousel interval={500}>
         
              
              {
              this.state.productImg.map(
                
                bestSeller =>

                <Carousel.Item style={{ 'height': "400px"}} key={bestSeller.id} onClick={()=>this.koreanFameClicked(bestSeller.id)}>
                <img className="d-block w-100" src={bestSeller.img} alt={bestSeller.id} style={{"height":'380px', "width":'380px'}}/>
              <Carousel.Caption>
              <h3><Badge variant="danger">Korean Fame</Badge></h3>
                <h6><Badge variant="light">{bestSeller.productName}</Badge></h6>
              </Carousel.Caption>
              </Carousel.Item>

              )
                
              
              }
              
            
           
          </Carousel>}

      </Container>
      
    );
            
  }
  
}


  export default withRouter(ControlledCarousel)