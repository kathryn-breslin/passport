import axios from "axios";

export default {
    saveUser: function(data: any) {
        return axios.post("/api/user", data)
    }
}