function submit() {
  localStorage.setItem('key', document.getElementById('key').value);
  window.close();
}

document.getElementById('save').addEventListener("click", submit);
document.getElementById('key').addEventListener("keypress", function(event) {
  if (event.keyCode == 13) submit();
});

document.getElementById('key').value = localStorage.getItem('key');
document.getElementById('key').select();

document.write(chrome.runtime.getManifest().version);
