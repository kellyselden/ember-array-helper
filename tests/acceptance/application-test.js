import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('it is a usable array after passing to component js', async function(assert) {
    await visit('/');

    assert.dom('.second-item').hasText('2');
  });
});
