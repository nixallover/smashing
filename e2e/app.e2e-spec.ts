import { SmushPage } from './app.po';

describe('smush App', function() {
  let page: SmushPage;

  beforeEach(() => {
    page = new SmushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
