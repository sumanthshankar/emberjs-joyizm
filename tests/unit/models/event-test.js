import { setupTest } from 'emberjs-joyizm/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | event', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('event', {});
    assert.ok(model, 'model exists');
  });
});
