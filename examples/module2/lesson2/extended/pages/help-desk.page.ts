import { Page } from '@playwright/test';

export class HelpDeskPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async searchInFAQ(value: string) {
    const container = this.page.locator('#mw-content-text');
    const searchBox = container.getByRole('presentation').filter({ hasText: /Search the frequently asked questions/});
    const faqBox = searchBox.locator('td').filter({ hasText: /Search the frequently asked questions/});
    const input = faqBox.getByRole('textbox');
    await input.fill(value);
    const searchButton = faqBox.getByRole('button');
    await searchButton.click();
  }
}
