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
      'Content-type': 'application/json'
    };

    let body = JSON.stringify(eventPost);

    return this.ajax(url, 'POST', { data: body });
  }

  handleResponse(status, headers, payload, requestData) {
    if (status === 200 && payload) {
      return payload;
    } else {
      return super.handleResponse(status, headers, payload, requestData);
    }
  }
}
