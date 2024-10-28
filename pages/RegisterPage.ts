// pages/RegisterPage.ts
import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipCodeInput: Locator;
  readonly phoneInput: Locator;
  readonly ssnInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('input[id="customer.firstName"]');
    this.lastNameInput = page.locator('input[id="customer.lastName"]');
    this.addressInput = page.locator('input[id="customer.address.street"]');
    this.cityInput = page.locator('input[id="customer.address.city"]');
    this.stateInput = page.locator('input[id="customer.address.state"]');
    this.zipCodeInput = page.locator('input[id="customer.address.zipCode"]');
    this.phoneInput = page.locator('input[id="customer.phoneNumber"]');
    this.ssnInput = page.locator('input[id="customer.ssn"]');
    this.usernameInput = page.locator('input[id="customer.username"]');
    this.passwordInput = page.locator('input[id="customer.password"]');
    this.confirmPasswordInput = page.locator('input[id="repeatedPassword"]');
    this.registerButton = page.locator('input[value="Register"]');
  }

  async navigate() {
    await this.page.goto('/parabank/register.htm');
  }

  async registerNewUser(userInfo: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
  }) {
    await this.firstNameInput.fill(userInfo.firstName);
    await this.lastNameInput.fill(userInfo.lastName);
    await this.addressInput.fill(userInfo.address);
    await this.cityInput.fill(userInfo.city);
    await this.stateInput.fill(userInfo.state);
    await this.zipCodeInput.fill(userInfo.zipCode);
    await this.phoneInput.fill(userInfo.phone);
    await this.ssnInput.fill(userInfo.ssn);
    await this.usernameInput.fill(userInfo.username);
    await this.passwordInput.fill(userInfo.password);
    await this.confirmPasswordInput.fill(userInfo.password);
    await this.registerButton.click();
  }
}