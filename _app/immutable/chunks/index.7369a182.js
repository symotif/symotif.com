function w(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(L)}function T(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function H(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(H(e,n))}function at(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(e.dirty.length,r.length);for(let u=0;u<l;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,s){if(r){const l=q(e,n,i,s);t.p(l,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const I=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in I;let $=!1;function G(){$=!0}function J(){$=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:K(1,r,b=>e[n[b]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const s=[],l=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);u>=c;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);s.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<s.length&&l[c].claim_order>=s[o].claim_order;)o++;const f=o<s.length?s[o]:null;t.insertBefore(l[c],f)}}function R(t,e){if($){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){$&&!n?R(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function mt(){return S(" ")}function pt(){return S("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const c=n(u);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const c=n(u);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let l=0;l<r.attributes.length;l++){const u=r.attributes[l];n[u.name]||s.push(u.name)}s.forEach(l=>r.removeAttribute(l))},()=>i(e))}function bt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function xt(t){return tt(t," ")}function wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function $t(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function vt(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e){return new t(e)}let y;function p(t){y=t}function O(){if(!y)throw new Error("Function called outside component initialization");return y}function Nt(t){O().$$.on_mount.push(t)}function St(t){O().$$.after_update.push(t)}const h=[],M=[];let m=[];const C=[],P=Promise.resolve();let E=!1;function W(){E||(E=!0,P.then(z))}function At(){return W(),P}function N(t){m.push(t)}const v=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;C.length;)C.pop()();E=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const x=new Set;let d;function jt(){d={r:0,c:[],p:d}}function kt(){d.r||g(d.c),d=d.p}function it(t,e){t&&t.i&&(x.delete(t),t.i(e))}function Mt(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const rt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...rt];function Ct(t){t&&t.c()}function Lt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||N(()=>{const l=t.$$.on_mount.map(L).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),s.forEach(N)}function ct(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){t.$$.dirty[0]===-1&&(h.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Tt(t,e,n,i,r,s,l,u=[-1]){const c=y;p(t);const o=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};l&&l(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,b,...A)=>{const j=A.length?A[0]:b;return o.ctx&&r(o.ctx[a],o.ctx[a]=j)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](j),f&&ot(t,a)),b}):[],o.update(),f=!0,g(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){G();const a=X(e.target);o.fragment&&o.fragment.l(a),a.forEach(U)}else o.fragment&&o.fragment.c();e.intro&&it(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),J(),z()}p(c)}class qt{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!T(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,ct as B,at as C,dt as D,_t as E,ft as F,R as G,w as H,st as I,vt as J,yt as K,g as L,qt as S,mt as a,ht as b,xt as c,Mt as d,pt as e,kt as f,it as g,U as h,Tt as i,St as j,V as k,bt as l,X as m,gt as n,Nt as o,$t as p,S as q,tt as r,ut as s,At as t,wt as u,jt as v,M as w,Et as x,Ct as y,Lt as z};
