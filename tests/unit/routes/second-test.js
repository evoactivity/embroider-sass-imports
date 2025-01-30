import { module, test } from 'qunit';
import { setupTest } from 'esi/tests/helpers';

module('Unit | Route | second', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:second');
    assert.ok(route);
  });
});
