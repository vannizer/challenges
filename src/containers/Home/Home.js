import React from 'react'
import PropTypes from 'prop-types'

import CharityCard from '../CharityCard'
import { Title1 } from '../../components/Typo'
import Modal from '../../components/Modal'
import DonatedModal from '../DonatedModal'
import Statistic from '../../components/Statistic'
import {
  Container,
  CharityLayout,
  HeaderSection,
  StatContainer,
  TitleContainer,
} from './styled'
import { add, summaryDonations, displayPrice } from '../../helpers'
import { charities, payments } from '../../utils/api'

class Home extends React.Component {
  state = {
    charities: [],
    donate: 0,
    latestDonations: {},
    message: null,
  }

  componentDidMount() {
    charities.get().then(data => {
      this.setState({ charities: data })
    })
    payments.get().then(data => {
      this.setState({ donate: summaryDonations(data.map(item => item.amount)) })
    })
  }

  handlePay = ({ id, amount, currency }) => {
    payments
      .create({
        charitiesId: id,
        amount,
        currency,
      })
      .then(() => {
        this.setState(({ donate }) => ({
          donate: add(donate, amount),
          latestDonations: {
            amount,
            currency,
          },
          message: 'Thanks for your donations!',
        }))
      })
  }

  render() {
    const { charities = [], donate, latestDonations, message } = this.state

    return (
      <Modal
        body={
          <DonatedModal
            amount={latestDonations.amount}
            currency={latestDonations.currency}
            message={message}
            name="donated-modal"
          />
        }
      >
        {({ open: openModal }) => (
          <Container>
            <HeaderSection>
              <TitleContainer>
                <Title1>Omise Tamboon React</Title1>
              </TitleContainer>
              <StatContainer>
                <Statistic label="all donations" value={displayPrice(donate)} />
              </StatContainer>
            </HeaderSection>

            <CharityLayout>
              {charities.map(item => (
                <CharityCard
                  key={item.id}
                  backgroundUrl={item.image}
                  name={item.name}
                  currency={item.currency}
                  onSubmit={amount => {
                    this.handlePay({
                      id: item.id,
                      currency: item.currency,
                      amount,
                    })
                    openModal()
                  }}
                />
              ))}
            </CharityLayout>
          </Container>
        )}
      </Modal>
    )
  }
}

export default Home
