import type { Page } from '@playwright/test';

export class CommunityPortalPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async goToHelpDesk() {
    await this.page.getByRole('link', { name: /help desk/i }).first().click();
  }
}