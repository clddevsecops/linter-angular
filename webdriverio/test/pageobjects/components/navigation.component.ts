import { $, browser } from "@wdio/globals";
import { setupBrowser } from "@testing-library/webdriverio";
import SignInPage from "../signIn.page.ts";
import HomePage from "../home.page.ts";

class NavigationComponent {
  constructor() {
    // @ts-ignore
    setupBrowser(browser);
  }

  signInLink = () => {
    return $("a").getByText(" Sign in ");
  };

  loggedInUserLink = () => {
    return browser.findByTestId("logged-in-user-link");
  };

  async assertLoggedInUser(username: string) {
    console.log(username);
    await HomePage.waitTillLoaded();
    // const usernameValue = await browser.findByText(username)
    const usernameLink = await this.loggedInUserLink();
    await usernameLink.waitForDisplayed();
  }

  async goToLogin() {
    const signInLink = await this.signInLink();
    await signInLink.click();
    SignInPage.waitTillLoaded();
  }

  async goToProfile() {
    const usernameLink = await this.loggedInUserLink();
    await usernameLink.click();
  }
}
export default new NavigationComponent();