import { module, test } from 'qunit';
import { setupRenderingTest } from 'esi/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Bar />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Bar>
        template block text
      </Bar>
    `);

    assert.dom().hasText('template block text');
  });
});
