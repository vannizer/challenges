import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import { Regular } from '../../components/Typo'
import Toggle from '../../components/Toggle'
import Card from '../../components/Card'
import {
  CampaignImage,
  ContentSection,
  InnerModalContainer,
  InnerModalSection,
  ChoicesContainer,
  ChoiceGroup,
  Label,
  InnerModalTitle,
  CloseToggleButton,
} from './styled'
import { toSlug } from '../../helpers'

const CHOICES = [
  {
    label: '10',
    value: 10,
  },
  {
    label: '20',
    value: 20,
  },
  {
    label: '50',
    value: 50,
  },
  {
    label: '100',
    value: 100,
  },
  {
    label: '500',
    value: 500,
  },
]

export default class CharityCard extends React.PureComponent {
  initialState = { selectedAmount: null }
  state = this.initialState

  selectAmount = e => {
    const amount = e.target.value
    this.setState({ selectedAmount: amount })
  }

  reset = () => {
    this.setState(this.initialState)
  }

  render() {
    const { id, name, currency, submit, backgroundUrl, onToggle } = this.props
    const { selectedAmount } = this.state

    return (
      <Card>
        <Toggle onToggle={onToggle}>
          {({ on, toggle }) => (
            <Fragment>
              <InnerModalContainer show={on}>
                <CloseToggleButton onClick={toggle}>✕</CloseToggleButton>
                <InnerModalSection>
                  <InnerModalTitle>
                    Select the amount to donate ({currency})
                  </InnerModalTitle>
                  <ChoicesContainer>
                    {CHOICES.map(({ label, value }) => {
                      const inputId = toSlug(`${name}-${label}`)
                      return (
                        <ChoiceGroup key={label}>
                          <input
                            type="radio"
                            name={toSlug(`payment-${name}`)}
                            id={inputId}
                            value={value}
                            checked={+selectedAmount === +value}
                            onClick={this.selectAmount}
                          />
                          <Label htmlFor={inputId}>{label}</Label>
                        </ChoiceGroup>
                      )
                    })}
                  </ChoicesContainer>
                  <Button
                    outline
                    disabled={!selectedAmount}
                    onClick={() => {
                      submit({ id, amount: selectedAmount, currency })
                      toggle()
                      this.reset()
                    }}
                  >
                    Pay
                  </Button>
                </InnerModalSection>
              </InnerModalContainer>
              <CampaignImage backgroundUrl={backgroundUrl} />
              <ContentSection>
                <Regular>
                  <b>{name}</b>
                </Regular>
                <Button outline onClick={toggle}>
                  Donate
                </Button>
              </ContentSection>
            </Fragment>
          )}
        </Toggle>
      </Card>
    )
  }
}

CharityCard.defaultProps = {
  submit: () => {},
  onToggle: () => {},
}

CharityCard.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  currency: PropTypes.string,
  submit: PropTypes.func,
  backgroundUrl: PropTypes.string,
  onToggle: PropTypes.func,
}
