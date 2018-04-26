import styled from 'styled-components'
import { Small } from '../../components/Typo'
import { colors } from '../../constant'

export const DonatedContainer = styled.div`
  width: 380px;
  height: 300px;
  max-width: 90vw;
`
export const DonatedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const DonationText = styled(Small)`
  margin-bottom: 1rem;
`
export const AmountNumber = styled.div`
  color: ${colors.primaryBlue};
  font-weight: 500;
  font-size: 3rem;
`
export const Emoji = styled.div`
  font-size: 4.5rem;
  margin-bottom: 1rem;
`
