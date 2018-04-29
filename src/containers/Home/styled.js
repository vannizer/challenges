import styled from 'styled-components'
import Card from '../../components/Card'
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
  margin-top: 2.5rem;
  text-align: center;
`
export const StatSection = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0.5rem -0.75rem;
  padding: 0 0.5rem;
`
export const StatCard = styled(Card)`
  min-width: 12.5rem;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  margin: 1.5rem 0.5rem;
`
