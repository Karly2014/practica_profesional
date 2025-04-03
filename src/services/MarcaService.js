import axios from "axios";

const MARCA_BASE_REST_API_URL ="http://localhost:8080/api/v1/marcas";

class MarcaService{
    getAllMarcas(){
        return axios.get(MARCA_BASE_REST_API_URL);
    }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MarcaService();