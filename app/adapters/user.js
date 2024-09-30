import RESTAdapter from '@ember-data/adapter/rest';

export default class UserAdapter extends RESTAdapter {
    host = 'https://tcwebapi-rezygenservices.azurewebsites.net';
}
