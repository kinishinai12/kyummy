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
                      <PButton>Add to cart</PButton>
                    </PInfo>
                  </PCard>
                )
              }
            </PWrapper>
            {!this.state.isErrorOccur && <PInfo>
            <PButton><Link to="/moreproducts">Show more</Link></PButton>
            </PInfo>}
          </PContainer>
        )
    }
}
// as={Link} to="/moreproducts"
export default withRouter(ProductDetailsComponent)



// {
          //     id:1,
          //     img: '../productImages/alcohol drink/jinsoul soju/IMG_20201229_164931.jpg',
          //     alt: 'korean Product',
          //     name: 'beef',
          //     desc:'Beef daw pero pork yung image',
          //     price: 'PHP 200',
          //     button: 'Details'
          //   },
          //   {
          //     id:2,
          //     img: pork,
          //     alt: 'korean Product',
          //     name: 'beef',
          //     desc:'Beef daw pero pork yung image',
          //     price: 'PHP 200',
          //     button: 'Details'
          //   },
          //   {
          //     id:3,
          //     img: pork,
          //     alt: 'korean Product',
          //     name: 'beef',
          //     desc:'Beef daw pero pork yung image',
          //     price: 'PHP 200',
          //     button: 'Details'
          //   }