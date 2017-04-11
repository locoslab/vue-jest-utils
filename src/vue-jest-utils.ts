import Html2jade = require('html2jade')
import Vue = require('vue')

/** convert html to pug as a Promise */
export function html2pug(html: string) {
	return new Promise((resolve, reject) => {
		Html2jade.convertHtml(html, {bodyless: true}, (err: any, jade: string) => {
			if (err) {
				reject(err)
			} else {
				resolve(jade)
			}
		})
	})
}

/** call vm.nextTick() as a Promise */
export function nextTick(vm: Vue) {
	return new Promise((resolve, reject) => {
		Vue.nextTick(() => resolve())
	})
}

/** call vm.nextTick() and check the snapshot as a Promise */
export function expectToMatchSnapshot(vm: Vue, element?: HTMLElement) {
	return new Promise((resolve, reject) => {
		nextTick(vm).then(() => html2pug((element || vm.$el).innerHTML)).then((jade) => {
			expect(jade).toMatchSnapshot()
			resolve()
		}).catch((err)=>(reject(err)))
	})
}

/** click the nth button */
export function clickNthButton(el: HTMLElement, n: number) {
	(el.querySelector('button:nth-of-type(' + n + ')') as HTMLButtonElement).click()
}
