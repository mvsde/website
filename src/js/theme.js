const STORAGE_KEY = 'fynn-theme'
const THEMES = ['system', 'light', 'dark']

const SELECTORS = {
  theme: '.js-theme',
  css: '#theme-css'
}

class Theme {
  /**
   * @param {HTMLElement} container
   */
  constructor (container) {
    this.container = container

    /** @type {NodeListOf<HTMLButtonElement>} */
    this.buttons = container.querySelectorAll('.js-theme-button')

    /** @type {HTMLLinkElement} */
    this.css = document.querySelector(SELECTORS.css)
  }

  init () {
    this.container.classList.add('is-init')
    this.setTheme(localStorage.getItem(STORAGE_KEY))

    for (const button of this.buttons) {
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
    this.css.href = `/theme/${name}.css`

    for (const theme of THEMES) {
      document.documentElement.classList.remove(`is-theme-${theme}`)
    }

    document.documentElement.classList.add(`is-theme-${name}`)
  }
}

new Theme(document.querySelector(SELECTORS.theme)).init()
