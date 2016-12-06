import Ember from 'ember';

const {
  Helper: { helper },
  A: newArray
} = Ember;

export default helper(params => {
  // this has a bug in ember 2.10
  // https://github.com/emberjs/ember.js/pull/14649
  // let array = newArray(params);

  let array = newArray();
  array.pushObjects(params);

  return array;
});
