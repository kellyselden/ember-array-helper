import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
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

    assert.equal(findAll('.first-item').length, 1);
    assert.equal(findAll('.second-item').length, 1);
  });
});
