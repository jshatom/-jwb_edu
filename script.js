//引入Dialog的js，由于原本的链接失效，只能用这样引入
var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; !function (t, q) { "function" === typeof define && define.amd ? define(["minidialog"], q) : "undefined" !== typeof module && "object" === ("undefined" === typeof exports ? "undefined" : _typeof(exports)) ? module.exports = q() : t.Dialog = q() }("undefined" !== typeof window ? window : void 0, function () { function t(z) { for (var c in E) { var x = E[c]; if ("object" !== a.type(x)) void 0 === z[c] && (z[c] = x); else for (var d in x) z[c] ? void 0 === z[c][d] && (z[c][d] = x[d]) : z[c] = x } return z } function q(a, c, d) { e({ SHORTCUTS: { type: a, title: c, content: d } }) } var W = navigator.userAgent.toLowerCase().match("trident"), d = function (a, c) { return (c || document).querySelector(a) }, v = function (a, c) { a = "object" === ("undefined" === typeof a ? "undefined" : _typeof(a)) ? a.length ? a : [a] : (c || document).querySelectorAll(a); return Array.from ? Array.from(a) : [].slice.call(a) }, a = { getCSS: function (a, c) { return window.getComputedStyle(a, null).getPropertyValue(c) }, setCSS: function (a, c) { v(a).forEach(function (a) { for (var d in c) a.style[d] = c[d] }) }, setAttr: function (a, c) { v(a).forEach(function (a) { for (var d in c) a.setAttribute(d, c[d]) }) }, append: function (a, c) { v(a).forEach(function (a) { a.insertAdjacentHTML("beforeend", c) }) }, prepend: function (a, c) { v(a).forEach(function (a) { a.insertAdjacentHTML("afterbegin", c) }) }, remove: function (a) { v(a).forEach(function (a) { a.parentNode.removeChild(a) }) }, type: function (a) { return Object.prototype.toString.call(a).replace(/(\[object |\])/g, "").toLowerCase() }, isPlainObject: function (d) { return "object" === a.type(d) }, isEmptyObject: function (a) { return !Object.keys(a).length } }, P = function (a) { var c = ""; switch (a) { case "info": c = '\x3csvg viewBox\x3d"0 0 1024 1024" version\x3d"1.1" width\x3d"30" height\x3d"30"\x3e\x3cpath d\x3d"M513.46384 60.225663c-248.292969 0-449.584462 201.299679-449.584462 449.625394 0 248.296039 201.291492 449.594695 449.584462 449.594695 248.28069 0 449.63665-201.299679 449.63665-449.594695C963.099467 261.525342 761.744529 60.225663 513.46384 60.225663zM554.626331 714.465225c0 22.720468-18.416442 41.139979-41.136909 41.139979s-41.136909-18.419512-41.136909-41.139979L472.352513 453.586612c0-22.716374 18.416442-41.135886 41.136909-41.135886s41.136909 18.419512 41.136909 41.135886L554.626331 714.465225zM513.489422 372.423081c-25.719778 0-46.561455-20.845771-46.561455-46.557362 0-25.719778 20.841677-46.560432 46.561455-46.560432s46.561455 20.841677 46.561455 46.560432C560.050878 351.577311 539.2092 372.423081 513.489422 372.423081z" fill\x3d"#19b6f8"\x3e\x3c/path\x3e\x3c/svg\x3e'; break; case "success": c = '\x3csvg viewBox\x3d"0 0 1024 1024" version\x3d"1.1" width\x3d"30" height\x3d"30"\x3e\x3cpath d\x3d"M513.559007 60.225663c-248.299109 0-449.587532 201.299679-449.587532 449.625394 0 248.296039 201.288422 449.594695 449.587532 449.594695 248.27762 0 449.63358-201.299679 449.63358-449.594695C963.192587 261.525342 761.836627 60.225663 513.559007 60.225663zM766.338151 407.245168 485.919507 692.261527c-0.044002 0.045025-0.084934 0.092098-0.127913 0.137123s-0.090051 0.085958-0.134053 0.12996l-0.751107 0.763386c-6.256494 6.359848-14.548344 9.5454-22.967084 9.597589-0.061398 0.001023-0.121773 0.001023-0.183172 0.002047-0.161682 0-0.322341 0.004093-0.485047 0.002047-8.398274 0.068562-16.715707-2.979868-23.057135-9.217942L282.51591 540.491914c-12.999059-12.791327-12.775978-34.097586 0.49835-47.590901 13.281491-13.494339 34.58468-14.06739 47.576575-1.276063l130.36921 128.264269 256.507048-260.722046c12.797467-12.999059 34.100656-12.771885 47.591925 0.502443C778.555403 372.942921 779.129478 394.243039 766.338151 407.245168z" fill\x3d"#08ba61"\x3e\x3c/path\x3e\x3c/svg\x3e'; break; case "warn": c = '\x3csvg viewBox\x3d"0 0 1024 1024" version\x3d"1.1" width\x3d"30" height\x3d"30"\x3e\x3cpath d\x3d"M513.46384 60.225663c-248.291946 0-449.584462 201.299679-449.584462 449.624371 0 248.296039 201.292516 449.594695 449.584462 449.594695 248.28069 0 449.63665-201.299679 449.63665-449.594695C963.099467 261.525342 761.744529 60.225663 513.46384 60.225663zM473.683834 304.175721c2.690272-35.478026 40.597627-32.423457 40.597627-32.423457s34.488489-2.288113 39.011502 32.225959c0 0 8.162914 181.774997-15.904225 294.366308 0 0-3.746324 14.944364-23.107277 16.22145l0 0.275269c-20.751626-0.539282-24.692379-16.296151-24.692379-16.296151C465.521944 485.947647 473.683834 304.175721 473.683834 304.175721zM513.489422 747.984642c-25.719778 0-46.560432-20.840654-46.560432-46.560432 0-25.710568 20.840654-46.556339 46.560432-46.556339s46.561455 20.845771 46.561455 46.556339C560.050878 727.143988 539.2092 747.984642 513.489422 747.984642z" fill\x3d"#f39509"\x3e\x3c/path\x3e\x3c/svg\x3e'; break; case "error": c = '\x3csvg viewBox\x3d"0 0 1024 1024" version\x3d"1.1" width\x3d"30" height\x3d"30"\x3e\x3cpath d\x3d"M513.559007 60.225663c-248.291946 0-449.587532 201.299679-449.587532 449.625394 0 248.291946 201.295586 449.594695 449.587532 449.594695 248.284783 0 449.632557-201.303772 449.632557-449.594695C963.191564 261.525342 761.84379 60.225663 513.559007 60.225663zM678.729837 644.059712c12.798491 13.003152 12.217253 34.302247-1.272993 47.575552-13.490246 13.275351-34.800597 13.502525-47.590901 0.503467l-116.284423-118.191866-116.278283 118.187773c-12.798491 13.003152-34.093493 12.774955-47.590901-0.499373-13.497409-13.277398-14.063297-34.576493-1.279133-47.575552l117.065206-118.984928L348.433202 406.088832c-12.783141-12.999059-12.218276-34.298154 1.279133-47.576575 13.497409-13.274328 34.792411-13.501502 47.590901-0.49835l116.279307 118.187773 116.2834-118.190843c12.790304-12.999059 34.100656-12.771885 47.590901 0.502443 13.491269 13.274328 14.071484 34.573423 1.272993 47.576575L561.666678 525.07376 678.729837 644.059712z" fill\x3d"#d81e06"\x3e\x3c/path\x3e\x3c/svg\x3e'; break; case "close": c = '\x3csvg viewBox\x3d"0 0 1024 1024" version\x3d"1.1" width\x3d"16" height\x3d"16"\x3e\x3cpath d\x3d"M806.4 172.8l-633.6 633.6c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l633.6-633.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0z" fill\x3d"#000"\x3e\x3c/path\x3e\x3cpath d\x3d"M172.8 172.8c-12.8 12.8-12.8 32 0 44.8l633.6 633.6c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L217.6 172.8c-12.8-12.8-32-12.8-44.8 0z" fill\x3d"#000"\x3e\x3c/path\x3e\x3c/svg\x3e' }return c }, Q = '\n\t\t\x3cdiv class\x3d"mini-dialog-container"\x3e\n\t\t\t\x3cdiv class\x3d"mini-dialog-mask"\x3e\x3c/div\x3e\n\t\t\t\x3cdiv class\x3d"mini-dialog-wrapper"\x3e\n\t\t\t\t\x3cdiv class\x3d"mini-dialog-header"\x3e\n\t\t\t\t\t\x3cspan\x3e\x3c/span\x3e\n\t\t\t\t\t\x3ci\x3e' + P("close") + '\x3c/i\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\t\x3cdiv class\x3d"mini-dialog-main"\x3e\n\t\t\t\t\t\x3cdiv\x3e\x3c/div\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\t\x3cdiv class\x3d"mini-dialog-footer mini-dialog-noselect"\x3e\n\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-cancel"\x3e\n\t\t\t\t\t\t\x3cspan\x3e\x3c/span\x3e\n\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-ok"\x3e\n\t\t\t\t\t\t\x3cspan\x3e\x3c/span\x3e\n\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t\x3c/div\x3e\n\t\t\x3c/div\x3e\n\t', E = { title: "\u7f51\u9875\u6d88\u606f", content: "", contentBgColor: "#fff", iframeContent: null, videoContent: null, imageContent: null, fullscreen: !1, draggable: !1, maskClose: !1, mask: !0, closable: !0, showTitle: !0, bodyScroll: !0, showButton: !0, autoCloseEffect: !0, parentsIframeLayer: 0, borderRadius: 6, autoClose: 0, width: 500, ok: { text: "\u786e\u5b9a", waiting: !1, waitingText: "\u786e\u5b9a", notClose: !1, callback: function () { } }, cancel: { text: "\u53d6\u6d88", show: !0, callback: function () { } }, afterOpen: function () { }, afterClose: function () { }, SHORTCUTS: null, WAITING: null }, e = function c() { function x() { g.removeEventListener("animationend", x); "function" === a.type(b.afterOpen) && b.afterOpen(); var e = d(".mini-dialog-autoclose", g); e && (e.style.transitionDuration = ~~b.autoClose + "ms", e.classList.add("mini-dialog-autoclose-active"), e.addEventListener("transitionend", function () { c.close(n, m) })) } var k = arguments.length, f = {}; if (k) { 1 === k ? a.isPlainObject(0 >= arguments.length ? void 0 : arguments[0]) ? f = 0 >= arguments.length ? void 0 : arguments[0] : f.content = 0 >= arguments.length ? void 0 : arguments[0] : (f.title = 0 >= arguments.length ? void 0 : arguments[0], f.content = 1 >= arguments.length ? void 0 : arguments[1], f.width = 2 >= arguments.length ? void 0 : arguments[2]); var b = t(f || {}); b.WAITING && (b.showTitle = !1, b.showButton = !1, b.width = "auto"); var f = b.fullscreen, e = b.width, m = void 0; if (b.parentsIframeLayer) { m = parent; for (k = 0; k < b.parentsIframeLayer - 1; k++)m = m.parent; d("style.mini-dialog-css", m.document) || a.append(d("head", m.document), '\x3cstyle class\x3d"mini-dialog-css"\x3e\n\t\tbody.mini-dialog-body-noscroll{padding-right:17px;position:relative;height:100%;overflow:hidden}\n\t\t.mini-dialog-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n\t\t.mini-dialog-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483580;pointer-events:none}\n\t\t.mini-dialog-container *{-webkit-tap-highlight-color:transparent;margin:0;padding:0}\n\t\t.mini-dialog-container-top{z-index:2147483584}\n\t\t.mini-dialog-mask{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);pointer-events:auto}\n\t\t.mini-dialog-mask-show{animation:MiniDialogMaskShow .35s;}\n\t\t.mini-dialog-mask-hide{animation:MiniDialogMaskHide .35s;}\n\t\t.mini-dialog-wrapper{position:absolute;top:50%;left:50%;background:#fff;overflow:hidden;transform:translate(-50%,-50%);box-shadow:rgba(0,0,0,.12) 0 0 12px;pointer-events:auto}\n\t\t.mini-dialog-wrapper-fullscreen{width:100%!important;height:100%!important;border-radius:0!important}\n\t\t.mini-dialog-wrapper-show{animation:MiniDialogWrapperShow .35s;}\n\t\t.mini-dialog-wrapper-hide{animation:MiniDialogWrapperHide .35s;}\n\t\t.mini-dialog-header{overflow:hidden;border-bottom:#e6e6e6 solid 1px}\n\t\t.mini-dialog-header-move{cursor:grab}\n\t\t.mini-dialog-header-move-ie{cursor:move}\n\t\t.mini-dialog-header\x3espan{display:block;float:left;width:calc(100% - 65px);height:52px;line-height:52px;padding:0 15px;font-size:16px;font-weight:700;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n\t\t.mini-dialog-header\x3ei{display:block;float:right;width:20px;height:20px;line-height:20px;margin:17px 13px 0 0;font-style:normal;text-align:center;cursor:pointer;opacity:.35;transition:.2s}\n\t\t.mini-dialog-header\x3ei:hover{opacity:1}\n\t\t.mini-dialog-header-drag{cursor:move}\n\t\t.mini-dialog-main{position:relative;padding:15px 0;min-height:100px;font-size:14px;line-height:160%;overflow:auto;word-break:break-all;color:#292929;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}\n\t\t.mini-dialog-main\x3ediv{overflow:hidden;margin:0 15px}\n\t\t.mini-dialog-main\x3eiframe,.mini-dialog-main\x3eimg{display:block;position:absolute;top:0;left:0;width:100%;height:100%}\n\t\t.mini-dialog-main.mini-dialog-mobile-main{padding:10px 0}\n\t\t.mini-dialog-main.mini-dialog-mobile-main\x3ediv{margin:0 10px}\n\t\t.mini-dialog-main:hover .mini-dialog-image-prev,.mini-dialog-main:hover .mini-dialog-image-next{opacity:1}\n\t\t.mini-dialog-waiting-wrapper{box-shadow:none;padding:0;background:rgba(0,0,0,.7);border-radius:4px}\n\t\t.mini-dialog-waiting-wrapper .mini-dialog-main{background:rgba(0,0,0,0)!important;min-height:0;color:#eee;font-size:13px;text-align:center;padding:10px}\n\t\t.mini-dialog-waiting-wrapper span{display:block;text-align:center;margin-top:8px}\n\t\t.mini-dialog-waiting-box{margin:0 auto!important;width:40px;height:40px;border-radius:50%;border:rgba(255,255,255,.4) solid 3px;border-left:#eee solid 3px;animation:MiniDialogWaiting 1s linear infinite}\n\t\t.mini-dialog-image-prev,.mini-dialog-image-next{opacity:0;transition:.2s}\n\t\tdiv.mini-dialog-image-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;margin:0}\n\t\t.mini-dialog-image-wrapper\x3ediv:first-child{position:absolute;top:0;left:0;height:100%;transition-property:transform;transition-duration:.8s;transition-timing-function:cubic-bezier(.57,0,.375,1)}\n\t\t.mini-dialog-image-wrapper img{display:block;float:left}\n\t\tdiv.mini-dialog-image-next,div.mini-dialog-image-prev{width:40px;height:40px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU1NzI0MjA4NjA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY3MC42NzY5MjkgNzc3LjU5Mjk4NCA0MDMuNjI3NzggNTEzLjM2MjAyMWwyNjUuMzIwNzg1LTI2OC4xNDYxMzNjMTEuNzc2MjA4LTExLjc3NTE4NCAxMS43MzQyNTItMzAuOTA4OTY0LTAuMDkxMDc0LTQyLjczNDI5bC0wLjAwMTAyMyAwYy0xMS44MjUzMjYtMTEuODI2MzUtMzAuOTU4MDgyLTExLjg2NzI4Mi00Mi43MjgxNSAyLjkzMDc0OUwzNDMuMTAwMjQyIDQ4OC40NDA0MjFjLTMuODE3OTU1IDQuMjczMzI3LTguMjA1ODkyIDkuMzIxMjk2LTguOTMzNDYzIDEyLjA0NTMzNy00LjQ3MDgyNSAxMS4xMTIwODItMi4yMzI4NTQgMjQuNzY1MDMzIDYuNzEwODQyIDM1Ljk4NzYzMmwyODYuOTgyMTMgMjg2Ljk4MjEzYzExLjg3NTQ2OCA4Ljg0NzUwNSAzMS4wOTYyMjkgOC44OTM1NTQgNDIuOTIyNTc4LTIuOTMyNzk2QzY4Mi42MDY2MzMgODA4LjY5NjM3NiA2ODIuNTYwNTg0IDc4OS40NzY2MzkgNjcwLjY3NjkyOSA3NzcuNTkyOTg0eiIgcC1pZD0iMjI5MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg\x3d\x3d);background-color:rgba(0,0,0,.5);background-position:center;background-repeat:no-repeat;position:absolute;top:50%;border-radius:50%;cursor:pointer;margin-top:-20px}\n\t\t.mini-dialog-image-prev{left:15px}\n\t\t.mini-dialog-image-next{right:15px;transform:rotate(180deg)}\n\t\t.mini-dialog-footer{text-align:right;height:68px;padding:15px 0;border-top:#e6e6e6 solid 1px}\n\t\t.mini-dialog-footer\x3ediv{display:inline-block;font-size:14px;cursor:pointer;text-align:center;border:#e8e8e8 solid 1px;height:32px;line-height:32px;vertical-align:middle;border-radius:4px;padding:0 14px;transition:.2s}\n\t\tdiv.mini-dialog-ok{color:#fff;background:#19b6f8;border-color:#19b6f8;margin:0 15px 0 5px}\n\t\tdiv.mini-dialog-ok:hover{background:#08a0e0;border-color:#08a0e0}\n\t\tdiv.mini-dialog-cancel{color:#888;background:#fff}\n\t\tdiv.mini-dialog-cancel:hover{background:#fafafa}\n\t\tdiv.mini-dialog-shortcuts-ok{margin:-5px 20px 0 0}\n\t\tdiv.mini-dialog-ok-disabled{pointer-events:none;opacity:.5}\n\t\t.mini-dialog-ok i{display:inline-block;width:12px;height:12px;margin-right:5px;border-radius:50%;border:#fff solid 1px;border-left:#09f solid 1px;animation:MiniDialogWaiting 1s linear infinite}\n\t\t.mini-dialog-autoclose{position:absolute;left:0;bottom:0;height:3px;background:#19b6f8;width:100%;transform:scaleX(0);transform-origin:left center;transition-property:transform;transition-timing-function:linear}\n\t\t.mini-dialog-autoclose-active{transform:scaleX(1)}\n\t\t.mini-dialog-shortcuts\x3ei{display:block;float:left;width:30px;height:30px;margin:8px 0 0 10px;border-radius:50%;transform:scale(.9)}\n\t\t.mini-dialog-shortcuts\x3ediv{float:left;width:calc(100% - 60px);margin:8px 0 0 10px}\n\t\t.mini-dialog-shortcuts\x3ediv p{display:block;font-size:16px;font-weight:700;word-break:break-all;margin-top:3px}\n\t\t.mini-dialog-shortcuts\x3ediv div{font-size:14px;margin-top:5px;word-break:break-all}\n\t\t.mini-dialog-mask-animate-enter-active,.mini-dialog-mask-animate-leave-active{transition:opacity .35s}\n\t\t.mini-dialog-mask-animate-enter,.mini-dialog-mask-animate-leave-to{opacity:0}\n\t\t.mini-dialog-wrapper-animate-enter-active,.mini-dialog-wrapper-animate-leave-active{transition:.35s}\n\t\t.mini-dialog-wrapper-animate-enter,.mini-dialog-wrapper-animate-leave-to{transform:translate(-50%,-50%) scale(.85);opacity:0}\n\t\t@keyframes MiniDialogMaskShow{0%{opacity:0}100%{opacity:1}}\n\t\t@keyframes MiniDialogMaskHide{0%{opacity:1}100%{opacity:0}}\n\t\t@keyframes MiniDialogWrapperShow{0%{opacity:0;transform:translate(-50%,-50%) scale(.82)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}\n\t\t@keyframes MiniDialogWrapperHide{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(.82)}}\n\t\t@keyframes MiniDialogWaiting{0%{transform:translateY(2px) rotate(0) scale(.85)}100%{transform:translateY(2px) rotate(360deg) scale(.85)}}\n\t\x3c/style\x3e'); a.append(d("body", m.document), Q) } else d("style.mini-dialog-css") || a.append(d("head"), '\x3cstyle class\x3d"mini-dialog-css"\x3e\n\t\tbody.mini-dialog-body-noscroll{padding-right:17px;position:relative;height:100%;overflow:hidden}\n\t\t.mini-dialog-noselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\n\t\t.mini-dialog-container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2147483580;pointer-events:none}\n\t\t.mini-dialog-container *{-webkit-tap-highlight-color:transparent;margin:0;padding:0}\n\t\t.mini-dialog-container-top{z-index:2147483584}\n\t\t.mini-dialog-mask{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);pointer-events:auto}\n\t\t.mini-dialog-mask-show{animation:MiniDialogMaskShow .35s;}\n\t\t.mini-dialog-mask-hide{animation:MiniDialogMaskHide .35s;}\n\t\t.mini-dialog-wrapper{position:absolute;top:50%;left:50%;background:#fff;overflow:hidden;transform:translate(-50%,-50%);box-shadow:rgba(0,0,0,.12) 0 0 12px;pointer-events:auto}\n\t\t.mini-dialog-wrapper-fullscreen{width:100%!important;height:100%!important;border-radius:0!important}\n\t\t.mini-dialog-wrapper-show{animation:MiniDialogWrapperShow .35s;}\n\t\t.mini-dialog-wrapper-hide{animation:MiniDialogWrapperHide .35s;}\n\t\t.mini-dialog-header{overflow:hidden;border-bottom:#e6e6e6 solid 1px}\n\t\t.mini-dialog-header-move{cursor:grab}\n\t\t.mini-dialog-header-move-ie{cursor:move}\n\t\t.mini-dialog-header\x3espan{display:block;float:left;width:calc(100% - 65px);height:52px;line-height:52px;padding:0 15px;font-size:16px;font-weight:700;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n\t\t.mini-dialog-header\x3ei{display:block;float:right;width:20px;height:20px;line-height:20px;margin:17px 13px 0 0;font-style:normal;text-align:center;cursor:pointer;opacity:.35;transition:.2s}\n\t\t.mini-dialog-header\x3ei:hover{opacity:1}\n\t\t.mini-dialog-header-drag{cursor:move}\n\t\t.mini-dialog-main{position:relative;padding:15px 0;min-height:100px;font-size:14px;line-height:160%;overflow:auto;word-break:break-all;color:#292929;-webkit-overflow-scrolling:touch;overscroll-behavior:contain}\n\t\t.mini-dialog-main\x3ediv{overflow:hidden;margin:0 15px}\n\t\t.mini-dialog-main\x3eiframe,.mini-dialog-main\x3eimg{display:block;position:absolute;top:0;left:0;width:100%;height:100%}\n\t\t.mini-dialog-main.mini-dialog-mobile-main{padding:10px 0}\n\t\t.mini-dialog-main.mini-dialog-mobile-main\x3ediv{margin:0 10px}\n\t\t.mini-dialog-main:hover .mini-dialog-image-prev,.mini-dialog-main:hover .mini-dialog-image-next{opacity:1}\n\t\t.mini-dialog-waiting-wrapper{box-shadow:none;padding:0;background:rgba(0,0,0,.7);border-radius:4px}\n\t\t.mini-dialog-waiting-wrapper .mini-dialog-main{background:rgba(0,0,0,0)!important;min-height:0;color:#eee;font-size:13px;text-align:center;padding:10px}\n\t\t.mini-dialog-waiting-wrapper span{display:block;text-align:center;margin-top:8px}\n\t\t.mini-dialog-waiting-box{margin:0 auto!important;width:40px;height:40px;border-radius:50%;border:rgba(255,255,255,.4) solid 3px;border-left:#eee solid 3px;animation:MiniDialogWaiting 1s linear infinite}\n\t\t.mini-dialog-image-prev,.mini-dialog-image-next{opacity:0;transition:.2s}\n\t\tdiv.mini-dialog-image-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;margin:0}\n\t\t.mini-dialog-image-wrapper\x3ediv:first-child{position:absolute;top:0;left:0;height:100%;transition-property:transform;transition-duration:.8s;transition-timing-function:cubic-bezier(.57,0,.375,1)}\n\t\t.mini-dialog-image-wrapper img{display:block;float:left}\n\t\tdiv.mini-dialog-image-next,div.mini-dialog-image-prev{width:40px;height:40px;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTU1NzI0MjA4NjA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIyOTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY3MC42NzY5MjkgNzc3LjU5Mjk4NCA0MDMuNjI3NzggNTEzLjM2MjAyMWwyNjUuMzIwNzg1LTI2OC4xNDYxMzNjMTEuNzc2MjA4LTExLjc3NTE4NCAxMS43MzQyNTItMzAuOTA4OTY0LTAuMDkxMDc0LTQyLjczNDI5bC0wLjAwMTAyMyAwYy0xMS44MjUzMjYtMTEuODI2MzUtMzAuOTU4MDgyLTExLjg2NzI4Mi00Mi43MjgxNSAyLjkzMDc0OUwzNDMuMTAwMjQyIDQ4OC40NDA0MjFjLTMuODE3OTU1IDQuMjczMzI3LTguMjA1ODkyIDkuMzIxMjk2LTguOTMzNDYzIDEyLjA0NTMzNy00LjQ3MDgyNSAxMS4xMTIwODItMi4yMzI4NTQgMjQuNzY1MDMzIDYuNzEwODQyIDM1Ljk4NzYzMmwyODYuOTgyMTMgMjg2Ljk4MjEzYzExLjg3NTQ2OCA4Ljg0NzUwNSAzMS4wOTYyMjkgOC44OTM1NTQgNDIuOTIyNTc4LTIuOTMyNzk2QzY4Mi42MDY2MzMgODA4LjY5NjM3NiA2ODIuNTYwNTg0IDc4OS40NzY2MzkgNjcwLjY3NjkyOSA3NzcuNTkyOTg0eiIgcC1pZD0iMjI5MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg\x3d\x3d);background-color:rgba(0,0,0,.5);background-position:center;background-repeat:no-repeat;position:absolute;top:50%;border-radius:50%;cursor:pointer;margin-top:-20px}\n\t\t.mini-dialog-image-prev{left:15px}\n\t\t.mini-dialog-image-next{right:15px;transform:rotate(180deg)}\n\t\t.mini-dialog-footer{text-align:right;height:68px;padding:15px 0;border-top:#e6e6e6 solid 1px}\n\t\t.mini-dialog-footer\x3ediv{display:inline-block;font-size:14px;cursor:pointer;text-align:center;border:#e8e8e8 solid 1px;height:32px;line-height:32px;vertical-align:middle;border-radius:4px;padding:0 14px;transition:.2s}\n\t\tdiv.mini-dialog-ok{color:#fff;background:#19b6f8;border-color:#19b6f8;margin:0 15px 0 5px}\n\t\tdiv.mini-dialog-ok:hover{background:#08a0e0;border-color:#08a0e0}\n\t\tdiv.mini-dialog-cancel{color:#888;background:#fff}\n\t\tdiv.mini-dialog-cancel:hover{background:#fafafa}\n\t\tdiv.mini-dialog-shortcuts-ok{margin:-5px 20px 0 0}\n\t\tdiv.mini-dialog-ok-disabled{pointer-events:none;opacity:.5}\n\t\t.mini-dialog-ok i{display:inline-block;width:12px;height:12px;margin-right:5px;border-radius:50%;border:#fff solid 1px;border-left:#09f solid 1px;animation:MiniDialogWaiting 1s linear infinite}\n\t\t.mini-dialog-autoclose{position:absolute;left:0;bottom:0;height:3px;background:#19b6f8;width:100%;transform:scaleX(0);transform-origin:left center;transition-property:transform;transition-timing-function:linear}\n\t\t.mini-dialog-autoclose-active{transform:scaleX(1)}\n\t\t.mini-dialog-shortcuts\x3ei{display:block;float:left;width:30px;height:30px;margin:8px 0 0 10px;border-radius:50%;transform:scale(.9)}\n\t\t.mini-dialog-shortcuts\x3ediv{float:left;width:calc(100% - 60px);margin:8px 0 0 10px}\n\t\t.mini-dialog-shortcuts\x3ediv p{display:block;font-size:16px;font-weight:700;word-break:break-all;margin-top:3px}\n\t\t.mini-dialog-shortcuts\x3ediv div{font-size:14px;margin-top:5px;word-break:break-all}\n\t\t.mini-dialog-mask-animate-enter-active,.mini-dialog-mask-animate-leave-active{transition:opacity .35s}\n\t\t.mini-dialog-mask-animate-enter,.mini-dialog-mask-animate-leave-to{opacity:0}\n\t\t.mini-dialog-wrapper-animate-enter-active,.mini-dialog-wrapper-animate-leave-active{transition:.35s}\n\t\t.mini-dialog-wrapper-animate-enter,.mini-dialog-wrapper-animate-leave-to{transform:translate(-50%,-50%) scale(.85);opacity:0}\n\t\t@keyframes MiniDialogMaskShow{0%{opacity:0}100%{opacity:1}}\n\t\t@keyframes MiniDialogMaskHide{0%{opacity:1}100%{opacity:0}}\n\t\t@keyframes MiniDialogWrapperShow{0%{opacity:0;transform:translate(-50%,-50%) scale(.82)}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}\n\t\t@keyframes MiniDialogWrapperHide{0%{opacity:1;transform:translate(-50%,-50%) scale(1)}100%{opacity:0;transform:translate(-50%,-50%) scale(.82)}}\n\t\t@keyframes MiniDialogWaiting{0%{transform:translateY(2px) rotate(0) scale(.85)}100%{transform:translateY(2px) rotate(360deg) scale(.85)}}\n\t\x3c/style\x3e'), a.append(d("body"), Q); var n = m ? d("body \x3e .mini-dialog-container:last-child", m.document) : d("body \x3e .mini-dialog-container:last-child"), k = d(".mini-dialog-mask", n), g = d(".mini-dialog-wrapper", n), u = d(".mini-dialog-header", g), r = d("span", u), q = d("i", u), l = d(".mini-dialog-main", g), E = d("div", l), F = d(".mini-dialog-footer", g), A = d(".mini-dialog-ok", F), K = d(".mini-dialog-cancel", F), B = document.documentElement.clientWidth, p = document.documentElement.clientHeight, N = !!(430 > B); if (e > B || f) e = B; g.style.width = e + "px"; !N || f || b.WAITING || (g.style.width = B - 60 + "px"); r.textContent = b.title; g.style.borderRadius = b.borderRadius + "px"; l.style.background = b.contentBgColor; E.innerHTML = b.content; d("span", A).textContent = b.ok.text; d("span", K).textContent = b.cancel.text; b.bodyScroll || d("body", m ? m.document : window.document).classList.add("mini-dialog-body-noscroll"); b.showTitle || a.remove(u); b.showButton || a.remove(F); b.cancel.show || a.remove(K); b.closable || (a.remove(q), r.style.width = "calc(100% - 30px)"); b.mask || a.remove(k); var r = u.offsetHeight + F.offsetHeight, h = b.iframeContent, R = !1; if (a.isPlainObject(b.iframeContent)) { var G = h.src, h = h.height; if (!G || !h) return; R = !0; if (f || h > p - r) h = p - r; a.setCSS(l, { padding: 0, height: h + "px" }); l.innerHTML = '\x3ciframe src\x3d"' + G + '" frameborder\x3d"0" scrolling\x3d"auto"\x3e\x3c/iframe\x3e' } h = b.imageContent; G = !1; if (a.isPlainObject(h)) { var Y = function X() { L = !1; O.removeEventListener("transitionend", X) }, S = function (a) { L = !0; O.style.transform = "translateX(" + -a * e + "px)"; O.addEventListener("transitionend", Y) }, y = h.src, H = h.height; if (!y || !H) return; G = !0; if (f || H > p - r) H = p - r; var T = y.length, I = ""; Array.isArray(y) ? (y.forEach(function (a) { I += '\x3cimg src\x3d"' + a + '" style\x3d"width:' + e + "px;height:" + H + 'px;" ondragstart\x3d"return false"\x3e' }), I = '\n\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-image-wrapper mini-dialog-noselect"\x3e\n\t\t\t\t\t\t\x3cdiv style\x3d"width:' + e * T + 'px;"\x3e\n\t\t\t\t\t\t\t' + I + '\n\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-image-prev"\x3e\x3c/div\x3e\n\t\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-image-next"\x3e\x3c/div\x3e\n\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t') : I = '\x3cimg src\x3d"' + y + '"\x3e'; a.setCSS(l, { padding: 0, overflow: "hidden", height: H + "px" }); l.innerHTML = I; var O = d(".mini-dialog-image-wrapper \x3e div:first-child", l), h = v(".mini-dialog-image-prev, .mini-dialog-image-next", l), C = 0, L = !1; 2 === h.length && (h[0].onclick = function () { C && !L && (C--, S(C)) }, h[1].onclick = function () { C < T - 1 && !L && (C++, S(C)) }) } var D = b.videoContent, h = !1; if (a.isPlainObject(D)) { var y = D.src, J = D.height, D = D.autoplay; if (!y || !J) return; h = !0; if (f || J > p - r) J = p - r; a.setCSS(l, { padding: 0, overflow: "hidden", height: J + "px", background: "#000" }); l.innerHTML = '\x3cvideo src\x3d"' + y + '" width\x3d"' + e + '" height\x3d"' + J + '" controls\x3e\x3c/video\x3e'; D && d("video", l).setAttribute("autoplay", !0) } 1 < v(".mini-dialog-mask").length && a.remove(k); "function" === a.type(b.afterClose) && (n.mini_dialog_afterclose = b.afterClose); f && (a.setCSS(g, { height: p + "px", borderRadius: 0 }), l.style.height = p - r - (h || G || R ? 0 : 30) + "px"); "number" === a.type(b.autoClose) && 2E3 < b.autoClose && b.autoCloseEffect && a.append(g, '\x3cdiv class\x3d"mini-dialog-autoclose"\x3e\x3c/div\x3e'); a.getCSS(g, "height") > p && (l.style.height = p - r + "px"); a.isPlainObject(b.SHORTCUTS) && !a.isEmptyObject(b.SHORTCUTS) && (a.remove(u), a.remove(K), a.remove(E), F.style.borderTop = "none", g.style.width = (N ? w - 60 : 420) + "px", g.classList.add("mini-dialog-shortcuts-mark"), l.innerHTML = '\n\t\t\t\t\x3cdiv\x3e\n\t\t\t\t\t\x3cdiv class\x3d"mini-dialog-shortcuts"\x3e\n\t\t\t\t\t\t\x3ci\x3e' + P(b.SHORTCUTS.type) + "\x3c/i\x3e\n\t\t\t\t\t\t\t\x3cdiv\x3e\n\t\t\t\t\t\t\t\t\x3cp\x3e" + b.SHORTCUTS.title + "\x3c/p\x3e\n\t\t\t\t\t\t\t\t\x3cdiv\x3e" + (b.SHORTCUTS.content || "") + "\x3c/div\x3e\n\t\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\t\x3c/div\x3e\n\t\t\t\t\x3c/div\x3e\n\t\t\t", l.style.minHeight = "90px", N && l.classList.add("mini-dialog-mobile-main")); b.WAITING && (g.classList.add("mini-dialog-waiting-wrapper"), f = "", "string" === a.type(b.WAITING) && (f = b.WAITING), l.innerHTML = '\x3cdiv class\x3d"mini-dialog-waiting-box"\x3e\x3c/div\x3e\x3cspan\x3e' + f + "\x3c/span\x3e", "function" === a.type(b.WAITING) && b.WAITING(d(".mini-dialog-waiting-box + span"))); b.maskClose && (k.onclick = function () { return c.close(n, m) }); q.onclick = function () { return c.close(n, m) }; K.onclick = function () { c.close(n, m); "function" === a.type(b.cancel.callback) && b.cancel.callback() }; A.onclick = function () { "function" === a.type(b.ok.callback) && b.ok.callback(A); b.ok.waiting || b.ok.notClose || A.classList.contains("mini-dialog-notclose") || c.close(n, m); b.ok.waiting && (a.prepend(A, "\x3ci\x3e\x3c/i\x3e"), a.setCSS(A, { opacity: .5, pointerEvents: "none" }), d("span", A).textContent = b.ok.waitingText) }; if (b.draggable && !b.fullscreen) { f = function () { u.style.removeProperty("cursor"); n.classList.remove("mini-dialog-noselect"); document.onmousemove = null }; a.remove(k); var M = parseFloat(a.getCSS(g, "height")), U = void 0, V = void 0; g.onmousedown = function () { v(".mini-dialog-container-top").forEach(function (a) { a.classList.remove("mini-dialog-container-top") }); n.classList.add("mini-dialog-container-top") }; u.classList.add("mini-dialog-header-move" + (W ? "-ie" : "")); u.onmousedown = function (b) { b.preventDefault(); n.classList.add("mini-dialog-noselect"); u.style.cursor = "grabbing"; V = b.pageX - g.offsetLeft; U = b.pageY - g.offsetTop; document.onmousemove = function (b) { var c = b.pageX - V; b = b.pageY - U; c < e / 2 && (c = e / 2); b < M / 2 && (b = M / 2); c > B - e / 2 && (c = B - e / 2); b > p - M / 2 && (b = p - M / 2); a.setCSS(g, { left: c + "px", top: b + "px" }) } }; u.onmouseup = f; document.onmouseup = f } k.classList.add("mini-dialog-mask-show"); g.classList.add("mini-dialog-wrapper-show"); g.addEventListener("animationend", x); return n } }; e.info = function (a, d) { q("info", a, d); return e }; e.success = function (a, d) { q("success", a, d); return e }; e.warn = function (a, d) { q("warn", a, d); return e }; e.error = function (a, d) { q("error", a, d); return e }; e.waiting = function () { e({ WAITING: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "\u8bf7\u7b49\u5f85" }) }; e.okNotClose = function () { var a = d(".mini-dialog-ok"); a && a.classList.add("mini-dialog-notclose"); return e }; e.close = function (c) { var e = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window).document, k = v(c || ".mini-dialog-container", e); k.length && k.forEach(function (c) { var b = d(".mini-dialog-wrapper", c), f = d(".mini-dialog-mask", c); b.classList.add("mini-dialog-wrapper-hide"); b.addEventListener("animationend", function () { var b = c.mini_dialog_afterclose; b && b(); a.remove(c); d("body", e).classList.remove("mini-dialog-body-noscroll") }); f && f.classList.add("mini-dialog-mask-hide") }) }; e.ok = function (c) { var e = d(".mini-dialog-shortcuts-mark .mini-dialog-ok"); if (e) { var k = "function" === a.type(c); e.addEventListener("click", function () { e.classList.contains("mini-dialog-notclose") ? (e.style.pointerEvents = "none", k && c(e)) : d(".mini-dialog-shortcuts-mark").addEventListener("animationend", function () { k && c() }) }) } }; return e });
///
(function () {
    //渲染完成加载方法
    window.onload = function () {
        SearchContent()
        getlist()
    }
    //搜索指定课评内容
    function SearchContent() {
        //平台号
        var bid = 39606
        //添加按钮
        var button = '<button style="margin-left:10px" id="v-update" type="button" class="el-button el-button--default"><span>更新数据(半年点一次)</span></button><input type="text" id="title_id" autocomplete="off" placeholder="课程标题.." class="el-input__inner" style="width:100px;margin-left:10px"><button style="margin-left:10px" id="v-search" type="button" class="el-button el-button--default"><span>搜索课评</span></button>';
        $("#main").before(button);
        //更新本地储存，将请求的数据保存到本地储存，这样就不用每次都重新请求（很慢）！
        $("#v-update").click(function () {
            if ($("#main > .page-title-part > .page-title").text() != '课评记录') {
                alert("请在课评记录页面点击更新数据！！！")
            } else {
                //获取当前时间
                const date = new Date().toLocaleDateString().split("/").join("-");
                //更新前，先清空localStorage本地存储
                localStorage.removeItem('content_data')
                //用来存储课评数据
                var content_data = []
                //请求数据
                $.ajax({
                    type: "POST",
                    url: "https://jwb.sc-edu.com/api/lesson/comment_list/",
                    data: {
                        async: false,
                        branch_id: bid,
                        start: '2000-07-01',
                        end: date,
                        page: 1,
                        limit: 5000    //服务器垃圾，请求数量太多会报500错误，可适当减少数量
                    },
                    beforeSend: function () {
                        //教务宝自带的加载动画
                        $(".el-loading-mask").css('display', 'block')
                        $(".el-loading-mask p").text('加载数据中，请耐心！耐心！等待！')
                    },
                    success: function (res) {
                        var content = JSON.parse(res).data.lists
                        //遍历数据
                        for (let i = 0; i < content.length; i++) {
                            content_data.push(content[i].comment_info.content)
                        }
                        //一次请求的数量不能太多，所以请求第二次
                        $.ajax({
                            type: "POST",
                            url: "https://jwb.sc-edu.com/api/lesson/comment_list/",
                            data: {
                                async: false,
                                branch_id: bid,
                                start: '2000-07-01',
                                end: date,
                                page: 2,
                                limit: 5000    //服务器垃圾，请求数量太多会报500错误，可适当减少数量
                            },
                            beforeSend: function () {
                                //教务宝自带的加载动画
                                $(".el-loading-mask").css('display', 'block')
                                $(".el-loading-mask p").text('加载数据中，请耐心！耐心！等待！')
                            },
                            complete: function () {
                                $(".el-loading-mask").css('display', 'none')
                            },
                            success: function (res) {
                                $(".el-loading-mask").css('display', 'none')
                                var content = JSON.parse(res).data.lists
                                //遍历数据
                                for (let i = 0; i < content.length; i++) {
                                    content_data.push(content[i].comment_info.content)
                                }
                                //添加到本地存储
                                localStorage.setItem("content_data", JSON.stringify(content_data))
                            },
                            error: function () {
                                $(".el-loading-mask").css('display', 'none')
                                alert("更新数据失败，找人帮忙吧！！！")
                            }
                        });
                    },
                    error: function () {
                        $(".el-loading-mask").css('display', 'none')
                        alert("更新数据失败，找人帮忙吧！！！")
                    }
                });
            }

        });

        //搜索本地存储
        $("#v-search").click(function () {
            var content = JSON.parse(localStorage.getItem('content_data'))

            const sid = $("#title_id").val()

            if (sid == '') {
                alert("你都没填标题，你认真的吗？OxO");
                return false;
            }

            //寻找字符串索引号
            function find(str, cha, num) {
                var x = str.indexOf(cha);
                for (var i = 0; i < num; i++) {
                    x = str.indexOf(cha, x + 1);
                }
                return x;
            }

            let title, context = '';
            let in_l, in_r
            //遍历课程数据，查找内容
            $.each(content, function (index, value) {
                in_l = find(value, '课程', 0);
                in_r = find(value, '课程', 1);
                let emp = value.substring(in_l + 5, in_r - 1).trim();
                emp = emp.replaceAll('：', '');
                emp = emp.replaceAll(':', '');
                title = emp.replace(/[\r\n]/g, "") + "\n";

                if (title.indexOf(sid) != -1) {
                    context += value;
                }
            });
            //
            Dialog("执行完毕，请复制内容", "<textarea style='border:none;width:100%;opacity:1' rows='10'>" + context + "</textarea>");
        })

    }
    // 第二部分代码
    // 获取指定孩子上过的课程标题
    // 转为unicode 编码
    function encodeUnicode(str) {
        var res = [];
        for (var i = 0; i < str.length; i++) {
            res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return "\\u" + res.join("\\u");
    }
    // 解码
    function decodeUnicode(str) {
        str = str.replace(/\\/g, "%");
        return unescape(str);
    }
    //
    //获取指定URL的参数值
    //@param url  指定的URL地址
    //@param name 参数名称
    //@return 参数值
    //
    function getUrlParam(name) {
        var url = window.location.href;
        var pattern = new RegExp("[?&]" + name + "=([^&]+)", "g");
        var matcher = pattern.exec(url);
        var items = null;
        if (null != matcher) {
            try {
                items = decodeURIComponent(decodeURIComponent(matcher[1]));
            } catch (e) {
                try {
                    items = decodeURIComponent(matcher[1]);
                } catch (e) {
                    items = matcher[1];
                }
            }
        }
        return items;
    }
    //点击事件
    function getlist() {
        //平台号
        var bid = 39606
        const button = '<button style="margin-left:10px" id="v-get" type="button" class="el-button el-button--default"><span>获取学生至今课程标题</span></button><input type="text" id="cos_id" autocomplete="off" placeholder="课程标题.." class="el-input__inner" style="width:100px;margin-left:10px"><button style="margin-left:10px" id="v-sou" type="button" class="el-button el-button--default"><span>搜索学生上过课评</span></button>';
        $("#main").before(button);
        let course_id, course_list, comment_list, choose_cid, in_l, in_r;

        $("#v-sou").on("click", function () {

            const sid = $("#cos_id").val();


            if (sid == '') {
                alert("你都没填标题，你认真的吗？OxO");
                return false;
            }

            const elm = 'body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li.el-select-dropdown__item.selected.hover';
            // const course_id = $(elm)[0].innerText;
            if ($(elm).length != 0) {
                course_id = $(elm)[0].innerText;
            } else {
                console.log("请选择内容!");
            }

            // 获取课程列表
            $.ajaxSettings.async = false;  //同步
            $.post("https://jwb.sc-edu.com/api/course/list/", { branch_id: bid }, function (result) {
                course_list = JSON.parse(result).data.lists;
                //遍历课程数据
                $.each(course_list, function (index, value) {
                    if (course_id == value.title) {
                        choose_cid = value.course_id;
                        return true;
                    }
                });
            });

            //寻找字符串索引号
            function find(str, cha, num) {
                var x = str.indexOf(cha);
                for (var i = 0; i < num; i++) {
                    x = str.indexOf(cha, x + 1);
                }
                return x;
            }

            //取当前时间
            const date = new Date().toLocaleDateString().split("/").join("-");

            //请求参数
            const comment_param = { 'branch_id': bid, 'mem_id': getUrlParam("id"), 'course_id': choose_cid, 'page': 1, 'limit': 500, 'start': '2000-01-01', 'end': date, 'read_logo': 1 };

            //获取课评记录
            $.ajaxSettings.async = false;  //同步
            $.post("https://jwb.sc-edu.com/api/lesson/comment_list/", comment_param, function (result) {
                comment_list = JSON.parse(result).data.lists;
                let title, context = '';
                //遍历课程数据
                $.each(comment_list, function (index, value) {
                    const content = value.comment_info.content;
                    in_l = find(content, '课程', 0);
                    in_r = find(content, '课程', 1);
                    let emp = content.substring(in_l + 5, in_r - 1).trim();
                    emp = emp.replaceAll('：', '');
                    emp = emp.replaceAll(':', '');
                    title = emp.replace(/[\r\n]/g, "") + "\n";

                    if (title.indexOf(sid) != -1) {
                        context += content;
                    }

                });
                //
                Dialog("执行完毕，请复制内容", "<textarea style='border:none;width:100%;opacity:1' rows='10'>" + context + "</textarea>");
                //
            });
        })

        /////////////////////////////////////////////////

        $("#v-get").on("click", function () {
            if ($("#main > div.flex-part-space > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div").length) {

                const elm = 'body > div.el-select-dropdown.el-popper > div.el-scrollbar > div.el-select-dropdown__wrap.el-scrollbar__wrap > ul > li.el-select-dropdown__item.selected.hover';
                // const course_id = $(elm)[0].innerText;
                if ($(elm).length != 0) {
                    course_id = $(elm)[0].innerText;
                } else {
                    console.log("请选择内容!");
                }

                // 获取课程列表
                $.ajaxSettings.async = false;  //同步
                $.post("https://jwb.sc-edu.com/api/course/list/", { branch_id: bid }, function (result) {
                    course_list = JSON.parse(result).data.lists;
                    //遍历课程数据
                    $.each(course_list, function (index, value) {
                        if (course_id == value.title) {
                            choose_cid = value.course_id;
                            return true;
                        }
                    });
                });

                //寻找字符串索引号
                function find(str, cha, num) {
                    var x = str.indexOf(cha);
                    for (var i = 0; i < num; i++) {
                        x = str.indexOf(cha, x + 1);
                    }
                    return x;
                }

                //取当前时间
                const date = new Date().toLocaleDateString().split("/").join("-");

                //请求参数
                const comment_param = { 'branch_id': bid, 'mem_id': getUrlParam("id"), 'course_id': choose_cid, 'page': 1, 'limit': 500, 'start': '2000-01-01', 'end': date, 'read_logo': 1 };

                //获取课评记录
                $.ajaxSettings.async = false;  //同步
                $.post("https://jwb.sc-edu.com/api/lesson/comment_list/", comment_param, function (result) {
                    comment_list = JSON.parse(result).data.lists;
                    let title = '';
                    //遍历课程数据
                    $.each(comment_list, function (index, value) {
                        var course_date = value.dated
                        const content = value.comment_info.content;
                        in_l = find(content, '课程', 0);
                        in_r = find(content, '课程', 1);
                        let emp = content.substring(in_l + 5, in_r - 1).trim();
                        emp = emp.replaceAll('：', '');
                        emp = emp.replaceAll(':', '');
                        title += emp.replace(/[\r\n]/g, "") + "  时间：" +course_date +"\n";
                    });
                    //prompt("执行完毕，请复制内容",title);
                    Dialog("执行完毕，请复制内容", "<textarea style='border:none;width:100%;opacity:1' rows='10'>" + title + "</textarea>");
                });
            } else {
                alert('请在学生的课评记录页面点击此按钮！！！')
            }


        });

    }

})();
