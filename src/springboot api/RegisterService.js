import axios from "axios"

class RegisterService {
    ExecuteRegisterRequest(registrationRequest){
        return axios.post(`http://localhost:8080/kyummy/auth/signup`, registrationRequest);
    }

}

export default new RegisterService()