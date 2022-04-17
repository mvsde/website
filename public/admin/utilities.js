const HIDE_WIDGET_ID_PREFIX = 'hide-widget-styles'

/**
 * @param {Object} options
 * @param {string} options.id
 */
export function hideWidget ({ id }) {
  const style = document.createElement('style')
  style.id = `${HIDE_WIDGET_ID_PREFIX}-${id}`
  style.textContent = `
    label[for=${id}],
    label[for=${id}] ~ * {
      display: none;
    }
  `
  document.head.appendChild(style)
}

/**
 * @param {Object} options
 * @param {string} options.id
 */
export function removeHideWidgetStyles ({ id }) {
  const style = document.querySelector(`#${HIDE_WIDGET_ID_PREFIX}-${id}`)
  style?.remove()
}
