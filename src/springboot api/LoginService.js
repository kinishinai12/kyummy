import axios from "axios";
import { authAxios, getAuthAxios } from "../service/AuthenticationService";


class LoginService {
    executeLoginRequest(loginRequest){
        return axios.post(`http://localhost:8080/kyummy/auth/login`, loginRequest);
    }

    executeRefreshToken(refreshToken, username){
        return axios.post(`http://localhost:8080/kyummy/auth/refresh/token`, {refreshToken, username});
    }

    executeGetUserInformation(userid, token){
        return getAuthAxios.get(`/${userid}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }

    executeGetUserAddressInformation(userid, token){
        return getAuthAxios.get(`/address/${userid}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }

    executeAddAddressInformation(addressDetails){
        return authAxios.post(`/address`, JSON.stringify(addressDetails));
    }
    executeGetSpecificAddressInformation(addressId, token){
        return getAuthAxios.get(`/address/${addressId}/get`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }

    executeDeleteAddressInformation(addressId, token){
        return getAuthAxios.delete(`/address/${addressId}/delete`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }

    executeUpdateAddressInformation(addressId,updatedAddressInfo){
        return authAxios.put(`/address/${addressId}/update`, JSON.stringify(updatedAddressInfo))
    }

    executeLogoutAndDeleteRefreshToken(refreshToken){
        return axios.post(`http://localhost:8080/kyummy/auth/logout`, {refreshToken});
    }
}

export default new LoginService();