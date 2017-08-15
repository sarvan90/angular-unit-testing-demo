import { AngularUnitTestingDemoPage } from './app.po';

describe('angular-unit-testing-demo App', () => {
  let page: AngularUnitTestingDemoPage;

  beforeEach(() => {
    page = new AngularUnitTestingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
