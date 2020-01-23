'use strict';

const VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: require('./package').name,

  treeFor() {
    let checker = new VersionChecker(this.project);
    let ember = checker.forEmber();

    if (ember.isAbove('3.8.0')) {
      return null;
    }

    return this._super(...arguments);
  }
};
