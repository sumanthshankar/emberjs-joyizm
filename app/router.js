import EmberRouter from '@ember/routing/router';
import config from 'emberjs-joyizm/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('events', function () {
    this.route('event', { path: '/:eventId' });
  });
});
