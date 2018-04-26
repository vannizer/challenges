import React from 'react'
import PropTypes from 'prop-types'

import CharityCard from '../CharityCard'
import { Title1 } from '../../components/Typo'
import Modal from '../../components/Modal'
import DonatedModal from '../DonatedModal'
import { Container, CharityLayout, HeaderSection } from './styled'
import { summaryDonations } from '../../helpers'
import { charities, payments } from '../../utils/api'

class Home extends React.PureComponent {
  state = {
    charities: [],
  }

  componentDidMount() {
    charities.get().then(data => {
      this.setState({ charities: data })
    })
    payments.get().then(data => {
      this.props.dispatch({
        type: 'UPDATE_TOTAL_DONATE',
        amount: summaryDonations(data.map(item => item.amount)),
        currency: data[0].currency,
      })
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
        this.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
          currency,
        })
      })
  }

  render() {
    const { donate, latestDonations } = this.props
    const { charities = [] } = this.state

    return (
      <Modal
        body={
          <DonatedModal
            amount={latestDonations.amount}
            currency={latestDonations.currency}
          />
        }
      >
        {({ open: openModal }) => (
          <Container>
            <HeaderSection>
              <Title1>Omise Tamboon React</Title1>
            </HeaderSection>
            <p>
              All donations:
              <span data-testid="all-donations" id="all-donations">
                {donate}
              </span>
            </p>

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

Home.defaultProps = {
  dispatch: () => {},
  latestDonations: {},
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  donate: PropTypes.number,
  latestDonations: PropTypes.shape({
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  }),
}

export default Home
