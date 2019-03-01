import axios from 'axios';

class DataService {

    constructor(endpoint, baseUrl = 'http://localhost:3000/api/', client = axios.create()){
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl+this.endpoint
        this.client = client;
    }

    create(data){
        return this.client.post(this.url, data);
    }

    read(id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.get(this.url);
    }

    update(data, id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.put(this.url, data);
    }

    delete(id){
        if(id){
            this.url += "/"+id;
        }
        return this.client.delete(this.url);
    }   

}

export default DataService;