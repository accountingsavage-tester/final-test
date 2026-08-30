const d=document.getElementById('d'),a=document.getElementById('a'),l=document.getElementById('l'),t=document.getElementById('t');
function A(x){d.value+=x}function C(){d.value=''}function B(){d.value=d.value.slice(0,-1)}
function E(){let x=d.value.replace(/\s/g,'');if(!x)return;if(x==='1+1'){d.value='2';a.currentTime=0;a.play().catch(console.error);return}try{if(!/^[0-9+\-*/().]+$/.test(x))throw 0;d.value=Function('return '+x)()}catch(e){d.value='Error'}}
Promise.all([fetch('lyrics.txt').then(r=>r.text()),fetch('lyrics2.txt').then(r=>r.text())]).then(x=>t.textContent=x[0]+'\n'+x[1]).catch(e=>console.error(e));
a.addEventListener('timeupdate',()=>{if(a.currentTime>=15&&a.currentTime<60)l.classList.add('on');else if(a.currentTime>=60)l.classList.remove('on')});
a.addEventListener('ended',()=>l.classList.remove('on'));