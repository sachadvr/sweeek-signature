function E(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(B)}function O(t){return typeof t=="function"}function ht(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function mt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function U(t){return Object.keys(t).length===0}function V(t,...n){if(t==null)return E;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function pt(t,n,e){t.$$.on_destroy.push(V(n,e))}function gt(t,n,e,i){if(t){const r=q(t,n,e,i);return t[0](r)}}function q(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=n.dirty[l]|r[l];return o}return n.dirty|r}return n.dirty}function xt(t,n,e,i,r,o){if(r){const s=q(n,e,i,o);t.p(s,r)}}function bt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function $t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function Et(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let T=!1;function X(){T=!0}function Y(){T=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:Z(1,r,x=>n[e[x]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function nt(t,n){if(T){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){T&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function wt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function Tt(){return S(" ")}function Nt(){return S("")}function At(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function rt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t,n){for(const e in n)rt(t,e,n[e])}function kt(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function st(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){z(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function W(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(n))}function St(t,n,e){return W(t,n,e,G)}function Mt(t,n,e){return W(t,n,e,R)}function ct(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Lt(t){return ct(t," ")}function j(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Ht(t,n){const e=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",e);if(e===i)return new P(void 0,n);z(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(o,n)}function Ct(t,n){n=""+n,t.data!==n&&(t.data=n)}function jt(t,n){t.value=n??""}function Pt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Dt(t,n,e){t.classList[e?"add":"remove"](n)}function Bt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}class ot{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=R(e.nodeName):this.e=G(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class P extends ot{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}function Ot(t,n){return new t(n)}let g;function p(t){g=t}function M(){if(!g)throw new Error("Function called outside component initialization");return g}function qt(t){M().$$.on_mount.push(t)}function Gt(t){M().$$.after_update.push(t)}function Rt(t){return M().$$.context.get(t)}function zt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],D=[];let m=[];const A=[],I=Promise.resolve();let v=!1;function J(){v||(v=!0,I.then(K))}function Ft(){return J(),I}function k(t){m.push(t)}function Wt(t){A.push(t)}const N=new Set;let d=0;function K(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const n=h[d];d++,p(n),lt(n.$$)}}catch(n){throw h.length=0,d=0,n}for(p(null),h.length=0,d=0;D.length;)D.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];N.has(e)||(N.add(e),e())}m.length=0}while(h.length);for(;A.length;)A.pop()();v=!1,N.clear(),p(t)}function lt(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function ut(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let _;function It(){_={r:0,c:[],p:_}}function Jt(){_.r||y(_.c),_=_.p}function at(t,n){t&&t.i&&($.delete(t),t.i(n))}function Kt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Qt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=n[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Ut(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Xt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const s=t.$$.on_mount.map(B).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),o.forEach(k)}function _t(t,n){const e=t.$$;e.fragment!==null&&(ut(e.after_update),y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Yt(t,n,e,i,r,o,s,l=[-1]){const c=g;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:E,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,x,...L)=>{const H=L.length?L[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=H)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](H),f&&dt(t,a)),x}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){X();const a=st(n.target);u.fragment&&u.fragment.l(a),a.forEach(w)}else u.fragment&&u.fragment.c();n.intro&&at(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),Y(),K()}p(c)}class Zt{$destroy(){_t(this,1),this.$destroy=E}$on(n,e){if(!O(e))return E;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ht as $,ft as A,_t as B,gt as C,Bt as D,nt as E,xt as F,bt as G,yt as H,E as I,pt as J,jt as K,At as L,O as M,y as N,Q as O,R as P,Mt as Q,vt as R,Zt as S,Qt as T,Et as U,Rt as V,$t as W,zt as X,kt as Y,Ut as Z,P as _,Tt as a,mt as a0,Wt as a1,wt as a2,Dt as a3,it as b,Lt as c,Kt as d,Nt as e,Jt as f,at as g,w as h,Yt as i,Gt as j,G as k,St as l,st as m,rt as n,qt as o,Pt as p,S as q,ct as r,ht as s,Ft as t,Ct as u,It as v,D as w,Ot as x,Vt as y,Xt as z};