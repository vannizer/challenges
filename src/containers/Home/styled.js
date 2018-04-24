import styled from 'styled-components'
import { breakpoints } from '../../constant'

export const Container = styled.div`
  padding: 0 0.75rem;
`
export const CharityLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`
export const HeaderSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`
export const BroadcastMessage = styled.p`
  color: red;
  margin: 1rem 0;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
`
