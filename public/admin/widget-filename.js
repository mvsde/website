/* global CMS, createClass, h */

import { hideWidget, removeHideWidgetStyles } from './utilities.js'

const controlComponent = createClass({
  componentDidMount () {
    const { forID, entry } = this.props
    const isNewPage = entry.get('newRecord')

    if (!isNewPage) {
      hideWidget({ id: forID })
    }
  },

  componentWillUnmount () {
    const { forID } = this.props
    removeHideWidgetStyles({ id: forID })
  },

  handleChange (event) {
    const { onChange } = this.props
    onChange(event.target.value)
  },

  render () {
    const { value, forID, classNameWrapper, setActiveStyle, setInactiveStyle } = this.props

    return h('input', {
      id: forID,
      className: classNameWrapper,
      type: 'text',
      value: value || '',
      onChange: this.handleChange,
      onFocus: setActiveStyle,
      onBlur: setInactiveStyle
    })
  }
})

CMS.registerWidget({
  name: 'filename',
  controlComponent
})
