import axios from "axios";
import { authAxios, getAuthAxios } from "../service/AuthenticationService";


class LoginService {
    // login api
    executeLoginRequest(loginRequest){
        return axios.post(`http://localhost:8080/kyummy/auth/login`, loginRequest);
    }

    // generating new jwt token api
    executeRefreshToken(refreshToken, username){
        return axios.post(`http://localhost:8080/kyummy/auth/refresh/token`, {refreshToken, username});
    }
    //user information api
    executeGetUserInformation(userid, token){
        return getAuthAxios.get(`/${userid}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // address information api
    executeGetUserAddressInformation(userid, token){
        return getAuthAxios.get(`/address/${userid}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // adding address api
    executeAddAddressInformation(addressDetails){
        return authAxios.post(`/address`, JSON.stringify(addressDetails));
    }

    //retrieving specific address information
    executeGetSpecificAddressInformation(addressId, token){
        return getAuthAxios.get(`/address/${addressId}/get`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // delete address by address id
    executeDeleteAddressInformation(addressId, token){
        return getAuthAxios.delete(`/address/${addressId}/delete`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // update address information
    executeUpdateAddressInformation(addressId,updatedAddressInfo){
        return authAxios.put(`/address/${addressId}/update`, JSON.stringify(updatedAddressInfo))
    }
    // add to cart api
    executeAddToCart(product){
        return authAxios.post(`/cart`, JSON.stringify(product))
    }
    //update quantity
    executeUpdateQuantity(userId, productName, product){
        return authAxios.put(`/cart/${userId}/${productName}/update`, JSON.stringify(product))
    }

    // delete cart
    executeDeleteCart(cartId, token){
        return getAuthAxios.delete(`/cart/${cartId}/delete`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // delete all cart
    executeDeleteAllCart(userId, token){
        return getAuthAxios.delete(`/cart/${userId}/deleteall`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    //cart item
    executeGetCart(userId, token){
        return getAuthAxios.get(`cart/${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    //for list reservation
    executeGetListView(userId, token){
        return getAuthAxios.get(`/cart/${userId}/get`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // counting the cart item inside the database
    executeCountingCartItem(userId, token){
        return getAuthAxios.get(`/cart/${userId}/count`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }
    // boolean for cartItem
    executeExistingCartItem(userId, productName, token){
        return getAuthAxios.get(`/cart/${userId}/${productName}/cart`,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
            
        });
    }

    executePending(reserveProducts){
        // /pending
        return authAxios.post(`/pending`, JSON.stringify(reserveProducts))
    }

    // log out api
    executeLogoutAndDeleteRefreshToken(refreshToken){
        return axios.post(`http://localhost:8080/kyummy/auth/logout`, {refreshToken});
    }
}

export default new LoginService();