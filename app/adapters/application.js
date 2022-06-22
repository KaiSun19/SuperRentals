import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // application.js means that this adapater would be used to retrieve data for all models
  namespace = 'api'; // adds an additional api namespace to the url

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`; // attaches .json to the url
  }
}
