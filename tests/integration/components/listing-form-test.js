import { module, test } from 'qunit';
import { setupRenderingTest } from 'super-rentals/tests/helpers';
import { render , fillIn, click} from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | listing-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it submits data successfully ', async function (assert) {

    await render(hbs`<ListingForm />`);

    assert.dom(".listing-form").exists();

    assert.dom(".form-control").exists({count:6})

    assert.dom(".name-control").exists();
    assert.dom(".property-control").exists();
    assert.dom(".owner-control").exists();
    assert.dom(".address-control").exists();
    assert.dom(".email-control").exists();

    await fillIn('.name-control', "Kai's House");
    await fillIn('.property-control', "House");
    await fillIn('.owner-control', "Kai");
    await fillIn('.address-control', "Test Address");

    assert.dom('.btn').hasAttribute('type', 'submit');

    await click('.btn');






  });
});
