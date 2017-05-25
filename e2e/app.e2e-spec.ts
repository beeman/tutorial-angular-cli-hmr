import { TutorialAngularCliHmrPage } from './app.po';

describe('tutorial-angular-cli-hmr App', () => {
  let page: TutorialAngularCliHmrPage;

  beforeEach(() => {
    page = new TutorialAngularCliHmrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
