import { Auth0projPage } from './app.po';

describe('auth0proj App', function() {
  let page: Auth0projPage;

  beforeEach(() => {
    page = new Auth0projPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
