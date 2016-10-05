<template lang='pug'>
div(style='margin: 1em 1em')
	span(style='display:inline-block; width:6em') {{ name }}
	span(style='display:inline-block; width:3em; text-align: center') {{ counter }}
	button(href='#' v-on:click.stop='inc' style='display:inline-block; width:2em') +
	button(href='#' v-on:click.stop='dec' style='display:inline-block; width:2em') -
	button(href='#' v-on:click.stop='inverse=counter' style='display:inline-block; width:2em') !
	span(style='display:inline-block; width:3em; text-align: center') {{ inverse }}
</template>

<script>
module.exports = require('./counter-ts.ts').default
</script>
