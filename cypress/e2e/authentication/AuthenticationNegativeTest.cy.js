describe('Cypress Tests', () => {
    it('Authentication Negative Test (Invalid Password)', () => {
        cy.fixture('authentication/AuthenticationNegativeTest').then(data => {
            cy.log('Open Authentication Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get('div:nth-child(1) > div > input').type(data.login)

            cy.log('Enter Password')
            cy.get('div:nth-child(2) > div.form-control--medium.form-control > input').type(data.password)

            cy.log('Click Button')
            cy.get('div:nth-child(3) > button').click()
        })
    })
})