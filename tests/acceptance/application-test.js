import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | application');

test('it is a usable array after passing to component js', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.second-item').text().trim(), '2');
  });
});
