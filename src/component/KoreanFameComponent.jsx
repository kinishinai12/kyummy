import React, { Component } from 'react'
import WelcomePageService from '../springboot api/WelcomePageService';
import Spinner from 'react-bootstrap/Spinner'
// import Badge from 'react-bootstrap/Badge'
// import pork from '../image/pork.jpg';
// import IMG_20201229_164947 from '../image/products/alcohol drink/jinsoul soju/IMG_20201229_164947.jpg'
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

class KoreanFameComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      product: [],
      isLoading: true,
      error:'',
      isErrorOccur: false,
  }
  }
    



  componentDidMount(){
    this.refresh();
  }

  refresh =() =>{
    WelcomePageService.executeGetAllKoreanFameSerivice()
    .then(
      response => {
        this.setState({product: response.data.content, isLoading: false}) //taena nagulo buhay ko dito sa error na to
      }
    ).catch(error =>this.handleError(error))
  }

  handleError=(response)=>{
    console.log(response);
    this.setState({isLoading: false, isErrorOccur:true, error:"Network Error/Can't load the data.."})
  }

  productImageClicked=(id,productId)=>{
    console.log(productId)
    this.props.history.push(`/details/${id}/${productId}`)
  }
    // click=()=>{
    //   window.location.reload();
    // }
    render() {
        return (
            <PContainer>
              
            {!this.state.isErrorOccur && <PHeading>Korean Fame</PHeading>}
            <PWrapper>
            {this.state.isLoading&&<Spinner animation="grow" variant="danger"/>}
            {this.state.isErrorOccur && <div>{this.state.error}</div>}
              {!this.state.isErrorOccur &&
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
            {!this.state.isErrorOccur && <PInfo>
            <PButton><Link to="/koreanfame">Show more</Link></PButton>
            </PInfo>}
          </PContainer>
        )
    }
}
// as={Link} to="/moreproducts"
export default withRouter(KoreanFameComponent)

// C:\Users\junie\Desktop\final project\kyummy\public\productImages/hotpot/soup base seafood\IMG_20201229_171515.jpg