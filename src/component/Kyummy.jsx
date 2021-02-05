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
import KoreanFameProduct from './KoreanFameProduct';
import ScrollToTop from './ScrollToTop';
import ProductByCategoryComponent from './ProductByCategoryComponent';
import SearchedPageComponent from './SearchedPageComponent';
import AlreadyLoggedIn from '../routing/AlreadyLoggedIn';


// guys dto nio makikita yung mga route, saka dto ko pinagsamasama ung mga component na ginawa ko
class Kyummy extends Component{
    render() {
        return (
            <>
                <Router>
                <ScrollToTop/>
                    
                    <HeaderComponent history={this.props.history}/>
                    <Switch>
                        {/* responsible for home */}
                        <Route path="/" exact component={HomeComponent}/>
                        {/* responsible for when the user is logged in */}
                        <AuthenticatedRoute path="/home/:email" component={HomeComponent}/>
                        <AlreadyLoggedIn path="/signup" component = {SignUpComponent}/>
                        <AlreadyLoggedIn path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/account" component={AccountComponent}/>
                        <Route path="/help" component={HelpCenterComponent}/>
                        <Route path="/moreproducts" exact component={MoreProductsComponent}/>
                        <Route path="/koreanfame" component={KoreanFameProduct}/> 
                        <Route path="/products/:categoryName" component={ProductByCategoryComponent}/>
                        <Route exact path="/details/:id" component={ProductDescriptionComponent}/>
                        <Route path="/search/:productName" component={SearchedPageComponent}/>
                        <Route path="/details/:id/:productid" exact component={ProductDescriptionComponent}/>
                        <Route component={ErrorOccur}/>
                        
                    </Switch>
                    <FooterComponent/>

                        
                    
                </Router>
            </>
        )
    }
}

export default Kyummy
