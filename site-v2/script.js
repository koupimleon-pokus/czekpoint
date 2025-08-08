// Shared helpers
export function qs(sel,root=document){return root.querySelector(sel)}
export function qsa(sel,root=document){return [...root.querySelectorAll(sel)]}
export const store = {
  get(k,def){ try{ return JSON.parse(localStorage.getItem(k)) ?? def }catch(e){ return def } },
  set(k,v){ localStorage.setItem(k, JSON.stringify(v)) }
}
export function navActivate(){
  const path = location.pathname.split('/').pop() || 'index.html';
  qsa('footer.nav a').forEach(a=>{ if((a.getAttribute('href')||'index.html')===path) a.style.fontWeight='800' })
}
