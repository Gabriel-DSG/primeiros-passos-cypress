import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

const date1 = `${chance.date().getFullYear()}-${String(chance.date().getDate()).padStart(2, '0')}-${String(chance.date().getMonth() + 1).padStart(2, '0')}`
const date2 = `${chance.date().getFullYear()}-${String(chance.date().getDate()).padStart(2, '0')}-${String(chance.date().getMonth() + 1).padStart(2, '0')}`

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.verifyDashboard()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalInfo(chance.first(), chance.syllable(), chance.last())
    myInfoPage.fillEmployeeInfo(chance.ssn({ ssnFour: true }), chance.timestamp(), chance.ssn({ dashes: false }), date1, date2)
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

})