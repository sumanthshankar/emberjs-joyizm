import RESTAdapter from '@ember-data/adapter/rest';
import axios from 'axios';

export default class UserAdapter extends RESTAdapter {
    host = 'https://tcwebapi-rezygenservices.azurewebsites.net';

    buildURL(modelName, id, snapshot, requestType) {
        if (requestType === 'createRecord') {
            return `${this.host}/user/login`;
        }
        return super.buildURL(...arguments);
    }

    async createRecord(store, type, snapshot) {
        const url = this.buildURL(type.modelName, null, snapshot, 'createRecord');
    
        const data = this.serialize(snapshot, { includeId: true });
    
        const headers = {
          'Content-Type': 'application/json',
          'TenantName': 'JOYIZM'
        };
    
        return axios({
            method: 'POST',
            url: url,
            headers,
            data: JSON.stringify(data),
        });
    }

    handleResponse(status, headers, payload, requestData) {
        if (status === 200 && payload) {
          return payload;
        } else {
          return super.handleResponse(status, headers, payload, requestData);
        }
    }
}
