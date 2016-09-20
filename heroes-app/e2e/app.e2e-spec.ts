import { HeroesAppPage } from './app.po';

describe('heroes-app App', function() {
  let page: HeroesAppPage;

  beforeEach(() => {
    page = new HeroesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
