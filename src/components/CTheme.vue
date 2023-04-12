<script setup>
import CIcon from './CIcon.vue'

const themes = [
	{
		title: 'System',
		icon: 'monitor',
		theme: 'auto',
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
	<div class="Theme">
		<h2 class="Theme-heading">
			Theme:
		</h2>

		<button
			v-for="{ title, icon, theme } in themes"
			:key="theme"
			class="Theme-button"
			:onclick="`
				document.documentElement.setAttribute('data-theme', '${theme}');
				localStorage.setItem('fynn-theme', '${theme}');
			`"
		>
			<CIcon
				class="Theme-icon"
				:name="icon"
			/>
			{{ title }}
		</button>
	</div>
</template>
