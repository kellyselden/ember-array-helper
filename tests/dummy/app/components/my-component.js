import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  secondItem: computed('array.[]', function() {
    return this.get('array').objectAt(1);
  })
});
