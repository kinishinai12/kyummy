import React, { Component } from 'react'
import pork from '../image/pork.jpg';
import {
  PContainer,
  PWrapper,
  PHeading,
  PTitle,
  PCard,
  PImg,
  PInfo,
  PDesc,
  PPrice,
  PButton
} from './productstyled/ProductComponents';
import { Link, withRouter } from 'react-router-dom'

class ProductDetailsComponent extends Component{
    state={
      product: [
          {
              id:1,
              img: pork,
              alt: 'korean Product',
              name: 'beef',
              desc:'putangina',
              price: 'PHP 200',
              button: 'Details'
            },
            {
              id:2,
              img: pork,
              alt: 'korean Product',
              name: 'beef',
              desc:'putangina',
              price: 'PHP 200',
              button: 'Details'
            },
            {
              id:3,
              img: pork,
              alt: 'korean Product',
              name: 'beef',
              desc:'putangina',
              price: 'PHP 200',
              button: 'Details'
            },
            {
              id: 4,
              img: pork,
              alt: 'korean Product',
              name: 'beef',
              desc:'putangina',
              price: 'PHP 200',
              button: 'Details'
            },
            {
              id: 5,
              img: pork,
              alt: 'korean Product',
              name: 'beef',
              desc:'putangina',
              price: 'PHP 200',
              button: 'Details'
            }
      ]
  }

    productImageClicked=(id)=>{
      console.log(id)
      this.props.history.push(`/details/${id}`)
    }

    render() {
        return (
            <PContainer>
            <PHeading>Products From korea</PHeading>
            <PWrapper>
              {
              this.state.product.map(
                  products => 
                
                  <PCard key={products.id}>
                    <PImg src={products.img} alt={products.alt}/>
                    <PInfo>
                      <PTitle>{products.name}</PTitle>
                      <PDesc>{products.desc}</PDesc>
                      <PPrice>{products.price}</PPrice>
                      <PButton onClick={()=>this.productImageClicked(products.id)}>{products.button}</PButton>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
            <PInfo>
            <PButton as={Link} to="/moreproducts" >Show more</PButton>
            </PInfo>
          </PContainer>
        )
    }
}
// as={Link} to="/moreproducts"
export default withRouter(ProductDetailsComponent)