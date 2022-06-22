import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {
  // a class that applies functionality to the image
  @tracked isLarge = false; // @tracked decorator makes Ember watch for any changes to isLarge and reruns any templates that depend on isLarge

  @action toggleSize() {
    // a method that can be used as a clickHandler
    this.isLarge = !this.isLarge;
  }
}
