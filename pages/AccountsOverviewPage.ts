// pages/AccountsOverviewPage.ts
import { Page, Locator } from '@playwright/test';

export class AccountsOverviewPage {
  readonly page: Page;
  readonly accountsTable: Locator;
  readonly welcomeMessage: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsTable = page.locator('#accountTable');
    this.welcomeMessage = page.locator('.smallText');
    this.logoutLink = page.locator('a[href*="logout.htm"]');
  }

  async getWelcomeMessage(): Promise<string> {
    return await this.welcomeMessage.textContent() || '';
  }

  async getAccountsCount(): Promise<number> {
    return await this.accountsTable.locator('tr').count() - 1; // Resta 1 para excluir el encabezado
  }

  async logout() {
    await this.logoutLink.click();
  }
}