import styled from 'styled-components'
import { darken, rgba, lighten } from 'polished'
import { colors } from '../constant'

const hoverColor = lighten(0.03, colors.primaryBlue)
const focusColor = darken(0.05, colors.primaryBlue)
const shadowColor = rgba(colors.primaryBlue, 0.35)

const Button = styled.button`
  font-weight: 500;
  font-size: 1rem;
  border: 2px solid transparent;
  padding: 0.25rem 0.75rem;
  line-height: 1.3;
  border-radius: 0.25rem;
  transition: all 0.3s ease;

  background-color: ${props =>
    props.outline ? 'transparent' : colors.primaryBlue};
  color: ${props => (props.outline ? colors.primaryBlue : '#fff')};
  border-color: ${colors.primaryBlue};
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:hover:enabled {
    color: #fff;
    background-color: ${hoverColor};
    border-color: ${hoverColor};
    box-shadow: 0 0px 5px ${shadowColor}, 0 12px 25px -6px ${shadowColor};
  }
  &:focus:enabled {
    color: #fff;
    background-color: ${focusColor};
    border-color: ${focusColor};
    box-shadow: 0 0 10px 3px ${shadowColor};
  }
  &:disabled {
    opacity: 0.4;
    box-shadow: none;
    cursor: not-allowed;
  }
`

export default Button
