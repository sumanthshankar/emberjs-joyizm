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

  async model() {
    // let eventRequest = {
    //   adminId: 213,
    //   empId: 1086,
    //   agentId: 1,
    //   appType: 'B2C',
    //   currencyCode: 'USD',
    //   startDate: '2024-09-27',
    //   endDate: '2024-10-07',
    //   country: 'United States',
    //   city: 'Fremont - California',
    // };
    //console.log(await this.store.adapterFor('event').findEvents(this.store, 'event', eventRequest));
    //return await this.store.adapterFor('event').findEvents(this.store, 'event', eventRequest);
    //console.log(await this.store.findAll('event'));
    return this.store.findAll('event');
  }
}
