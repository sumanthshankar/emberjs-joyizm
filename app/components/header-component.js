import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @service user;

  @action
  logout() {
    localStorage.clear();
    this.user.isLoggedIn = false;
  }
}
