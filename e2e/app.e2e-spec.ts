import { AngularHmrPage } from './app.po';

describe('angular-hmr App', function() {
  let page: AngularHmrPage;

  beforeEach(() => {
    page = new AngularHmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
