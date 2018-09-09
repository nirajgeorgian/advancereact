import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'
const TOGGLE_CONTEXT = '__toggle__'

function ToggleOn({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? children : null
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

function ToggleOff({children}, context) {
  const {on} = context[TOGGLE_CONTEXT]
  return on ? null : children
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

function ToggleButton(props, context) {
  const {on, toggle} = context[TOGGLE_CONTEXT]
  return <Switch on={on} toggle={toggle} {...props} />
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton
	static defaultProps = {
		onToggle: () => {}
	}
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }
	state = { on: false }
	toggle = () => this.setState(
		({on}) => ({ on: !on }),
		() => this.props.onToggle(this.state.on)
	)
  getChildContext() {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        toggle: this.toggle
      }
    }
  }
	render() {
    /*
    const children = React.Children.map(
      this.props.children,
      child =>
        React.cloneElement(child, {
          on: this.state.on,
          toggle: this.toggle
        })
    )
    */
		return (
			<div>
				<h1>Render here the input tab</h1>
				{this.props.children}
			</div>
		)
	}
}

export default Toggle
