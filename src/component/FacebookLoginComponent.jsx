import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

class FacebookLoginComponent extends Component {
    state = {
       
            isLoggedIn:false, 
            userId:'',
            name:'', 
            email:'',
            picture:''

    }

componentClicked =()=> console.log("ouch! you clicked me")


responseFacebook = (response) =>{
    console.log(response);
}
    render() {
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent=null;
        }
        else{
            fbContent= (<FacebookLogin
                appId="3634722819955522"
                autoLoad={true}
                fields="name,email,picture"
                icon="fa-facebook"
                onClick={this.componentClicked}
                callback={()=>this.responseFacebook} />);
        }
        return (
            <div>
               {fbContent} 
            </div>
        )
    }
}
    
    
export default FacebookLoginComponent
