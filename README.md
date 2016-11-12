# vue-jest-utils [![Build Status](https://travis-ci.org/locoslab/vue-jest-utils.svg?branch=master)](https://travis-ci.org/locoslab/vue-jest-utils) [![npm version](https://badge.fury.io/js/vue-jest-utils.svg)](https://badge.fury.io/js/vue-jest-utils)
Utilities for testing [Vue.js](http://vuejs.org/) components using [Jest](https://facebook.github.io/jest/).

While written in TypeScript (and thus including type definitions), it can also be used in a pure JavaScript environment.

Disclaimer: this project is currently very much work-in-progress. The motivating use case is simplifying snapshot testing using a combination of Vue.js, TypeScript, Jest, and html2jade. Additional functionality will be added as needed and breaking API changes may happen before releasing 1.0. Contributions are more than welcome.

## Usage
Install: `npm install --save-dev vue-jest-utils`

Note: Vue.js 2.0 and Jest must be installed as well.

To use Jest with Vue.js single-file components (`*.vue`) or TypeScript sources, follow the guide on [vue-typescript-jest](https://github.com/locoslab/vue-typescript-jest).

For a complete example of a TypeScript/Tsify/Vue.js/Vueify/Pug setup supporting Hot Module Replacement and unit/snapshot testing with Jest, cf.  [vue-typescript-component-example](https://github.com/locoslab/vue-typescript-component-example).


### Examples

#### JavaScript Test Example
```javascript
const Vue = require('vue')
const VJU = require('vue-jest-utils')

const CounterJs = require('../src/counter-js.vue')

describe('counter-js.vue', () => {
	it('should just work', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(CounterJs),
		})
		VJU.clickNthButton(vm.$el, 1)
		VJU.clickNthButton(vm.$el, 3)
		VJU.clickNthButton(vm.$el, 2)
		// return a Promise that
		// 1. calls vm.nextTick()
		// 2. checks the snapshot of vm.$el using html2jade
		return VJU.expectToMatchSnapshot(vm)
	})
})
```

#### TypeScript Test Example
```typescript
/// <reference path='../../node_modules/@types/jest/index.d.ts' />

import Vue = require('vue')
import {expectToMatchSnapshot, clickNthButton} from 'vue-jest-utils'
import CounterTs = require('../src/counter-ts.vue')

describe('counter-ts.vue', () => {
	it('should just work', () => {
		const vm = new Vue({
			el: document.createElement('div'),
			render: (h) => h(CounterTs),
		})
		clickNthButton(vm.$el, 1)
		clickNthButton(vm.$el, 3)
		clickNthButton(vm.$el, 2)
		// return a Promise that
		// 1. calls vm.nextTick()
		// 2. checks the snapshot of vm.$el using html2jade
		return expectToMatchSnapshot(vm)
	})
})
```

## Contributing
Contributions including bug reports, tests, and documentation are more than welcome. To get started with development:
``` bash
# once: install dependencies
npm install

# run unit tests in watch mode
npm test -- --watch

# lint & test
npm run prepublish
```

## License
[MIT](http://opensource.org/licenses/MIT)
