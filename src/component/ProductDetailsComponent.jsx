import React, { Component } from 'react'
import WelcomePageService from '../springboot api/WelcomePageService';
// import pork from '../image/pork.jpg';
import Spinner from 'react-bootstrap/Spinner'
import {
  PContainer,
  PWrapper,
  PHeading,
  PTitle,
  PCard,
  PImg,
  PInfo,
  // PDesc,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import { Link, withRouter } from 'react-router-dom'

class ProductDetailsComponent extends Component{
    state={
      product: [],
      isLoading:true,
      isErrorOccur:false,
      error:'',
    };


    showMoreClicked=()=>{
      this.props.history.push('/moreproducts');
    }
    productImageClicked=(id)=>{
      console.log(id)
      this.props.history.push(`/details/${id}`)
    }

    componentDidMount(){
      this.refresh();
    }

    refresh =() =>{
      WelcomePageService.executeGetAllAlcoholDrinksService()
      .then(
        response => {
          this.setState({product: response.data.content, isLoading:false}) //taena nagulo buhay ko dito sa error na to
        }
      ).catch(error=> this.handelError(error))
    }

    handelError=(response)=>{
      console.log(response)
      this.setState({isLoading:false, isErrorOccur:true, error:"Network Error/ Can't load the data"})
    }


    render() {
        return (
            <PContainer>
            {!this.state.isErrorOccur && <PHeading>More Products</PHeading>}
            <PWrapper>
            {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>}
            {this.state.isErrorOccur && <div>{this.state.error}</div>}
              {!this.state.isErrorOccur && 
              this.state.product.map(
                  products => 
                
                  <PCard key={products.id}>
                    <PImg src={products.img} 
                        alt={products.id} 
                          onClick={()=>this.productImageClicked(products.id)}/>
                    <PInfo>
                      <PTitle>{products.productName}</PTitle>
                      <PPrice>₱ {products.price}</PPrice>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
            {!this.state.isErrorOccur && <PInfo>
            <PButton onClick={this.showMoreClicked}>Show more</PButton>
            </PInfo>}
          </PContainer>
        )
    }
}
// as={Link} to="/moreproducts"
export default withRouter(ProductDetailsComponent)