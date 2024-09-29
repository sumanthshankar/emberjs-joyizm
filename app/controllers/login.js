import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
    @tracked email = '';
    @tracked password = '';

    get disableSubmit() {
        return !this.email.length || !this.password.length;
    }
    
    @action
    submitForm(event) {
        event.preventDefault();
        const data = {
            email: this.email,
            password: this.password
        }
        event.preventDefault();
        console.log(JSON.stringify(data));
    }
}