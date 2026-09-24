const r=document.documentElement,K='ea-theme';
r.dataset.theme=localStorage.getItem(K)||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');
document.getElementById('theme').onclick=()=>{r.dataset.theme=r.dataset.theme==='dark'?'light':'dark';localStorage.setItem(K,r.dataset.theme)};
const nav=document.querySelector('nav'),mb=document.getElementById('menu');
mb.onclick=()=>{const o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const fa=n=>n.toString().replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const co=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);const el=x.target,t=+el.dataset.n,p=el.dataset.p||'',s=el.dataset.s||'',t0=performance.now();
(function f(t1){const k=Math.min((t1-t0)/1600,1),v=Math.round(t*(1-Math.pow(1-k,3)));el.textContent=p+fa(v)+s;if(k<1)requestAnimationFrame(f)})(t0)}),{threshold:.4});
document.querySelectorAll('[data-n]').forEach(e=>co.observe(e));
const f=document.getElementById('cf');if(f)f.onsubmit=e=>{e.preventDefault();document.getElementById('ok').style.display='block';f.reset()};
/* neural network background */
const c=document.getElementById('net'),g=c.getContext('2d');let W,H,P=[];
function rs(){W=c.width=innerWidth;H=c.height=innerHeight;P=Array.from({length:Math.min(70,Math.floor(W*H/22000))},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
rs();addEventListener('resize',rs);
const m={x:-999,y:-999};addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});
function draw(){g.clearRect(0,0,W,H);const d=r.dataset.theme==='dark',col=d?'80,160,255':'31,107,255';
P.forEach((a,i)=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
g.fillStyle=`rgba(${col},.7)`;g.beginPath();g.arc(a.x,a.y,2,0,7);g.fill();
for(let j=i+1;j<P.length;j++){const b=P[j],q=Math.hypot(a.x-b.x,a.y-b.y);if(q<140){g.strokeStyle=`rgba(${col},${(1-q/140)*.28})`;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke()}}
const q=Math.hypot(a.x-m.x,a.y-m.y);if(q<170){g.strokeStyle=`rgba(0,220,255,${(1-q/170)*.5})`;g.beginPath();g.moveTo(a.x,a.y);g.lineTo(m.x,m.y);g.stroke()}});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)requestAnimationFrame(draw)}
draw();
