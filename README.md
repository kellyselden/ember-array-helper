# ember-array-helper

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/ember-array-helper.svg)](https://greenkeeper.io/)

[![npm version](https://badge.fury.io/js/ember-array-helper.svg)](https://badge.fury.io/js/ember-array-helper)
[![Build Status](https://travis-ci.org/kellyselden/ember-array-helper.svg?branch=master)](https://travis-ci.org/kellyselden/ember-array-helper)
[![dependencies Status](https://david-dm.org/kellyselden/ember-array-helper/status.svg)](https://david-dm.org/kellyselden/ember-array-helper)
[![devDependencies Status](https://david-dm.org/kellyselden/ember-array-helper/dev-status.svg)](https://david-dm.org/kellyselden/ember-array-helper?type=dev)
![Ember Version](https://embadge.io/v1/badge.svg?start=1.13.0)

Perfect companion to the `{{hash ...}}` template helper.

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
