var API_URL = "https://api.simplepush.io/send";

function send(key, title, message, event, encrypted) {
  var http = new XMLHttpRequest();
  
  http.open("POST", API_URL, true);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  var data = "key=" + key;
  if(typeof title !== "undefined" && title != '') {data += "&title=" + title;}
  data += "&msg=" + message;
  if(typeof event !== "undefined" && event != '') {data += "&event=" + event;}
  
  http.send(data);
  
  return http;
}

function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  
  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    
    console.assert(typeof url == 'string', 'tab.url should be a string');
    
    callback(url);
  });
}
