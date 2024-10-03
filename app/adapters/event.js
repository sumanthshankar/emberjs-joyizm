import RESTAdapter from '@ember-data/adapter/rest';
import axios from 'axios';


export default class EventAdapter extends RESTAdapter {
  host = 'https://tcwebapi-rezygenservices.azurewebsites.net';


  async findEvents(store, type, eventRequest) {
    //console.log('findEvents');
    const url = `${this.host}/activity/activitysearch`;
    
    const headers = {
      'Content-type': 'application/json',
    };
    
    const data = JSON.stringify(eventRequest);

    return axios({
      method: 'POST',
      url,
      headers,
      data,
    }).then((response) => {
      //const s = JSON.stringify(response);
      //console.log('response: ' + JSON.stringify(response));
      // console.log('type.modelName: ' + type);
      return store.serializerFor('event').normalizeArrayResponse(store, type, response, null, 'findEvents');
    }).catch(error => {
      console.error('Error fetching record:', error);
      throw error;
    });
  }

  async findAll(store, type, sinceToken) {
    //const axios = require('axios');
    let url = `${this.host}/activity/activitysearch`;

    let eventPost = {
      adminId: 213,
      empId: 1086,
      agentId: 1,
      appType: 'B2C',
      currencyCode: 'USD',
      startDate: '2024-10-04',
      endDate: '2024-11-04',
      country: 'United States',
      city: 'Fremont - California',
    };

    const headers = {
      'Content-type': 'application/json',
    };

    const body = JSON.stringify(eventPost);

    return axios({
      method: 'POST',
      url: url,
      headers,
      data: body,
    });
  }

  async findRecord(store, type, id, snapshot) {
    //console.log('findRecord: ' + id);
    let url = `${this.host}/activity/activitydetail`;

    let eventPost = {
      adminId: 213,
      empId: 1086,
      agentId: 1,
      currencyCode: 'USD',
      startDate: '2024-09-27',
      endDate: '2024-10-07',
      ssid: id,
    };

    const headers = {
      'Content-type': 'application/json',
    };

    const body = JSON.stringify(eventPost);

    return axios({
      method: 'POST',
      url: url,
      headers,
      data: body,
    });
  }

  handleResponse(status, headers, payload, requestData) {
    //console.log('payload' + payload);
    if (status === 200 && payload) {
      return payload;
    } else {
      return super.handleResponse(status, headers, payload, requestData);
    }
  }
}
