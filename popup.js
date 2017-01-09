document.addEventListener('DOMContentLoaded', function() {
  $('#send-manual').hide();
  
  $('#tab').click(function() {
    if (!localStorage.getItem('key')) {
      chrome.runtime.openOptionsPage();
    } else {
      chrome.runtime.getBackgroundPage(function(bgPage) {
	bgPage.getCurrentTabUrl(function(url) {
	  bgPage.send(localStorage.getItem('key'), undefined, url, undefined, false);
	});
      });
    }
  });
  
  $('#manual').click(function() {
    if (localStorage.getItem('key')) {
      $('#key').val(localStorage.getItem('key'));
    }
    
    $('#options').hide();
    $('#send-manual').show();
  });
  
  $('#settings').click(function() {
    chrome.runtime.openOptionsPage();
  });
  
  $('#send-button').click(function() {
    chrome.runtime.getBackgroundPage(function(bgPage) {
      bgPage.send($('#key').val(), $('#title').val(), $('#message').val(), $('#event').val(), false);
    });
  });
  
  $('#cancel-button').click(function() {
    $('#options').show();
    $('#send-manual').hide();
    
    $('#key').val('');
    $('#title').val('');
    $('#message').val('');
    $('#event').val('');
  });
});
