import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Switch from './Switch'
const TOGGLE_CONTEXT = '__toggle__'
export const withToggle = (Component) => {
  function Wrapper(props, context) {
    const toggleContext = context[TOGGLE_CONTEXT]
    return <Component toggle={toggleContext} {...props} />
  }
  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  }
  return Wrapper
}

const ToggleOn = withToggle(({children, toggle: {on}}) => {
  return on ? children : null
})

const ToggleOff = withToggle(({children, toggle: {on}}) => {
  return on ? null : children
})

const ToggleButton = withToggle(({toggle: {on, toggle}, ...props}) => {
  return <Switch on={on} toggle={toggle} {...props} />
})

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
