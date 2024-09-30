import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service user;
  @service router;

  @tracked email = '';
  @tracked password = '';

  get disableSubmit() {
    return !this.email.length || !this.password.length;
  }

  @action
  async submitForm(event) {
    event.preventDefault();

    const userData = {
      userEmail: this.email,
      password: this.password,
      profileType: 'R',
      audience: 'MobileApp',
    };

    const response = await this.user.login(userData);

    this.user.isLoggedIn = true;
    const token = response['token'];
    localStorage.setItem('Token', token);
    this.router.transitionTo('/');
  }
}
