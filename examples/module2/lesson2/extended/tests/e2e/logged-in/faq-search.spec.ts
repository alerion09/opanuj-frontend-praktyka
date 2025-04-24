import { expect, test } from '../../../fixtures';
import { MainPage } from '../../../pages/main.page.ts';
import { CommunityPortalPage } from '../../../pages/community-portal.page.ts';
import { HelpDeskPage } from '../../../pages/help-desk.page.ts';
import { URLs } from '../../../utils/constants.ts';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
  await mainPage.goToCommunityPortal();
  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.goToHelpDesk();
})

test.describe('search in faq', () => {
  test('search "watchlist" in faq', async ({ page }) => {
    const helpDeskPage = new HelpDeskPage(page);
    await helpDeskPage.searchInFAQ('watchlist');
    expect(page.url().startsWith(URLs.SEARCH_PAGE)).toBe(true);
    expect(page.getByRole('listitem').filter({ hasText: 'watchlist' })).toBeTruthy();
  })
})