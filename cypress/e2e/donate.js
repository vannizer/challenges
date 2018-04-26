const getOnlyNumber = str => +str.replace(/\D/g, '')

describe('donate', () => {
  it('should able to donate and all donations has been increased', () => {
    let expected

    cy
      .server()
      .route('/charities')
      .as('charities')
      .route('/payments')
      .as('payments')
      .visit('http://localhost:3000')
      .wait('@charities')
      .wait(100)
      .getByTestId('all-donations')
      .then(x => {
        const result = getOnlyNumber(x.get(0).innerHTML)
        expected = result + 50
        return x
      })
      .getByText('donate', { selector: 'button' })
      .click()
      .getByLabelText('50', { selector: 'input' })
      .click()
      .getByText('pay', { selector: 'button' })
      .click()
      .wait('@payments')
      .wait(100)
      .getByTestId('donated-modal')
      .should('contain', '฿ 50')
      .getByTestId('modal-close-button')
      .click()
      .getByTestId('all-donations')
      .then(x => {
        const result = getOnlyNumber(x.get(0).innerHTML)
        expect(result).to.equal(expected)
        return x
      })
  })
})
