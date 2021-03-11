chrome.runtime.onInstalled.addListener(function() {
  // initialize the data
  chrome.storage.sync.set({
    color: '#3aa757'
  }, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // filter host name to show page
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          // hostEquals: 'developer.chrome.com'
          hostContains: '.'
        },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});