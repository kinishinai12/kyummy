import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import React, { Component } from "react";
import Badge from 'react-bootstrap/Badge'
import product1 from '../image/product1.jpg';
import product2 from '../image/product2.jpg';
import product3 from '../image/product3.jpg';
import product4 from '../image/product4.jpg';
import product5 from '../image/product5.jpg';
import product6 from '../image/product6.jpg';
import product7 from '../image/product7.jpg';
import { withRouter } from 'react-router-dom';
// import mart from '../image/mart.jpg';
// import pork from '../image/pork.jpg';
// import sidedish from '../image/sidedish.jpg';

class ControlledCarousel extends Component{
  constructor(){
    super()
    this.state ={
      productImg:[
        {id:1, img:product1, alt:'kimchi', label:'Korean Fame', desc:'Kimchi'},
        {id:2, img:product2, alt:'Daerimson sausage on stick', label:'Korean Fame', desc:'Daerimson sausage'},
        {id:3, img:product3, alt:'greek yogurt', label:'Korean Fame', desc:'Greek yogurt'},
        {id:4, img:product4, alt:'white rabbit milk', label:'Korean Fame', desc:'White rabbit milk'},
        {id:5, img:product5, alt:'melona', label:'Korean Fame', desc:'Melona'},
        {id:6, img:product6, alt:'Bibigo seaweed snacks', label:'Korean Fame', desc:'Bibigo seaweed snacks'},
        {id:7, img:product7, alt:'wako wako ice cream', label:'Korean Fame', desc:'Wako wako ice cream'}
      ]
    }
  }
  render() {
    return (
      <this.BestSellerl/>
    )
  }

  koreanFameClicked=(id)=>{
    console.log(id)
    this.props.history.push(`/details/${id}`)
  }

  BestSellerl =()=> {
    return (
      <Container style={{'marginTop': "100px", 'marginBottom': "5px" }}>

          <Carousel interval={500}>
            
              
              { 
              this.state.productImg.map(
                
                bestSeller =>
                <Carousel.Item style={{ 'height': "400px"}} key={bestSeller.id} onClick={()=>this.koreanFameClicked(bestSeller.id)}>
                <img className="d-block w-100" src={bestSeller.img} alt={bestSeller.alt} style={{"height":'380px', "width":'380px'}}/>
              <Carousel.Caption>
              <h3><Badge variant="danger">{bestSeller.label}</Badge></h3>
                <h6><Badge variant="light">{bestSeller.desc}</Badge></h6>
              </Carousel.Caption>
              </Carousel.Item>

              )
                
              
              }
              
            
           
          </Carousel>

      </Container>
      
    );
            
  }
  
}

// function BestSellerl() {

//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Container style={{'margin-top': "80px", 'margin-bottom': "5px"}}>

//           <Carousel activeIndex={index} onSelect={handleSelect}>
            
              
//               { 
//               this.state.productImg.map(
                
//                 bestSeller =>
//                 <Carousel.Item style={{ 'height': "400px"}}>
//                 <img className="d-block w-100" src={bestSeller.img} alt={bestSeller.alt}/>
//               <Carousel.Caption>
//                 <h3>First slide label</h3>
//                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//               </Carousel.Caption>
//               </Carousel.Item>

//               )
                
              
//               }
              
            
           
//           </Carousel>

//       </Container>
      
//     );
            
//   }
  



  export default withRouter(ControlledCarousel)