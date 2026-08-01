const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-header nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
document.querySelectorAll('.site-header nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.dish-card').forEach(card=>card.classList.toggle('is-hidden',filter!=='all'&&!card.dataset.category.split(' ').includes(filter)));}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));