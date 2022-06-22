// should always be in the routes folder of app

import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('rental'); // finds the model known as rental
  }
}
