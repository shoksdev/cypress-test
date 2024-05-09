describe('Cypress Tests', () => {
    it('Create Need Negative Test (Invalid Title)', () => {
        cy.fixture('need/CreateNeedNegativeTest').then(data => {
            cy.log('Open Authentication Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get('div:nth-child(1) > div > input').type(data.login)

            cy.log('Enter Password')
            cy.get('div:nth-child(2) > div.form-control--medium.form-control > input').type(data.password)

            cy.log('Click Enter Button')
            cy.get('div:nth-child(3) > button').click()

            cy.log('Click Needs Button')
            cy.get('div.page-nav > div:nth-child(6) > p').click()

            cy.log('Click Create Need Button')
            cy.get('div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button')
                .scrollIntoView().click()

            cy.log('Enter Title')
            cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div.form-control--responsive.form-control > input')
                .scrollIntoView().type(data.titleNegative, {force: true})

            cy.log('Enter Duties')
            cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > textarea').type(data.requirements)

            cy.log('Enter Requirements')
            cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > textarea')
                .scrollIntoView().should('be.visible').type(data.duties)
        })
    })
})