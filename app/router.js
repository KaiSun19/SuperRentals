import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about'); // tells ember that this a new url
  this.route('form');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('rental', { path: '/rentals/:rental_id' }); // :rental_id is a dynamic segment that will be changed by model id
});
