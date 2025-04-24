import { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class MainPage {
  private readonly page: Page;
  private readonly url = URLs.MAIN_PAGE;
  readonly navigation: Locator;
  private readonly featuredArticleExcerpt: Locator;
  private readonly searchInput: Locator;
  private readonly menu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });
    this.featuredArticleExcerpt = page.locator('#mp-tfa');
    this.menu = page.getByRole('button', { name: 'menu' });
    this.searchInput = page
      .getByRole('search')
      .getByRole('searchbox', { name: /Search Wikipedia/i });
  }

  navigate() {
    return this.page.goto(this.url);
  }

  goToLoginPage() {
    return this.navigation.getByRole('link', { name: 'Log in' }).click();
  }

  async goToFeaturedArticle() {
    const linkToFeaturedArticle = this.featuredArticleExcerpt
      .getByRole('paragraph')
      .getByRole('link')
      .first();

    const articleHref = (await linkToFeaturedArticle.getAttribute('href'))!;

    await linkToFeaturedArticle.click();

    return this.page.waitForURL(`**${articleHref}`);
  }

  async goToCommunityPortal() {
    await this.openMenu();
    const list = this.page.locator('#vector-main-menu');
    const link = list.getByRole('link', { name: /Community portal/i });
    await link.click();
  }

  async searchFor(term: string) {
    return this.searchInput.fill(term);
  }

  getSearchResults() {
    return this.page.getByRole('listbox', { name: /Search results/i });
  }

  getFirstSearchResult() {
    return this.getSearchResults().getByRole('option').first();
  }

  getNavigation() {
    return this.navigation;
  }

  async openMenu() {
    await this.menu.click();
  }
}
