import axios from "axios";
import LoginService from "../springboot api/LoginService";

class AuthenticationService{

    successfullyLogin(authenticationToken,expiresAt,refreshToken,username,id){

        sessionStorage.setItem('authenticationToken', authenticationToken);
        sessionStorage.setItem('expiresAt', expiresAt);
        sessionStorage.setItem('refreshToken', refreshToken);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('id', id);
        // this.setUpAxiosRequestInterceptors(this.getUserLoggedIn());
        this.setUpAxiosInterceptors();
    }

    logOut(){
        sessionStorage.removeItem('authenticationToken');
        sessionStorage.removeItem('expiresAt');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('id');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticationToken')
        if (user === null){return false}
        return true
    }

    getUserLoggedIn() {
        let user = sessionStorage.getItem('authenticationToken');

        if (this.isUserLoggedIn) return user
        else return null
    }

    bearerToken(token){
        return `Bearer ${token}`;
    }
    
    // setUpAxiosRequestInterceptors(token){
    //     authAxios.interceptors.request.use(
    //         (config)=>{
    //             if(this.isUserLoggedIn){
    //                 config.headers.authorization = this.bearerToken(token)
    //                 console.log("dadaan ako parati dito")
    //             }
    //             return config;
    //         }, (error) =>{
    //             console.log(error+" hey error occured")
    //         }
    //     )
    // }

    
    setUpAxiosInterceptors(){
        // let basicAuthHeader = 'Bearer ' + refreshToken;no
        getAuthAxios.interceptors.response.use(
            (response) => {
               return response;
            },(error) => {
                const originalRequest = error.config; 
                console.log("naghahanap pa ng error")
                console.log(error.response.status);

                if(error.response.status === 401 && !originalRequest._retry){
                    originalRequest._retry = true;
                    

                    const refreshToken = sessionStorage.getItem('refreshToken');
                    const username = sessionStorage.getItem('username');
                    return LoginService.executeRefreshToken(refreshToken, username)
                    .then(({data})=>{
                        console.log('data');
                        // this.successfullyLogin(data.authenticationToken, data.expiresAt, data.refreshToken, data.username, data.id)
                        // sessionStorage.removeItem('authenticationToken');
                        // sessionStorage.removeItem('expiresAt');
                        // sessionStorage.removeItem('refreshToken');
                        // sessionStorage.removeItem('username');
                        // sessionStorage.removeItem('id');
                        sessionStorage.setItem('authenticationToken', data.authenticationToken);
                        sessionStorage.setItem('expiresAt', data.expiresAt);
                        sessionStorage.setItem('refreshToken', data.refreshToken);
                        sessionStorage.setItem('username', data.username);
                        sessionStorage.setItem('id', data.id)
                        // this.setUpAxiosRequestInterceptors(this.getUserLoggedIn())
                        getAuthAxios.defaults.headers.common['Authorization'] = 'Bearer ' + data.authenticationToken;
                        originalRequest.headers['Authorization'] = 'Bearer ' + data.authenticationToken;
                        return getAuthAxios(originalRequest);
                    });
                    
                }

                else{
                    this.logOut();
                    this.props.history.push('/login');
                }

                return Promise.reject(error);
          }
        )
    };

}

// export let authAxios = axios.create({
//     baseURL: `http://localhost:8080/kyummy/auth/`,
//     headers: {
//         'Authorization': token,
//     }
// });

export const getAuthAxios = axios.create({
    baseURL: `http://localhost:8080/kyummy/auth/`
});

export const authAxios = axios.create({
    baseURL: `http://localhost:8080/kyummy/auth/`,
    // Static headers
    headers: {
      'Content-Type': 'application/json',
    },
    transformRequest: [function (data, headers) {
      // You may modify the headers object here
      headers['Authorization'] = `Bearer ${sessionStorage.getItem('authenticationToken')}`
      // Do not change data
      return data;
    }],
  })
// if(this.isUserLoggedIn){
//     config.headers.authorization = basicAuthHeader
// }
export default new AuthenticationService()
