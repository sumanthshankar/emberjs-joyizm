import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EventsRoute extends Route {
  @service store;
  @service user;
  @service router;

  beforeModel() {
    if (!this.user.isLoggedIn) {
      this.router.transitionTo('/login');
    }
  }

  model() {
    return this.store.findAll('event');
  }
}
