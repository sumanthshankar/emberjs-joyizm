import Route from '@ember/routing/route'; 
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service user;

    beforeModel() {
        if(localStorage.getItem('Token') != null) {
            this.user.isLoggedIn = true;
        }
    }
}