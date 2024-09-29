import { module, test } from 'qunit';
import { setupTest } from 'emberjs-joyizm/tests/helpers';

module('Unit | Route | events', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:events');
    assert.ok(route);
  });
});
