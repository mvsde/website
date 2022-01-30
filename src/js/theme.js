const STORAGE_KEY = 'fynn-theme'
const THEMES = ['system', 'light', 'dark']

class Theme {
  /**
   * @param {Element} container
   */
  constructor (container) {
    this.container = container

    /** @type {NodeListOf<HTMLButtonElement>} */
    this.buttons = container.querySelectorAll('.js-theme-button')
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
    localStorage.setItem(STORAGE_KEY, name)

    for (const theme of THEMES) {
      document.documentElement.classList.remove(`is-theme-${theme}`)
    }

    document.documentElement.classList.add(`is-theme-${name}`)
  }
}

for (const element of document.querySelectorAll('.js-theme')) {
  new Theme(element).init()
}
