"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{2859:function(t,e,n){n.d(e,{x7:function(){return _},Me:function(){return H},oo:function(){return B},RR:function(){return J},cv:function(){return N},uY:function(){return V}});let r=Math.min,i=Math.max,o=Math.round,l=Math.floor,u=t=>({x:t,y:t}),f={left:"right",right:"left",bottom:"top",top:"bottom"},c={start:"end",end:"start"};function a(t,e){return"function"==typeof t?t(e):t}function s(t){return t.split("-")[0]}function d(t){return t.split("-")[1]}function p(t){return"x"===t?"y":"x"}function h(t){return"y"===t?"height":"width"}function m(t){return["top","bottom"].includes(s(t))?"y":"x"}function g(t){return t.replace(/start|end/g,t=>c[t])}function w(t){return t.replace(/left|right|bottom|top/g,t=>f[t])}function y(t){return"number"!=typeof t?{top:0,right:0,bottom:0,left:0,...t}:{top:t,right:t,bottom:t,left:t}}function x(t){let{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function v(t,e,n){let r,{reference:i,floating:o}=t,l=m(e),u=p(m(e)),f=h(u),c=s(e),a="y"===l,g=i.x+i.width/2-o.width/2,w=i.y+i.height/2-o.height/2,y=i[f]/2-o[f]/2;switch(c){case"top":r={x:g,y:i.y-o.height};break;case"bottom":r={x:g,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:w};break;case"left":r={x:i.x-o.width,y:w};break;default:r={x:i.x,y:i.y}}switch(d(e)){case"start":r[u]-=y*(n&&a?-1:1);break;case"end":r[u]+=y*(n&&a?-1:1)}return r}let b=async(t,e,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,u=o.filter(Boolean),f=await (null==l.isRTL?void 0:l.isRTL(e)),c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:s}=v(c,r,f),d=r,p={},h=0;for(let n=0;n<u.length;n++){let{name:o,fn:m}=u[n],{x:g,y:w,data:y,reset:x}=await m({x:a,y:s,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});a=null!=g?g:a,s=null!=w?w:s,p={...p,[o]:{...p[o],...y}},x&&h<=50&&(h++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(c=!0===x.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:a,y:s}=v(c,d,f)),n=-1)}return{x:a,y:s,placement:d,strategy:i,middlewareData:p}};async function R(t,e){var n;void 0===e&&(e={});let{x:r,y:i,platform:o,rects:l,elements:u,strategy:f}=t,{boundary:c="clippingAncestors",rootBoundary:s="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=a(e,t),m=y(h),g=u[p?"floating"===d?"reference":"floating":d],w=x(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(u.floating)),boundary:c,rootBoundary:s,strategy:f})),v="floating"===d?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,b=await (null==o.getOffsetParent?void 0:o.getOffsetParent(u.floating)),R=await (null==o.isElement?void 0:o.isElement(b))&&await (null==o.getScale?void 0:o.getScale(b))||{x:1,y:1},L=x(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:v,offsetParent:b,strategy:f}):v);return{top:(w.top-L.top+m.top)/R.y,bottom:(L.bottom-w.bottom+m.bottom)/R.y,left:(w.left-L.left+m.left)/R.x,right:(L.right-w.right+m.right)/R.x}}async function L(t,e){let{placement:n,platform:r,elements:i}=t,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=s(n),u=d(n),f="y"===m(n),c=["left","top"].includes(l)?-1:1,p=o&&f?-1:1,h=a(e,t),{mainAxis:g,crossAxis:w,alignmentAxis:y}="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return u&&"number"==typeof y&&(w="end"===u?-1*y:y),f?{x:w*p,y:g*c}:{x:g*c,y:w*p}}var T=n(4046);function k(t){let e=(0,T.Dx)(t),n=parseFloat(e.width)||0,r=parseFloat(e.height)||0,i=(0,T.Re)(t),l=i?t.offsetWidth:n,u=i?t.offsetHeight:r,f=o(n)!==l||o(r)!==u;return f&&(n=l,r=u),{width:n,height:r,$:f}}function P(t){return(0,T.kK)(t)?t:t.contextElement}function E(t){let e=P(t);if(!(0,T.Re)(e))return u(1);let n=e.getBoundingClientRect(),{width:r,height:i,$:l}=k(e),f=(l?o(n.width):n.width)/r,c=(l?o(n.height):n.height)/i;return f&&Number.isFinite(f)||(f=1),c&&Number.isFinite(c)||(c=1),{x:f,y:c}}let D=u(0);function A(t){let e=(0,T.Jj)(t);return(0,T.Pf)()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:D}function O(t,e,n,r){var i;void 0===e&&(e=!1),void 0===n&&(n=!1);let o=t.getBoundingClientRect(),l=P(t),f=u(1);e&&(r?(0,T.kK)(r)&&(f=E(r)):f=E(t));let c=(void 0===(i=n)&&(i=!1),r&&(!i||r===(0,T.Jj)(l))&&i)?A(l):u(0),a=(o.left+c.x)/f.x,s=(o.top+c.y)/f.y,d=o.width/f.x,p=o.height/f.y;if(l){let t=(0,T.Jj)(l),e=r&&(0,T.kK)(r)?(0,T.Jj)(r):r,n=t,i=(0,T.wK)(n);for(;i&&r&&e!==n;){let t=E(i),e=i.getBoundingClientRect(),r=(0,T.Dx)(i),o=e.left+(i.clientLeft+parseFloat(r.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(r.paddingTop))*t.y;a*=t.x,s*=t.y,d*=t.x,p*=t.y,a+=o,s+=l,n=(0,T.Jj)(i),i=(0,T.wK)(n)}}return x({width:d,height:p,x:a,y:s})}function F(t,e){let n=(0,T.Lw)(t).scrollLeft;return e?e.left+n:O((0,T.tF)(t)).left+n}function C(t,e,n){let r;if("viewport"===e)r=function(t,e){let n=(0,T.Jj)(t),r=(0,T.tF)(t),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,u=0,f=0;if(i){o=i.width,l=i.height;let t=(0,T.Pf)();(!t||t&&"fixed"===e)&&(u=i.offsetLeft,f=i.offsetTop)}return{width:o,height:l,x:u,y:f}}(t,n);else if("document"===e)r=function(t){let e=(0,T.tF)(t),n=(0,T.Lw)(t),r=t.ownerDocument.body,o=i(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),l=i(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight),u=-n.scrollLeft+F(t),f=-n.scrollTop;return"rtl"===(0,T.Dx)(r).direction&&(u+=i(e.clientWidth,r.clientWidth)-o),{width:o,height:l,x:u,y:f}}((0,T.tF)(t));else if((0,T.kK)(e))r=function(t,e){let n=O(t,!0,"fixed"===e),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=(0,T.Re)(t)?E(t):u(1),l=t.clientWidth*o.x;return{width:l,height:t.clientHeight*o.y,x:i*o.x,y:r*o.y}}(e,n);else{let n=A(t);r={...e,x:e.x-n.x,y:e.y-n.y}}return x(r)}function S(t){return"static"===(0,T.Dx)(t).position}function K(t,e){if(!(0,T.Re)(t)||"fixed"===(0,T.Dx)(t).position)return null;if(e)return e(t);let n=t.offsetParent;return(0,T.tF)(t)===n&&(n=n.ownerDocument.body),n}function M(t,e){let n=(0,T.Jj)(t);if((0,T.tR)(t))return n;if(!(0,T.Re)(t)){let e=(0,T.Ow)(t);for(;e&&!(0,T.Py)(e);){if((0,T.kK)(e)&&!S(e))return e;e=(0,T.Ow)(e)}return n}let r=K(t,e);for(;r&&(0,T.Ze)(r)&&S(r);)r=K(r,e);return r&&(0,T.Py)(r)&&S(r)&&!(0,T.hT)(r)?n:r||(0,T.gQ)(t)||n}let j=async function(t){let e=this.getOffsetParent||M,n=this.getDimensions,r=await n(t.floating);return{reference:function(t,e,n){let r=(0,T.Re)(e),i=(0,T.tF)(e),o="fixed"===n,l=O(t,!0,o,e),f={scrollLeft:0,scrollTop:0},c=u(0);if(r||!r&&!o){if(("body"!==(0,T.wk)(e)||(0,T.ao)(i))&&(f=(0,T.Lw)(e)),r){let t=O(e,!0,o,e);c.x=t.x+e.clientLeft,c.y=t.y+e.clientTop}else i&&(c.x=F(i))}let a=0,s=0;if(i&&!r&&!o){let t=i.getBoundingClientRect();s=t.top+f.scrollTop,a=t.left+f.scrollLeft-F(i,t)}return{x:l.left+f.scrollLeft-c.x-a,y:l.top+f.scrollTop-c.y-s,width:l.width,height:l.height}}(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},W={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t,o="fixed"===i,l=(0,T.tF)(r),f=!!e&&(0,T.tR)(e.floating);if(r===l||f&&o)return n;let c={scrollLeft:0,scrollTop:0},a=u(1),s=u(0),d=(0,T.Re)(r);if((d||!d&&!o)&&(("body"!==(0,T.wk)(r)||(0,T.ao)(l))&&(c=(0,T.Lw)(r)),(0,T.Re)(r))){let t=O(r);a=E(r),s.x=t.x+r.clientLeft,s.y=t.y+r.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+s.x,y:n.y*a.y-c.scrollTop*a.y+s.y}},getDocumentElement:T.tF,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:l}=t,u=[..."clippingAncestors"===n?(0,T.tR)(e)?[]:function(t,e){let n=e.get(t);if(n)return n;let r=(0,T.Kx)(t,[],!1).filter(t=>(0,T.kK)(t)&&"body"!==(0,T.wk)(t)),i=null,o="fixed"===(0,T.Dx)(t).position,l=o?(0,T.Ow)(t):t;for(;(0,T.kK)(l)&&!(0,T.Py)(l);){let e=(0,T.Dx)(l),n=(0,T.hT)(l);n||"fixed"!==e.position||(i=null),(o?!n&&!i:!n&&"static"===e.position&&!!i&&["absolute","fixed"].includes(i.position)||(0,T.ao)(l)&&!n&&function t(e,n){let r=(0,T.Ow)(e);return!(r===n||!(0,T.kK)(r)||(0,T.Py)(r))&&("fixed"===(0,T.Dx)(r).position||t(r,n))}(t,l))?r=r.filter(t=>t!==l):i=e,l=(0,T.Ow)(l)}return e.set(t,r),r}(e,this._c):[].concat(n),o],f=u[0],c=u.reduce((t,n)=>{let o=C(e,n,l);return t.top=i(o.top,t.top),t.right=r(o.right,t.right),t.bottom=r(o.bottom,t.bottom),t.left=i(o.left,t.left),t},C(e,f,l));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:M,getElementRects:j,getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){let{width:e,height:n}=k(t);return{width:e,height:n}},getScale:E,isElement:T.kK,isRTL:function(t){return"rtl"===(0,T.Dx)(t).direction}};function H(t,e,n,o){let u;void 0===o&&(o={});let{ancestorScroll:f=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=o,p=P(t),h=f||c?[...p?(0,T.Kx)(p):[],...(0,T.Kx)(e)]:[];h.forEach(t=>{f&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)});let m=p&&s?function(t,e){let n,o=null,u=(0,T.tF)(t);function f(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return!function c(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),f();let{left:d,top:p,width:h,height:m}=t.getBoundingClientRect();if(a||e(),!h||!m)return;let g=l(p),w=l(u.clientWidth-(d+h)),y={rootMargin:-g+"px "+-w+"px "+-l(u.clientHeight-(p+m))+"px "+-l(d)+"px",threshold:i(0,r(1,s))||1},x=!0;function v(t){let e=t[0].intersectionRatio;if(e!==s){if(!x)return c();e?c(!1,e):n=setTimeout(()=>{c(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(v,{...y,root:u.ownerDocument})}catch(t){o=new IntersectionObserver(v,y)}o.observe(t)}(!0),f}(p,n):null,g=-1,w=null;a&&(w=new ResizeObserver(t=>{let[r]=t;r&&r.target===p&&w&&(w.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var t;null==(t=w)||t.observe(e)})),n()}),p&&!d&&w.observe(p),w.observe(e));let y=d?O(t):null;return d&&function e(){let r=O(t);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,u=requestAnimationFrame(e)}(),n(),()=>{var t;h.forEach(t=>{f&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)}),null==m||m(),null==(t=w)||t.disconnect(),w=null,d&&cancelAnimationFrame(u)}}let N=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,r;let{x:i,y:o,placement:l,middlewareData:u}=e,f=await L(e,t);return l===(null==(n=u.offset)?void 0:n.placement)&&null!=(r=u.arrow)&&r.alignmentOffset?{}:{x:i+f.x,y:o+f.y,data:{...f,placement:l}}}}},V=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){let{x:n,y:o,placement:l}=e,{mainAxis:u=!0,crossAxis:f=!1,limiter:c={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...d}=a(t,e),h={x:n,y:o},g=await R(e,d),w=m(s(l)),y=p(w),x=h[y],v=h[w];if(u){let t="y"===y?"top":"left",e="y"===y?"bottom":"right",n=x+g[t],o=x-g[e];x=i(n,r(x,o))}if(f){let t="y"===w?"top":"left",e="y"===w?"bottom":"right",n=v+g[t],o=v-g[e];v=i(n,r(v,o))}let b=c.fn({...e,[y]:x,[w]:v});return{...b,data:{x:b.x-n,y:b.y-o,enabled:{[y]:u,[w]:f}}}}}},J=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,r,i,o,l;let{placement:u,middlewareData:f,rects:c,initialPlacement:y,platform:x,elements:v}=e,{mainAxis:b=!0,crossAxis:L=!0,fallbackPlacements:T,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:P="none",flipAlignment:E=!0,...D}=a(t,e);if(null!=(n=f.arrow)&&n.alignmentOffset)return{};let A=s(u),O=m(y),F=s(y)===y,C=await (null==x.isRTL?void 0:x.isRTL(v.floating)),S=T||(F||!E?[w(y)]:function(t){let e=w(t);return[g(t),e,g(e)]}(y)),K="none"!==P;!T&&K&&S.push(...function(t,e,n,r){let i=d(t),o=function(t,e,n){let r=["left","right"],i=["right","left"];switch(t){case"top":case"bottom":if(n)return e?i:r;return e?r:i;case"left":case"right":return e?["top","bottom"]:["bottom","top"];default:return[]}}(s(t),"start"===n,r);return i&&(o=o.map(t=>t+"-"+i),e&&(o=o.concat(o.map(g)))),o}(y,E,P,C));let M=[y,...S],j=await R(e,D),W=[],H=(null==(r=f.flip)?void 0:r.overflows)||[];if(b&&W.push(j[A]),L){let t=function(t,e,n){void 0===n&&(n=!1);let r=d(t),i=p(m(t)),o=h(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return e.reference[o]>e.floating[o]&&(l=w(l)),[l,w(l)]}(u,c,C);W.push(j[t[0]],j[t[1]])}if(H=[...H,{placement:u,overflows:W}],!W.every(t=>t<=0)){let t=((null==(i=f.flip)?void 0:i.index)||0)+1,e=M[t];if(e)return{data:{index:t,overflows:H},reset:{placement:e}};let n=null==(o=H.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:o.placement;if(!n)switch(k){case"bestFit":{let t=null==(l=H.filter(t=>{if(K){let e=m(t.placement);return e===O||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:l[0];t&&(n=t);break}case"initialPlacement":n=y}if(u!==n)return{reset:{placement:n}}}return{}}}},_=t=>({name:"arrow",options:t,async fn(e){let{x:n,y:o,placement:l,rects:u,platform:f,elements:c,middlewareData:s}=e,{element:g,padding:w=0}=a(t,e)||{};if(null==g)return{};let x=y(w),v={x:n,y:o},b=p(m(l)),R=h(b),L=await f.getDimensions(g),T="y"===b,k=T?"clientHeight":"clientWidth",P=u.reference[R]+u.reference[b]-v[b]-u.floating[R],E=v[b]-u.reference[b],D=await (null==f.getOffsetParent?void 0:f.getOffsetParent(g)),A=D?D[k]:0;A&&await (null==f.isElement?void 0:f.isElement(D))||(A=c.floating[k]||u.floating[R]);let O=A/2-L[R]/2-1,F=r(x[T?"top":"left"],O),C=r(x[T?"bottom":"right"],O),S=A-L[R]-C,K=A/2-L[R]/2+(P/2-E/2),M=i(F,r(K,S)),j=!s.arrow&&null!=d(l)&&K!==M&&u.reference[R]/2-(K<F?F:C)-L[R]/2<0,W=j?K<F?K-F:K-S:0;return{[b]:v[b]+W,data:{[b]:M,centerOffset:K-M-W,...j&&{alignmentOffset:W}},reset:j}}}),B=(t,e,n)=>{let r=new Map,i={platform:W,...n},o={...i.platform,_c:r};return b(t,e,{...i,platform:o})}},7859:function(t,e,n){n.d(e,{RR:function(){return m},YF:function(){return s},cv:function(){return p},uY:function(){return h},x7:function(){return g}});var r=n(2859),i=n(2265),o=n(4887),l="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function u(t,e){let n,r,i;if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if((n=t.length)!==e.length)return!1;for(r=n;0!=r--;)if(!u(t[r],e[r]))return!1;return!0}if((n=(i=Object.keys(t)).length)!==Object.keys(e).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(e,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!t.$$typeof)&&!u(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}function f(t){return"undefined"==typeof window?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function c(t,e){let n=f(t);return Math.round(e*n)/n}function a(t){let e=i.useRef(t);return l(()=>{e.current=t}),e}function s(t){void 0===t&&(t={});let{placement:e="bottom",strategy:n="absolute",middleware:s=[],platform:d,elements:{reference:p,floating:h}={},transform:m=!0,whileElementsMounted:g,open:w}=t,[y,x]=i.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[v,b]=i.useState(s);u(v,s)||b(s);let[R,L]=i.useState(null),[T,k]=i.useState(null),P=i.useCallback(t=>{t!==O.current&&(O.current=t,L(t))},[]),E=i.useCallback(t=>{t!==F.current&&(F.current=t,k(t))},[]),D=p||R,A=h||T,O=i.useRef(null),F=i.useRef(null),C=i.useRef(y),S=null!=g,K=a(g),M=a(d),j=a(w),W=i.useCallback(()=>{if(!O.current||!F.current)return;let t={placement:e,strategy:n,middleware:v};M.current&&(t.platform=M.current),(0,r.oo)(O.current,F.current,t).then(t=>{let e={...t,isPositioned:!1!==j.current};H.current&&!u(C.current,e)&&(C.current=e,o.flushSync(()=>{x(e)}))})},[v,e,n,M,j]);l(()=>{!1===w&&C.current.isPositioned&&(C.current.isPositioned=!1,x(t=>({...t,isPositioned:!1})))},[w]);let H=i.useRef(!1);l(()=>(H.current=!0,()=>{H.current=!1}),[]),l(()=>{if(D&&(O.current=D),A&&(F.current=A),D&&A){if(K.current)return K.current(D,A,W);W()}},[D,A,W,K,S]);let N=i.useMemo(()=>({reference:O,floating:F,setReference:P,setFloating:E}),[P,E]),V=i.useMemo(()=>({reference:D,floating:A}),[D,A]),J=i.useMemo(()=>{let t={position:n,left:0,top:0};if(!V.floating)return t;let e=c(V.floating,y.x),r=c(V.floating,y.y);return m?{...t,transform:"translate("+e+"px, "+r+"px)",...f(V.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:e,top:r}},[n,m,V.floating,y.x,y.y]);return i.useMemo(()=>({...y,update:W,refs:N,elements:V,floatingStyles:J}),[y,W,N,V,J])}let d=t=>({name:"arrow",options:t,fn(e){let{element:n,padding:i}="function"==typeof t?t(e):t;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?(0,r.x7)({element:n.current,padding:i}).fn(e):{}:n?(0,r.x7)({element:n,padding:i}).fn(e):{}}}),p=(t,e)=>({...(0,r.cv)(t),options:[t,e]}),h=(t,e)=>({...(0,r.uY)(t),options:[t,e]}),m=(t,e)=>({...(0,r.RR)(t),options:[t,e]}),g=(t,e)=>({...d(t),options:[t,e]})},9750:function(t,e,n){n.d(e,{AW:function(){return i},G6:function(){return c},MM:function(){return p},Me:function(){return m},Pe:function(){return g},U9:function(){return w},V5:function(){return s},cr:function(){return f},ex:function(){return h},j7:function(){return y},r:function(){return d},r3:function(){return o}});var r=n(4046);function i(t){let e=t.activeElement;for(;(null==(n=e)||null==(n=n.shadowRoot)?void 0:n.activeElement)!=null;){var n;e=e.shadowRoot.activeElement}return e}function o(t,e){if(!t||!e)return!1;let n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){let n=e;for(;n;){if(t===n)return!0;n=n.parentNode||n.host}}return!1}function l(){let t=navigator.userAgentData;return null!=t&&t.platform?t.platform:navigator.platform}function u(){let t=navigator.userAgentData;return t&&Array.isArray(t.brands)?t.brands.map(t=>{let{brand:e,version:n}=t;return e+"/"+n}).join(" "):navigator.userAgent}function f(t){return!u().includes("jsdom/")&&(!a()&&0===t.width&&0===t.height||a()&&1===t.width&&1===t.height&&0===t.pressure&&0===t.detail&&"mouse"===t.pointerType||t.width<1&&t.height<1&&0===t.pressure&&0===t.detail&&"touch"===t.pointerType)}function c(){return/apple/i.test(navigator.vendor)}function a(){let t=/android/i;return t.test(l())||t.test(u())}function s(){return l().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function d(t,e){let n=["mouse","pen"];return e||n.push("",void 0),n.includes(t)}function p(t){return"nativeEvent"in t}function h(t){return t.matches("html,body")}function m(t){return(null==t?void 0:t.ownerDocument)||document}function g(t,e){return null!=e&&("composedPath"in t?t.composedPath().includes(e):null!=t.target&&e.contains(t.target))}function w(t){return"composedPath"in t?t.composedPath()[0]:t.target}function y(t){return(0,r.Re)(t)&&t.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}},4046:function(t,e,n){function r(){return"undefined"!=typeof window}function i(t){return u(t)?(t.nodeName||"").toLowerCase():"#document"}function o(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function l(t){var e;return null==(e=(u(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function u(t){return!!r()&&(t instanceof Node||t instanceof o(t).Node)}function f(t){return!!r()&&(t instanceof Element||t instanceof o(t).Element)}function c(t){return!!r()&&(t instanceof HTMLElement||t instanceof o(t).HTMLElement)}function a(t){return!!r()&&"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof o(t).ShadowRoot)}function s(t){let{overflow:e,overflowX:n,overflowY:r,display:i}=y(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function d(t){return["table","td","th"].includes(i(t))}function p(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch(t){return!1}})}function h(t){let e=g(),n=f(t)?y(t):t;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(t=>(n.willChange||"").includes(t))||["paint","layout","strict","content"].some(t=>(n.contain||"").includes(t))}function m(t){let e=v(t);for(;c(e)&&!w(e);){if(h(e))return e;if(p(e))break;e=v(e)}return null}function g(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function w(t){return["html","body","#document"].includes(i(t))}function y(t){return o(t).getComputedStyle(t)}function x(t){return f(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function v(t){if("html"===i(t))return t;let e=t.assignedSlot||t.parentNode||a(t)&&t.host||l(t);return a(e)?e.host:e}function b(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}n.d(e,{Dx:function(){return y},Jj:function(){return o},Kx:function(){return function t(e,n,r){var i;void 0===n&&(n=[]),void 0===r&&(r=!0);let l=function t(e){let n=v(e);return w(n)?e.ownerDocument?e.ownerDocument.body:e.body:c(n)&&s(n)?n:t(n)}(e),u=l===(null==(i=e.ownerDocument)?void 0:i.body),f=o(l);if(u){let e=b(f);return n.concat(f,f.visualViewport||[],s(l)?l:[],e&&r?t(e):[])}return n.concat(l,t(l,[],r))}},Lw:function(){return x},Ow:function(){return v},Pf:function(){return g},Py:function(){return w},Re:function(){return c},Ze:function(){return d},Zq:function(){return a},ao:function(){return s},gQ:function(){return m},hT:function(){return h},kK:function(){return f},tF:function(){return l},tR:function(){return p},wK:function(){return b},wk:function(){return i}})}}]);