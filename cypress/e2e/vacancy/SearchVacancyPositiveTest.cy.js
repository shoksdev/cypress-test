describe('Cypress Tests', () => {
    it('Search Vacancy Positive Test', () => {
        cy.fixture('vacancy/SearchVacancyPositiveTest').then(data => {
            cy.log('Open Authentication Page')
            cy.visit(data.url)

            cy.log('Enter Login')
            cy.get('div:nth-child(1) > div > input').type(data.login)

            cy.log('Enter Password')
            cy.get('div:nth-child(2) > div.form-control--medium.form-control > input').type(data.password)

            cy.log('Click Enter Button')
            cy.get('div:nth-child(3) > button').click()
            cy.wait(552)

            cy.log('Click Internships Button')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"] > .header__label').click()
            cy.wait(552)

            cy.log('Enter search query')
            cy.get('div.search-input > div > input').type(data.searchQuery)
            cy.wait(552)

            cy.log('Click Salary Filter')
            cy.get('div.radio-list > label:nth-child(2) > span').click()
            cy.wait(552)

            cy.log('Click Search Button')
            cy.get('div.filters-block__filter-list > div.search-input > div > button').click()
        })
    })
})