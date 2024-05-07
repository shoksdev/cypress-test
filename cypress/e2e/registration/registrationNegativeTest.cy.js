describe('Cypress Tests', () => {
    it('Registration Negative Test (Login failed validation)', () => {
        cy.fixture('registration/registrationNegativeTest').then(data => {
            cy.log('Open Registration Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get(':nth-child(1) > div:nth-child(1) > div > input').type(data.usernameNegative)

            cy.log('Enter Email')
            cy.get(':nth-child(1) > div:nth-child(2) > div > input').type(data.email)

            cy.log('Enter Password')
            cy.get(':nth-child(1) > div:nth-child(3) > div > input').type(data.password)

            cy.log('Enter Password Repeat')
            cy.get(':nth-child(1) > div:nth-child(4) > div > input').type(data.password)
        })
    })

    it('Registration Negative Test (Password failed validation)', () => {
        cy.fixture('registration/registrationNegativeTest').then(data => {
            cy.log('Open Registration Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get(':nth-child(1) > div:nth-child(1) > div > input').type(data.username)

            cy.log('Enter Email')
            cy.get(':nth-child(1) > div:nth-child(2) > div > input').type(data.email)

            cy.log('Enter Password')
            cy.get(':nth-child(1) > div:nth-child(3) > div > input').type(data.passwordNegative)

            cy.log('Enter Password Repeat')
            cy.get(':nth-child(1) > div:nth-child(4) > div > input').type(data.passwordNegativeRepeat)
        })
    })

    it('Registration Negative Test (Email failed validation)', () => {
        cy.fixture('registration/registrationNegativeTest').then(data => {
            cy.log('Open Registration Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get(':nth-child(1) > div:nth-child(1) > div > input').type(data.username)

            cy.log('Enter Email')
            cy.get(':nth-child(1) > div:nth-child(2) > div > input').type(data.emailNegative)

            cy.log('Enter Password')
            cy.get(':nth-child(1) > div:nth-child(3) > div > input').type(data.password)

            cy.log('Enter Password Repeat')
            cy.get(':nth-child(1) > div:nth-child(4) > div > input').type(data.password)
        })
    })

    it('Registration Negative Test (Password != Password Repeat)', () => {
        cy.fixture('registration/registrationNegativeTest').then(data => {
            cy.log('Open Registration Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get(':nth-child(1) > div:nth-child(1) > div > input').type(data.username)

            cy.log('Enter Email')
            cy.get(':nth-child(1) > div:nth-child(2) > div > input').type(data.email)

            cy.log('Enter Password')
            cy.get(':nth-child(1) > div:nth-child(3) > div > input').type(data.password)

            cy.log('Enter Password Repeat')
            cy.get(':nth-child(1) > div:nth-child(4) > div > input').type(data.passwordNegativeNotRepeat)
        })
    })
})

