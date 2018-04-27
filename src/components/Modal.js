import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// #region UI
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;

  transition: all 0.3s ease;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  opacity: ${props => (props.visible ? '1' : '0')};
`
const ModalDialog = styled.div`
  position: fixed;
  left: 50%;

  top: 10vh;
  background: #fff;
  z-index: 1001;
  border-radius: 8px;
  box-shadow: 0px 9px 30px -5px rgba(79, 79, 79, 0.9);

  transition: all 0.3s ease;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')}
    translateX(-50%);
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  max-width: 100vw;
`
const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0.25rem;
  cursor: pointer;

  position: absolute;
  top: 6px;
  right: 6px;

  font-size: 1.125rem;
  z-index: 1001;
`
const ModalUI = ({ children, close, visible }) => {
  return (
    <div>
      <ModalDialog visible={visible}>
        <CloseButton onClick={close} data-testid="modal-close-button">
          ✕
        </CloseButton>
        {children}
      </ModalDialog>
      <Overlay onClick={close} visible={visible} />
    </div>
  )
}
// #endregion

// #region modal context component
export default class ModalManager extends React.Component {
  open = () => {
    this.setState({ visible: true })
  }
  close = () => {
    this.setState({ visible: false }, () =>
      this.props.onClose(this.state.visible),
    )
  }
  getModalProps = () => ({
    visible: this.state.visible,
    close: this.close,
  })
  getStateAndHelpers = () => ({
    visible: this.state.visible,
    open: this.open,
    close: this.close,
  })
  state = {
    visible: !!this.props.visible,
    component: this.props.component || null,
  }

  render() {
    const { body, children } = this.props
    return (
      <Fragment>
        <ModalUI {...this.getModalProps()}>{body}</ModalUI>
        {children(this.getStateAndHelpers())}
      </Fragment>
    )
  }
}
ModalManager.defaultProps = {
  onClose: () => {},
}
ModalManager.propTypes = {
  body: PropTypes.node,
  onClose: PropTypes.func,
}
// #endregion
