import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Small } from './Typo'
import { colors } from '../constant'
import { toSlug } from '../helpers'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ValueText = styled.span`
  color: ${colors.primaryBlue};
  font-size: 2.25rem;
`
const LabelText = styled(Small.withComponent('span'))`
  text-transform: capitalize;
`

function Statistic({ value, label }) {
  return (
    <Container>
      <ValueText data-testid={toSlug(label)}>{value}</ValueText>
      <LabelText>{label}</LabelText>
    </Container>
  )
}

Statistic.propTypes = {
  value: PropTypes.node,
  label: PropTypes.node,
}

export default Statistic
