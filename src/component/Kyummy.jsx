import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Component } from 'react';
import HeaderComponent from './HeaderComponent';
// import ControlledCarousel from './ControlledCarousel';
import FooterComponent from './FooterComponent';
// import CategoryComponent from './CategoryComponent';
// import ProductDetailsComponent from './ProductDetailsComponent';
import HomeComponent from './HomeComponent';
import LoginComponent from './LoginComponent';
import ErrorOccur from './ErrorOccur';
import SignUpComponent from './SignUpComponent';
import AccountComponent from './AccountComponent';
import HelpCenterComponent from './HelpCenterComponent';
import MoreProductsComponent from './MoreProductsComponent';
import AuthenticatedRoute from '../routing/AuthenticatedRoute';
import ProductDescriptionComponent from './ProductDescriptionComponent';


class Kyummy extends Component{
    render() {
        return (
            <>
                <Router>
                    
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={HomeComponent}/>
                        <AuthenticatedRoute path="/home/:email" component={HomeComponent}/>
                        <Route path="/signup" component = {SignUpComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/account" component={AccountComponent}/>
                        <Route path="/help" component={HelpCenterComponent}/>
                        <Route path="/moreproducts" component={MoreProductsComponent}/>
                        <Route path="/moreproducts/:categoryName" component={MoreProductsComponent}/>
                        <Route path="/details/:id" component={ProductDescriptionComponent}/>
                        <Route component={ErrorOccur}/>
                    </Switch>
                    <FooterComponent/>
                        
                    
                </Router>
            </>
        )
    }
}

export default Kyummy

/*
    old component attached, i comment it out coz i need to route component as one, so i put it in one component in HomeComponent
<ControlledCarousel/>
 <CategoryComponent/>
<ProductDetailsComponent/>
*/