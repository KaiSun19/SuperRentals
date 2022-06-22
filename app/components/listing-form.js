import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListingFormComponent extends Component {

    @action
    submit() {
      window.alert('Successfully submitted form data!');
    }

}
