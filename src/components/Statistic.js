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
const UnitText = styled.span`
  color: ${colors.primaryBlue};
  font-size: 1.1875rem;
  margin-right: 0.25rem;
`
const ValueRow = styled.div`
  display: flex;
  align-items: baseline;
`

function Statistic({ value, label, unit }) {
  return (
    <Container>
      <ValueRow>
        {unit != null ? <UnitText>{unit}</UnitText> : null}
        <ValueText data-testid={toSlug(label)}>{value}</ValueText>
      </ValueRow>
      <LabelText>{label}</LabelText>
    </Container>
  )
}

Statistic.propTypes = {
  value: PropTypes.node,
  label: PropTypes.node,
}

export default Statistic
