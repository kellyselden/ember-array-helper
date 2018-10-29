ember-array-helper
==============================================================================

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-array-helper.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/ember-array-helper.svg)](https://badge.fury.io/js/ember-array-helper)
[![Build Status](https://travis-ci.org/kellyselden/ember-array-helper.svg?branch=master)](https://travis-ci.org/kellyselden/ember-array-helper)
[![dependencies Status](https://david-dm.org/kellyselden/ember-array-helper/status.svg)](https://david-dm.org/kellyselden/ember-array-helper)
[![devDependencies Status](https://david-dm.org/kellyselden/ember-array-helper/dev-status.svg)](https://david-dm.org/kellyselden/ember-array-helper?type=dev)
[![Ember Version](https://img.shields.io/badge/ember-2.16%2B-brightgreen.svg)](https://www.emberjs.com/)

Perfect companion to the `{{hash ...}}` template helper.

Installation
------------------------------------------------------------------------------

```
ember install ember-array-helper
```


Usage
------------------------------------------------------------------------------

```hbs
{{hash
  name="parent"
  children=(array
    (hash
      name="child1"
    )
    (hash
      name="child2"
    )
  )
}}
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-array-helper`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
