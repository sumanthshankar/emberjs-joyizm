import RESTAdapter from '@ember-data/adapter/rest';

export default class EventAdapter extends RESTAdapter {
  host = 'https://tcwebapi-rezygenservices.azurewebsites.net';

  async findAll(store, type, sinceToken) {
    let url = `${this.host}/activity/activitysearch`;

    let eventPost = {
      adminId: 213,
      empId: 1086,
      agentId: 1,
      appType: 'B2C',
      currencyCode: 'USD',
      startDate: '2024-09-27',
      endDate: '2024-10-07',
      country: 'United States',
      city: 'Fremont - California',
    };

    const headers = {
      'Content-type': 'application/json',
    };

    let body = JSON.stringify(eventPost);

    const options = {
      method: 'POST',
      headers,
      body,
    };

    return await fetch(url, options).then((response) => response.json());
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

    let body = JSON.stringify(eventPost);

    const options = {
      method: 'POST',
      headers,
      body,
    };

    return await fetch(url, options).then((response) => response.json());
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
