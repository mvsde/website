<script setup>
import CIcon from './CIcon.vue'

const themes = [
	{
		title: 'System',
		icon: 'system',
		theme: 'system',
	},
	{
		title: 'Light',
		icon: 'sun',
		theme: 'light',
	},
	{
		title: 'Dark',
		icon: 'moon',
		theme: 'dark',
	},
]
</script>

<template>
	<div class="Theme js-Theme">
		<h2 class="Theme-heading">
			Theme:
		</h2>

		<button
			v-for="theme in themes"
			:key="theme.theme"
			class="Theme-button js-Theme-button"
			:data-theme="theme.theme"
		>
			<CIcon
				class="Theme-icon"
				:name="theme.icon"
			/>
			{{ theme.title }}
		</button>
	</div>
</template>
