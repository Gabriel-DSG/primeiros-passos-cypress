class myInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='D, dd M yyyy']",
            dateCloseButton: ".--close",
            genericDropdownField: "[clear='false']",
            nationalityDropdownField: ".oxd-select-dropdown > :nth-child(27)",
            maritalStatusDropdownField: ".oxd-select-dropdown > :nth-child(3)",
            genderRadioButton: ".oxd-radio-wrapper",
            submitSuccessToast: ".oxd-toast-close",
            submitButton: "[type='submit']",
        }
        return selectors
    }

    fillPersonalInfo(firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)


    }

    fillEmployeeInfo(employeeId, otherId, driverLicenseNumber, licenseExpiryDate, dateOfBirth) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click({ force: true })
        cy.get(this.selectorsList().genericField).eq(7).clear().type(dateOfBirth)
        cy.get(this.selectorsList().dateCloseButton).click()

    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(this.selectorsList().submitSuccessToast)

    }

    fillStatus() {
        cy.get(this.selectorsList().genericDropdownField).eq(0).click({ force: true })
        cy.get(this.selectorsList().nationalityDropdownField).click({ force: true })
        cy.get(this.selectorsList().genericDropdownField).eq(1).click({ force: true })
        cy.get(this.selectorsList().maritalStatusDropdownField).click({ force: true })
        cy.get(this.selectorsList().genderRadioButton).eq(0).click({ force: true })
    }

}

export default myInfoPage