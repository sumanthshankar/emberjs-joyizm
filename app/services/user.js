import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  host = 'https://tcwebapi-rezygenservices.azurewebsites.net';

  @tracked isLoggedIn = false;

  @tracked isLoading = false;

  show() {
    this.isLoading = true;
  }

  hide() {
    this.isLoading = false;
  }

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

    return response.json();
  }
}
