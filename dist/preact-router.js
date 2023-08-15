var n=require("preact"),t=require("preact/hooks"),r={};function i(n,t){for(var r in t)n[r]=t[r];return n}function e(n,t,i){var e,o=/(?:\?([^#]*))?(#.*)?$/,u=n.match(o),c={};if(u&&u[1])for(var a=u[1].split("&"),h=0;h<a.length;h++){var s=a[h].split("=");c[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}n=f(n.replace(o,"")),t=f(t||"");for(var v=Math.max(n.length,t.length),d=0;d<v;d++)if(t[d]&&":"===t[d].charAt(0)){var l=t[d].replace(/(^:|[+*?]+$)/g,""),p=(t[d].match(/[+*?]+$/)||r)[0]||"",m=~p.indexOf("+"),y=~p.indexOf("*"),U=n[d]||"";if(!U&&!y&&(p.indexOf("?")<0||m)){e=!1;break}if(c[l]=decodeURIComponent(U),m||y){c[l]=n.slice(d).map(decodeURIComponent).join("/");break}}else if(t[d]!==n[d]){e=!1;break}return(!0===i.default||!1!==e)&&c}function o(n,t){return n.rank<t.rank?1:n.rank>t.rank?-1:n.index-t.index}function u(n,t){return n.index=t,n.rank=function(n){return n.props.default?0:f(n.props.path).map(c).join("")}(n),n.props}function f(n){return n.replace(/(^\/+|\/+$)/g,"").split("/")}function c(n){return":"==n.charAt(0)?1+"*+?".indexOf(n.charAt(n.length-1))||4:5}var a={},h=[],s=[],v=null,d={url:p()},l=n.createContext(d);function p(){var n;return""+((n=v&&v.location?v.location:v&&v.getCurrentLocation?v.getCurrentLocation():"undefined"!=typeof location?location:a).pathname||"")+(n.search||"")}function m(n,t){return void 0===t&&(t=!1),"string"!=typeof n&&n.url&&(t=n.replace,n=n.url),function(n){for(var t=h.length;t--;)if(h[t].canRoute(n))return!0;return!1}(n)&&function(n,t){void 0===t&&(t="push"),v&&v[t]?v[t](n):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,n)}(n,t?"replace":"push"),y(n)}function y(n){for(var t=!1,r=0;r<h.length;r++)h[r].routeTo(n)&&(t=!0);return t}function U(n){if(n&&n.getAttribute){var t=n.getAttribute("href"),r=n.getAttribute("target");if(t&&t.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return m(t)}}function g(n){return n.stopImmediatePropagation&&n.stopImmediatePropagation(),n.stopPropagation&&n.stopPropagation(),n.preventDefault(),!1}function k(n){if(!(n.ctrlKey||n.metaKey||n.altKey||n.shiftKey||n.button)){var t=n.target,r=document.getElementsByClassName("rt-embed rt-container")[0];do{if(!r||!r.contains(t))return;if("a"===t.localName&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(U(t))return g(n)}}while(t=t.parentNode)}}var C=!1;function R(n){n.history&&(v=n.history),this.state={url:n.url||p()}}i(R.prototype=new n.Component,{shouldComponentUpdate:function(n){return!0!==n.static||n.url!==this.props.url||n.onChange!==this.props.onChange},canRoute:function(t){var r=n.toChildArray(this.props.children);return void 0!==this.g(r,t)},routeTo:function(n){this.setState({url:n});var t=this.canRoute(n);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var n=this;C||(C=!0,v||addEventListener("popstate",function(){y(p())}),addEventListener("click",k)),h.push(this),v&&(this.u=v.listen(function(t){var r=t.location||t;n.routeTo(""+(r.pathname||"")+(r.search||""))})),this.p=!1},componentWillUnmount:function(){"function"==typeof this.u&&this.u(),h.splice(h.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(n,t){n=n.filter(u).sort(o);for(var r=0;r<n.length;r++){var i=n[r],f=e(t,i.props.path,i.props);if(f)return[i,f]}},render:function(t,r){var e,o,u=t.onChange,f=r.url,c=this.c,a=this.g(n.toChildArray(t.children),f);if(a&&(o=n.cloneElement(a[0],i(i({url:f,matches:e=a[1]},e),{key:void 0,ref:void 0}))),f!==(c&&c.url)){i(d,c=this.c={url:f,previous:c&&c.url,current:o,path:o?o.props.path:null,matches:e}),c.router=this,c.active=o?[o]:[];for(var h=s.length;h--;)s[h]({});"function"==typeof u&&u(c)}return n.h(l.Provider,{value:c},o)}}),R.getCurrentUrl=p,R.route=m,R.Router=R,R.Route=function(t){return n.h(t.component,t)},R.Link=function(t){return n.h("a",i({onClick:k},t))},R.exec=e,R.useRouter=function(){var n=t.useContext(l);if(n===d){var r=t.useState()[1];t.useEffect(function(){return s.push(r),function(){return s.splice(s.indexOf(r),1)}},[])}return[n,m]},module.exports=R;
//# sourceMappingURL=preact-router.js.map
