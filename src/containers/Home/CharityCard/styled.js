import styled from 'styled-components'
import { Regular } from '../../../components/Typo'

// #region Common
export const CampaignImage = styled.div`
  height: 200px;
  background: ${props => `url(/images/${props.backgroundUrl})`} no-repeat center;
  background-size: cover;
`
export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 12px;
  align-items: center;
  padding: 12px;
`
// #endregion

// #region Modal
export const InnerModalContainer = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  z-index: 1;
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  height: 100%;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? 1 : 0)};
`
export const InnerModalSection = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const InnerModalTitle = styled(Regular)`
  margin-bottom: 1.5rem;
`
export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`
export const ChoiceGroup = styled.div`
  margin: 0 6px;
  display: flex;
  align-items: center;
`
export const Label = styled.label`
  font-size: 1rem;
  margin-left: 0.125rem;
`
export const CloseToggleButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0.375rem;
  cursor: pointer;

  position: absolute;
  top: 12px;
  right: 12px;

  font-size: 1.125rem;
`
// #endregion
