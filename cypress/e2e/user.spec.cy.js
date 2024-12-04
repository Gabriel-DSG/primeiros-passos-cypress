import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  it('User Info Update - Successful', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.verifyDashboard()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalInfo('Alex', 'The', 'Terrible')
    myInfoPage.fillEmployeeInfo('555666', '1984', '55519846661984', '2028-02-03', '1984-25-01')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})