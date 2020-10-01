browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background' + request + sendResponse + sender)

  browser.tabs.executeScript({
    file: 'content-script.js',
  });
})
