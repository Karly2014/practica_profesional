import axios from "axios";

const BUS_BASE_REST_API_URL ="http://localhost:8080/api/v1/buses";

class BusService{
    geTAllBuses(){
        return axios.get(BUS_BASE_REST_API_URL);
    }

    createBus(bus){
        return axios.post(BUS_BASE_REST_API_URL,bus);
    }

    getBusById(busId){
        return axios.get(BUS_BASE_REST_API_URL + '/' + busId);
    }

    updateBus(busId, bus){
        return axios.put(BUS_BASE_REST_API_URL + '/' + busId,bus);
    }

    deleteBus(busId){
        return axios.delete(BUS_BASE_REST_API_URL + '/' + busId)
    }

}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BusService();