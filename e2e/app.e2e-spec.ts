import { PracAppPage } from './app.po';

describe('prac-app App', function() {
  let page: PracAppPage;

  beforeEach(() => {
    page = new PracAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
