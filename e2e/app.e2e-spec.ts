import { NewsAggregatorPage } from './app.po';

describe('news-aggregator App', () => {
  let page: NewsAggregatorPage;

  beforeEach(() => {
    page = new NewsAggregatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
