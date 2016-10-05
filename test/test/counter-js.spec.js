const Vue = require('vue')
const VJU = require('../../src/vue-jest-utils.ts')

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
		return VJU.expectToMatchSnapshot(vm)
	})
})
