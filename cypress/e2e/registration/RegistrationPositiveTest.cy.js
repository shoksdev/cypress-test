describe('Cypress Tests', () => {
    it('Registration Positive Test', () => {
        cy.fixture('registration/RegistrationPositiveTest').then(data => {
            cy.log('Open Registration Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get(':nth-child(1) > div:nth-child(1) > div > input').type(data.username)

            cy.log('Enter Email')
            cy.get(':nth-child(1) > div:nth-child(2) > div > input').type(data.email)

            cy.log('Enter Password')
            cy.get(':nth-child(1) > div:nth-child(3) > div > input').type(data.password)

            cy.log('Enter Password Repeat')
            cy.get(':nth-child(1) > div:nth-child(4) > div > input').type(data.password)

            cy.log('Click Next Button')
            cy.get(':nth-child(4) > button').click()

            cy.log('Enter Last Name')
            cy.get(':nth-child(2) > div:nth-child(1) > div > input').type(data.lastName)

            cy.log('Enter First Name')
            cy.get(':nth-child(2) > div:nth-child(2) > div > input').type(data.firstName)

            cy.log('Enter Middle Name')
            cy.get(':nth-child(2) > div:nth-child(3) > div > input').type(data.middleName)

            cy.log('Click Registration Button')
            cy.get(':nth-child(3) > .button').click()
        })
    })
})


