import React from 'react'
import { getSymbolFromCurrency, displayPrice } from '../../helpers'
import {
  DonatedContainer,
  DonatedSection,
  DonationText,
  AmountNumber,
  Emoji,
} from './styled'

function DonatedModal({ amount, currency }) {
  return (
    <DonatedContainer>
      <DonatedSection>
        <Emoji>🎉</Emoji>
        <DonationText>Thank you for your donations</DonationText>
        <AmountNumber>
          {`${getSymbolFromCurrency(currency)} ${displayPrice(amount)}`}
        </AmountNumber>
      </DonatedSection>
    </DonatedContainer>
  )
}

export default DonatedModal
