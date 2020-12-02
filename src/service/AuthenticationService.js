class AuthenticationService{

    successfullyLogin(email){
        sessionStorage.setItem('authenticatedUser', email);
        // this.setUpAxiosInterceptors()
    }

    logOut(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null){return false}
        return true
    }

    // getUserLoggedIn() {
    //     let user = sessionStorage.getItem('authenticatedUser')
    //     if (user === null) return ''
    //     return user
    // }
    
    // setUpAxiosInterceptors(){
    //     let username = 'junie@gmail.com'
    //     let password = '123456'

    //     let basicAuthHeader = 'Basic ' + window.btoa(username+":"+password)
    //     axios.interceptors.request.use(
    //         (config) => {
    //             if(this.isUserLoggedIn){
    //             config.headers.authorization = basicAuthHeader
    //         }
    //         return config
    //         }
    //     )
    // }

}

export default new AuthenticationService()