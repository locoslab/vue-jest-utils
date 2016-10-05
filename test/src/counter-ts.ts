const thisIsTypescript: string = 'counter-ts'
export default {
	data () {
		return {
			name: thisIsTypescript,
			counter: 0
		}
	},
	methods: {
		inc: function() {
			this.counter++
		},
		dec: function() {
			this.counter--
		},
		uncoveredFunction: function() {
			this.counter *= 2
		}
	},
	computed: {
		inverse: {
			get: function() {
				return -this.counter
			},
			set: function(value: number) {
				this.counter = -value
			}
		},
	},
	created: function () {
		this.counter++
	}
}
