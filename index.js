var webdriverio = require('webdriverio');

// see README.md for differences in options
var standaloneOptions = { desiredCapabilities: { browserName: 'firefox' } };
var hubOptions = { host: "192.168.99.100", port: 32768, desiredCapabilities: { browserName: 'chrome' } };

var options = standaloneOptions;
var client = webdriverio.remote(options);

function duckduckgo() {
  client
      .init()
      .url('https://duckduckgo.com/')
      .setValue('#search_form_input_homepage', 'WebdriverIO')
      .click('#search_button_homepage')
      .getTitle().then(function(title) {
          console.log('Title is: ' + title);
          // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"
      })
      .end();
}

function salesforce() {

  var userids = ['005U0000001hxBi'];
  var userid = userids[0];
  client
      .init()
      .url('https://login.salesforce.com/')
      .setValue('#username', 'USERNAME')
      .setValue('#password', 'PASSWORD')
      .click('#Login')
      .execute(function(userid) {
        location.href = '/' + userid;
      }, userid)
      .click('#topButtonRow > input:nth-child(4)')
      .pause(2000)
      .click('a[title="My Accounts Tab"]')

      //.end();


}

salesforce();
