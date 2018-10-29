import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | array', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#each (array "first-item" "second-item") as |item|}}
        <span class={{item}}></span>
      {{/each}}
    `);

    assert.dom('.first-item').exists({ count: 1 });
    assert.dom('.second-item').exists({ count: 1 });
  });
});
