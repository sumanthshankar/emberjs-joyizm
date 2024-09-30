import { setupTest } from 'emberjs-joyizm/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | event', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:event');
    assert.ok(adapter, 'adapter exists');
  });
});
