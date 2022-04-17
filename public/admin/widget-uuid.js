/* global CMS, createClass, h */

import { v4 as uuidv4 } from 'https://cdn.skypack.dev/uuid'
import { hideWidget, removeHideWidgetStyles } from './utilities.js'

const controlComponent = createClass({
  componentDidMount () {
    const { forID, value, onChange } = this.props

    hideWidget({ id: forID })

    if (!value) {
      const id = uuidv4()
      onChange(id)
    }
  },

  componentWillUnmount () {
    const { forID } = this.props
    removeHideWidgetStyles({ id: forID })
  },

  render () {
    const { value, forID, classNameWrapper } = this.props

    return h('input', {
      id: forID,
      className: classNameWrapper,
      type: 'text',
      value,
      readonly: 'readonly'
    })
  }
})

CMS.registerWidget({
  name: 'uuid',
  controlComponent
})
