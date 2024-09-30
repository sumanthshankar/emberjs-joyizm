import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EventsEventRoute extends Route {
    @service store;

    async model(params) {
        console.log(params.eventId);
        console.log(await this.store.findRecord('event', params.eventId));
        return this.store.findRecord('event', params.eventId);
    }
}
