describe('Cypress Tests', () => {
    it('Read Message Positive Test', () => {
        cy.fixture('message/ReadMessagePositiveTest').then(data => {
            cy.log('Open Authentication Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get('div:nth-child(1) > div > input').type(data.login)

            cy.log('Enter Password')
            cy.get('div:nth-child(2) > div.form-control--medium.form-control > input').type(data.password)

            cy.log('Click Enter Button')
            cy.get('div:nth-child(3) > button').click()
            cy.wait(552)

            cy.log('Click Messages Button')
            cy.get(':nth-child(1) > .header__nav > [href="/notification"] > .header__label').click()

            cy.log('Click Read Message Button')
            cy.get(':nth-child(1) > article > button').click()
        })
    })
})