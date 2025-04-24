import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page.ts';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
})

test.describe('search using main search bar', () => {
  test('Search "Playwright" using main search bar', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.searchFor('Playwright');
    const dropdown = page.getByRole('listbox', { name: 'search results' });
    await dropdown.getByRole('option').first().click();
    await expect(page.getByRole('heading', { name: 'Playwright', level: 1 })).toBeVisible();
  })
})