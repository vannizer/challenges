import React from 'react'
import PropTypes from 'prop-types'
import { getSymbolFromCurrency, displayPrice } from '../../helpers'
import {
  DonatedContainer,
  DonatedSection,
  DonationText,
  AmountNumber,
  Emoji,
} from './styled'

function DonatedModal({ amount, currency, name, message }) {
  return (
    <DonatedContainer>
      <DonatedSection>
        <Emoji>🎉</Emoji>
        <DonationText>{message}</DonationText>
        <AmountNumber data-testid={name}>
          {`${getSymbolFromCurrency(currency)} ${displayPrice(amount)}`}
        </AmountNumber>
      </DonatedSection>
    </DonatedContainer>
  )
}

DonatedModal.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
}

export default DonatedModal
