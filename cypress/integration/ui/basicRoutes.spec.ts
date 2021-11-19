import HomePage from '../../pages/home.page';
import LoginPage from '../../pages/login.page';
import RegisterPage from '../../pages/register.page';

describe('As a anonymous user I want to navigate between routes', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const registerPage = new RegisterPage();

  it('Visits Home page', () => {
    homePage.open();
  });

  it('Visits Login page', () => {
    homePage.goToLoginPage();
  });

  it('Navigates between Login and Register pages', () => {
    loginPage.goToRegisterPage();
    registerPage.goToLoginPage();
  });

  it('Visits home page from both Login and Register Pages', () => {
    loginPage.goToHomePage();
    registerPage.open();
    registerPage.goToHomePage();
  });
});
