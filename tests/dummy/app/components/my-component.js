import Ember from 'ember';

export default Ember.Component.extend({
  secondItem: Ember.computed('array.[]', function() {
    return this.get('array').objectAt(1);
  })
});
