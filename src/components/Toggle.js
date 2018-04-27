import React from 'react'
import PropTypes from 'prop-types'

class Toggle extends React.PureComponent {
  state = { on: false }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
  getStateAndHelpers() {
    return {
      on: this.state.on,
      toggle: this.toggle,
    }
  }
  render() {
    return this.props.children(this.getStateAndHelpers())
  }
}

Toggle.defaultProps = {
  onToggle: () => {},
}
Toggle.propTypes = {
  onToggle: PropTypes.func,
}

export default Toggle
