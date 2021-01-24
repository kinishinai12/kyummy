import axios from "axios"

class WelcomePageService {

    executeGetAllCategoryService () {

        return axios.get(`http://localhost:8080/categories`);
    }

    executeGetAllAlcoholDrinksService(){
        let category = "Alcohol drinks";
        let page = 0;
        let size = 3;
        return axios.get(`http://localhost:8080/pagebycategory/${category}/${page}/${size}`);
    }
    executeGetProductByCategories(category, page, size){
        return axios.get(`http://localhost:8080/categorypage/${category}/${page}/${size}`);
    }

    executeGetAllKoreanFameSerivice(){
        let category = "Korean Fame";
        let page = 0;
        let size = 3;
        return axios.get(`http://localhost:8080/koreanfame/${category}/${page}/${size}`);
    }

    executeGetKoreanFameServiceProducts(){
        return axios.get(`http://localhost:8080/koreanfame/products`);
    }

    executeGetProductById(id){
        return axios.get(`http://localhost:8080/product/${id}`);
    }

    executeGetAllProduct(pageNumber, pageSize){
        
        return axios.get(`http://localhost:8080/paginatedproducts/${pageNumber}/${pageSize}`);
    }
    executeSearchProduct(productName, pageNumber){
        return axios.get(`http://localhost:8080/SearchingProducts/${productName}/${pageNumber}`);
    }

    executeServiceGetKoreanFameProductById(id){
        return axios.get(`http://localhost:8080/koreanfame/${id}`);
    }

}

export default new WelcomePageService()