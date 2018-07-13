/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
      });


      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
       it('have url', function() {
         for (let feed = 0; feed < allFeeds.length; feed ++) {
           expect(allFeeds[feed].url).toBeDefined();
           expect(allFeeds[feed].url).not.toBe(0);
         }
       });


      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
       it('have url name', function() {
         for(let feed = 0; feed < allFeeds.length; feed++) {
           expect(allFeeds[feed].name).not.toBe(0);
         }
       });
    });


    /* New test suite */
    describe('The menu', function() {

      /* A test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       it('is hidden', function() {
         expect($('body')).toHaveClass('menu-hidden');
       });

       /* A test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('displays on click', function() {
          let menuIcon = $('.menu-icon-link');
          menuIcon.click();
          expect($('body')).not.toHaveClass('menu-hidden');
          menuIcon.click();
          expect($('body')).toHaveClass('menu-hidden');
        });
    });

    /* New test suite */
    describe('Initial Entries', function() {

      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      /* A test that ensures when the loadFeed function is called
       * and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       it('has entry element', function() {
         let entry = $('.feed .entry')[0];
         expect(entry).toBeDefined();
       });

     });

    /* New test suite */
    describe('New Feed Selection', function() {

      let entriesBeforeLoad = $('.feed .entry').length;

      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      /* A test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
       it('changes content', function() {
         let entriesLoaded = $('.feed .entry').length;
         expect(entriesLoaded).toBeGreaterThan(entriesBeforeLoad);
       });
    });
}());
