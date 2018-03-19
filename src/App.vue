<template>

<div id="app">

	<navigator></navigator>

	<router-view></router-view>

	<play-bar></play-bar>

</div>

</template>

<script>

import navigator from '@/components/navigator/index'
import playBar from '@/components/play_bar/index'

export default {
	name: 'App',
	components: {
		navigator,
		playBar,
	}
}

</script>

<style lang="scss" scoped="scoped" type="text/css">

</style>
