import React, { Component } from 'react'
import WelcomePageService from '../springboot api/WelcomePageService';
import {
  PContainer,
  PWrapper,
  PHeading,
  PTitle,
  PCard,
  PImg,
  PInfo,
//   PDesc,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import { Link, withRouter } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

class KoreanFameProduct extends Component{
    state={
      product: [],
      isLoading:true,
  }

  componentDidMount(){
    this.refresh();
  }

  refresh =() =>{
    WelcomePageService.executeGetKoreanFameServiceProducts()
    .then(
      response => {
        this.setState({product:response.data, isLoading:false})
      }
    )
  }

    productImageClicked=(id, productId)=>{
      console.log(productId);
      this.props.history.push(`/details/${id}/${productId}`)
    }

    render() {
        return (
            <PContainer>
            <PHeading>Korean Fame</PHeading>
            <PWrapper>
            {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>} 
              {
              this.state.product.map(
                  products => 
                
                  <PCard key={products.id}>
                    
                    <PImg src={products.img} 
                        alt={products.id} 
                          onClick={()=>this.productImageClicked("-1",products.id)}/>
                    <PInfo>
                      <PTitle>{products.productName}</PTitle>
                      <PPrice>₱ {products.price}</PPrice>
                      <PButton>Add to cart</PButton>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
            <PInfo>
            <PButton><Link to="/moreproducts">More Products</Link></PButton>
            </PInfo>
          </PContainer>
        )
    }
}
// as={Link} to="/moreproducts"
export default withRouter(KoreanFameProduct)