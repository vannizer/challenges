import React from 'react'
import PropTypes from 'prop-types'

import CharityCard from '../CharityCard'
import { Title1 } from '../../components/Typo'
import {
  Container,
  CharityLayout,
  HeaderSection,
  BroadcastMessage,
} from './styled'
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
        })
        this.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        })

        setTimeout(() => {
          this.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          })
        }, 2000)
      })
  }

  render() {
    const { donate, message } = this.props
    const { charities = [] } = this.state

    return (
      <Container>
        <HeaderSection>
          <Title1>Omise Tamboon React</Title1>
        </HeaderSection>
        <p>All donations: {donate}</p>
        <BroadcastMessage>{message}</BroadcastMessage>

        <CharityLayout>
          {charities.map(item => (
            <CharityCard
              key={item.id}
              backgroundUrl={item.image}
              id={item.id}
              name={item.name}
              currency={item.currency}
              submit={this.handlePay}
            />
          ))}
        </CharityLayout>
      </Container>
    )
  }
}

Home.defaultProps = {
  dispatch: () => {},
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  donate: PropTypes.number,
  message: PropTypes.string,
}

export default Home
