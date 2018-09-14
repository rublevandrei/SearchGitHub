'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /single when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/single");
  });


  describe('single', function() {

    beforeEach(function() {
      browser.get('index.html#!/single');
    });


    it('should render single when user navigates to /single', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('search', function() {

    beforeEach(function() {
      browser.get('index.html#!/search');
    });


    it('should render search when user navigates to /search', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
