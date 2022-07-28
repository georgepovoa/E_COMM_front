import axios from "axios"

export default class Api {
    constructor() {
    //   this.api_token = null;
    //   this.client = null;
    //   this.api_url = process.env.REACT_APP_API_ENDPOINT;
    this.api_url = "http://127.0.0.1:8000/";
    
    }
    init = () => {
    //   this.api_token = getCookie("ACCESS_TOKEN");
      let headers = {
        Accept: "application/json"
      };
    //   if (this.api_token) {
    //     headers.Authorization = `Bearer ${
    //       this.api_token
    //     }`;
    //   }
    //   this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
      this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});

      return this.client;
    };
    check_api = () => {
      return this.init().get("/");
    };

    get_products = () =>{
      return this.init().get("/produtos/all")
    }

    get_carrinho = (user) =>{
      return this.init().get(`/carrinhos/${user}`)
    }

    add_to_carrinho = (user,id_product) =>{
      return this.init().put(`/carrinhos/add/${user}/${id_product}`)
    }

    remove_of_carrinho = (user,id_product) =>{
      return this.init().put(`/carrinhos/remove/${user}/${id_product}`)
    }

    addNewUser = (data) => {
      return this.init().post("/users", data);
    };
  }




// export default class Api {
//     constructor() {
//       this.api_token = null;
//       this.client = null;
//       this.api_url = process.env.REACT_APP_API_ENDPOINT;
//     }
//     init = () => {
//       this.api_token = getCookie("ACCESS_TOKEN");
//       let headers = {
//         Accept: "application/json"
//       };
//       if (this.api_token) {
//         headers.Authorization = `Bearer ${
//           this.api_token
//         }`;
//       }
//       this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
//       return this.client;
//     };
//     getUserList = (params) => {
//       return this.init().get("/users", {params: params});
//     };
//     addNewUser = (data) => {
//       return this.init().post("/users", data);
//     };
//   }