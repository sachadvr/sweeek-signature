function w(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(O)}function q(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function ft(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return w;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function at(t,n,e){t.$$.on_destroy.push(G(n,e))}function _t(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(n.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function ht(t,n,e,i,r,l){if(r){const o=B(n,e,i,l);t.p(o,r)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let E=!1;function I(){E=!0}function J(){E=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,x=>n[e[x]].claim_order,u))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],o=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);s>=c;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);l.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<l.length&&o[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(o[c],a)}}function U(t,n){if(E){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function gt(t,n,e){E&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function xt(){return A(" ")}function bt(){return A("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){for(const e in n)Z(t,e,n[e])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function L(t,n,e,i){return H(t,r=>r.nodeName===n,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];e[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(n))}function Et(t,n,e){return L(t,n,e,X)}function vt(t,n,e){return L(t,n,e,Y)}function et(t,n){return H(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Nt(t){return et(t," ")}function kt(t,n){n=""+n,t.data!==n&&(t.data=n)}function At(t,n){t.value=n??""}function St(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function jt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${t}_END`?(i-=1,e.push(r)):l===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Ct(t,n){return new t(n)}let y;function p(t){y=t}function S(){if(!y)throw new Error("Function called outside component initialization");return y}function Tt(t){S().$$.on_mount.push(t)}function Mt(t){S().$$.after_update.push(t)}function Dt(t){return S().$$.context.get(t)}function Ot(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],M=[];let m=[];const D=[],P=Promise.resolve();let N=!1;function z(){N||(N=!0,P.then(F))}function qt(){return z(),P}function k(t){m.push(t)}const v=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const n=h[d];d++,p(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;D.length;)D.pop()();N=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function rt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function Bt(){_={r:0,c:[],p:_}}function Ht(){_.r||g(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function Lt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Pt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=n[l];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[l]=s}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function zt(t){t&&t.c()}function Ft(t,n){t&&t.l(n)}function ot(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||k(()=>{const o=t.$$.on_mount.map(O).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),l.forEach(k)}function st(t,n){const e=t.$$;e.fragment!==null&&(rt(e.after_update),g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,r,l,o,s=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:T(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,x,...j)=>{const C=j.length?j[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=C)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](C),a&&ut(t,f)),x}):[],u.update(),a=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){I();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&ct(t.$$.fragment),ot(t,n.target,n.anchor,n.customElement),J(),F()}p(c)}class Wt{$destroy(){st(this,1),this.$destroy=w}$on(n,e){if(!q(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{ot as A,st as B,_t as C,jt as D,U as E,ht as F,mt as G,dt as H,w as I,at as J,R as K,Y as L,vt as M,wt as N,$t as O,Pt as P,g as Q,yt as R,Wt as S,Dt as T,pt as U,Ot as V,At as W,ft as X,xt as a,gt as b,Nt as c,Lt as d,bt as e,Ht as f,ct as g,V as h,Rt as i,Mt as j,X as k,Et as l,tt as m,Z as n,Tt as o,St as p,A as q,et as r,lt as s,qt as t,kt as u,Bt as v,M as w,Ct as x,zt as y,Ft as z};
