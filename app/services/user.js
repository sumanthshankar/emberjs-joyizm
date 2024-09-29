import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
//import config from '../../config/environment';

export default class UserService extends Service {
    host = 'https://tcwebapi-rezygenservices.azurewebsites.net';
    @tracked isLoggedIn = false;

    async login(user) {
        const url = `${this.host}/User/Login`;
        const headers = {
            'Content-type': 'application/json',
            TenantName: 'JOYIZM',
        };
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(user),
        });

        //const responseData = await response.json();

        return response.json();
    }
}
