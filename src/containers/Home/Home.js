import React from 'react'

import CharityCard from '../CharityCard'
import { Title1 } from '../../components/Typo'
import Modal from '../../components/Modal'
import DonatedModal from '../DonatedModal'
import Statistic from '../../components/Statistic'
import {
  Container,
  CharityLayout,
  HeaderSection,
  StatCard,
  StatSection,
} from './styled'
import {
  add,
  summaryDonations,
  displayPrice,
  getSymbolFromCurrency,
  groupBy,
  mapValues,
} from '../../helpers'
import { charities, payments } from '../../utils/api'

class Home extends React.Component {
  state = {
    charities: [],
    donations: {},
    latestDonations: {},
    message: null,
  }

  componentDidMount() {
    charities.get().then(data => {
      this.setState({ charities: data })
    })
    payments.get().then((data = []) => {
      const dataGroup = groupBy(data, 'currency')
      const dataGroupSummary = mapValues(dataGroup, list =>
        summaryDonations(list.map(obj => obj.amount)),
      )

      this.setState({
        donations: dataGroupSummary,
      })
    })
  }

  handlePay = ({ id, amount, currency }) => {
    const ensureAmount = +amount
    payments
      .create({
        charitiesId: id,
        amount: ensureAmount,
        currency,
      })
      .then(() => {
        this.setState(({ donations }) => ({
          donations: {
            ...donations,
            [currency]: add(donations[currency], ensureAmount),
          },
          latestDonations: {
            amount: ensureAmount,
            currency,
          },
          message: 'Thanks for your donations!',
        }))
      })
  }

  render() {
    const { charities = [], latestDonations, message, donations } = this.state

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
              <Title1>Omise Tamboon React</Title1>
            </HeaderSection>
            <StatSection>
              {Object.entries(donations).map(([currency, summary]) => (
                <StatCard key={currency}>
                  <Statistic
                    label={`all donations in ${currency}`}
                    value={displayPrice(summary)}
                    unit={getSymbolFromCurrency(currency)}
                  />
                </StatCard>
              ))}
            </StatSection>

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
