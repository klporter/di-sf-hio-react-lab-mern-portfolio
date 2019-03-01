import axios from 'axios';

class DataService {

    constructor(endpoint, baseUrl = 'http://localhost:3000/api/', client = axios.create()) {
        this.endpoint = endpoint;
        this.baseUrl = baseUrl;
        this.url = this.baseUrl + this.endpoint;
        this.client = client;
    }

    create(data) {
        return this.client.post(this.url, data);
    }

    read(id) {
        let url = this.url;
        if (id) {
            url += "/" + id;
        }
        return this.client.get(url);
    }

    update(data, id) {
        let url = this.url;
        if (id) {
            url += "/" + id;
        }
        return this.client.put(url, data);
    }

    delete(id) {
        let url = this.url;
        if (id) {
            url += "/" + id;
        }
        return this.client.delete(url);
    }

}

export default DataService;