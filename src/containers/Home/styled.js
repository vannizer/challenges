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
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  display: grid;
  grid-gap: 1rem;
  grid-template-areas: '. title stat';
  grid-template-columns: 1fr auto 1fr;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'stat';
  }
`
export const TitleContainer = styled.div`
  grid-area: title;
`
export const StatContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: stat;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }
`
