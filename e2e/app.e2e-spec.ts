import { DuckhaxPage } from './app.po';

describe('duckhax App', () => {
  let page: DuckhaxPage;

  beforeEach(() => {
    page = new DuckhaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
