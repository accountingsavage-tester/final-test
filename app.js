const d=document.getElementById('d'),a=document.getElementById('a'),k=document.getElementById('karaoke'),p=document.getElementById('prev'),c=document.getElementById('current'),n=document.getElementById('next'),r=document.getElementById('result');
function A(x){d.value+=x}function C(){d.value=''}function B(){d.value=d.value.slice(0,-1)}
let lines=[],dur=0,started=false;
Promise.all(['lyrics1.txt','lyrics2.txt','lyrics3.txt','lyrics4.txt'].map(x=>fetch(x).then(q=>q.text()))).then(xs=>{lines=xs.join('\n').split('\n').map(x=>x.trim()).filter(Boolean)});
function E(){let x=d.value.replace(/\s/g,'');if(!x)return;if(x==='1+1'){d.value='2';started=true;a.currentTime=0;a.play().catch(()=>{});return}try{if(!/^[0-9+\-*/().]+$/.test(x))throw Error();d.value=Function('return '+x)()}catch{d.value='Error'}}
a.addEventListener('loadedmetadata',()=>dur=a.duration);
a.addEventListener('timeupdate',()=>{if(!started||!lines.length||!isFinite(a.duration))return;let q=Math.min(lines.length-1,Math.floor((a.currentTime/a.duration)*lines.length));if(a.currentTime<1||a.currentTime>=a.duration){k.classList.remove('active');return}p.textContent=lines[q-1]||'';c.textContent=lines[q]||'';n.textContent=lines[q+1]||'';k.classList.add('active')});
a.addEventListener('ended',()=>{started=false;k.classList.remove('active');r.textContent='2'});
d.addEventListener('keydown',e=>{if(/[0-9+\-*/().]/.test(e.key))A(e.key);else if(e.key==='Enter')E();else if(e.key==='Backspace')B();else if(e.key==='Escape')C()});