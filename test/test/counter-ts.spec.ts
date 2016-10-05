/// <reference path='../../node_modules/@types/jest/index.d.ts' />

import Vue = require('vue')
import {expectToMatchSnapshot, clickNthButton} from '../../src/vue-jest-utils'
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
		return expectToMatchSnapshot(vm)
	})
})
