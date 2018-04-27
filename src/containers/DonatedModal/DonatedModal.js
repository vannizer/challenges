import React from 'react'
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

export default DonatedModal
