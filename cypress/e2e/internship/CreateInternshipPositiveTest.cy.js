describe('Cypress Tests', () => {
    it('Create Internship Positive Test', () => {
        cy.fixture('internship/CreateInternshipPositiveTest').then(data => {
            cy.log('Open Authentication Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get('div:nth-child(1) > div > input').type(data.login)

            cy.log('Enter Password')
            cy.get('div:nth-child(2) > div.form-control--medium.form-control > input').type(data.password)

            cy.log('Click Enter Button')
            cy.get('div:nth-child(3) > button').click()

            cy.log('Click Internships Button')
            cy.get('div.page-nav > div:nth-child(8) > p').click()

            cy.log('Click Create Internship Button')
            cy.get('div:nth-child(8) > section > div.vacancies-block__filters-wrapper > button')
                .scrollIntoView().click()

            cy.log('Enter Title')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input')
                .scrollIntoView().type(data.title, {force: true})

            cy.log('Enter Start Date')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > input').type(data.startDate)

            cy.log('Enter Finish Date')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > input').type(data.finishDate)

            cy.log('Enter Requirements')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(6) > div > textarea').type(data.requirements)

            cy.log('Enter Duties')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(7) > div > textarea')
                .scrollIntoView().should('be.visible').type(data.duties)

            cy.log('Click Create Button')
            cy.get('body > div:nth-child(21) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button').click({force: true})
        })
    })
})