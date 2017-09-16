import { IMBDPage } from './app.po';

describe('imbd App', () => {
  let page: IMBDPage;

  beforeEach(() => {
    page = new IMBDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
