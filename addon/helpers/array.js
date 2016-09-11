import Ember from 'ember';

const {
  Helper: { helper },
  A: newArray
} = Ember;

export default helper(params => {
  // this has a bug in ember 2.9 beta
  // https://github.com/emberjs/ember.js/issues/14264
  // let array = newArray(params);

  let array = newArray();
  array.pushObjects(params);

  return array;
});
