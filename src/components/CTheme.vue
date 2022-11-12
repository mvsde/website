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
	<div class="theme js-theme">
		<h2 class="theme__heading">
			Theme:
		</h2>

		<button
			v-for="theme in themes"
			:key="theme.theme"
			class="theme__button js-theme-button"
			:data-theme="theme.theme"
		>
			<CIcon
				class="theme__icon"
				:name="theme.icon"
			/>
			{{ theme.title }}
		</button>
	</div>
</template>
