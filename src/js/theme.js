const STORAGE_KEY = 'fynn-theme'
const THEMES = ['system', 'light', 'dark']

const SELECTORS = {
	theme: '.js-Theme',
	css: '#theme-css',
}

class Theme {
	/**
   * @param {HTMLElement} container
   */
	constructor (container) {
		this.elements = {
			container,

			buttons: /** @type {NodeListOf<HTMLButtonElement>} */ (container.querySelectorAll('.js-Theme-button')),
			css: /** @type {HTMLLinkElement} */ (document.querySelector(SELECTORS.css)),
		}
	}

	init () {
		this.elements.container.classList.add('is-init')
		this.setTheme(localStorage.getItem(STORAGE_KEY))

		for (const button of this.elements.buttons) {
			button.addEventListener('click', () => this.setTheme(button.dataset.theme))
		}
	}

	/**
   * @param {'system'|'light'|'dark'} name
   */
	setTheme (name) {
		if (!THEMES.includes(name)) {
			name = 'system'
		}

		localStorage.setItem(STORAGE_KEY, name)
		this.elements.css.href = `/theme/${name}.css`

		for (const theme of THEMES) {
			document.documentElement.classList.remove(`is-${theme}`)
		}

		document.documentElement.classList.add(`is-${name}`)
	}
}

new Theme(document.querySelector(SELECTORS.theme)).init()
