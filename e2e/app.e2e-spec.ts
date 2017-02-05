import { SmashingPage } from './app.po';

describe('Smashing App', function() {
  let page: SmashingPage;

  beforeEach(() => {
    page = new SmashingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
