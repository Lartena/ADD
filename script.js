html {document.addEventListener('DOMContentLoaded', () => {
  // All contact setup & menu event handlers here
});
     const qt = new URLSearchParams(location.search).get('t');
if (qt) setPick(qt);
     const menu=o=>{hdr.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)};
bg.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();menu(!hdr.classList.contains('open'))});
addEventListener('keydown',e=>{if(e.key=='Escape')menu(false)});
document.addEventListener('click',e=>{if(hdr.classList.contains('open')&&!hdr.contains(e.target))menu(false)});

const goTo=id=>{const t=document.getElementById(id);if(!t)return false;menu(false);t.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});try{history.replaceState(null,'','#'+id)}catch(_){}return true};
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const id=a.getAttribute('href').slice(1);if(goTo(id))e.preventDefault()});
     email:'ADD.sites.company@gmail.com',
       CONFIG.email&&{k:'em',bg:'#4f46e5',t:CONFIG.email,s:'მოგვწერეთ ელფოსტაზე',href:()=>'https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(CONFIG.email)+'&su='+encodeURIComponent('ვებსაიტის შეკვეთა'+(picked?': '+picked:''))+'&body='+encodeURIComponent(msg())}}