chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    title: 'Send to Simplepush',
    id: 'menu1',
    contexts: ['all']
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "menu1") {
    if (localStorage.getItem('key')) {
      if (info.selectionText) {
	send(localStorage.getItem('key'), undefined, info.selectionText, undefined, false);
      } else if(info.mediaType == "image") {
	send(localStorage.getItem('key'), undefined, info.srcUrl, undefined, false);
      } else {
	getCurrentTabUrl(function(url) {
	  send(localStorage.getItem('key'), undefined, url, undefined, false);
	});
      }
    } else {
      chrome.runtime.openOptionsPage();
    }
  }
});
