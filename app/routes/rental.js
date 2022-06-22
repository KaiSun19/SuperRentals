// should always be in the routes folder of app

import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store; // Ember Data also retrieves api data and stores it in cache so no need to repeatedly request from server

  async model(params) {
    return this.store.findRecord('rental', params.rental_id); // finds the model known as rental and a specific id for a rental model object
    // in this case it would be rental_id
  }
}
