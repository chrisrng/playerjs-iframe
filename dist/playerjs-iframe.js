!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("playerjs-iframe",[],t):"object"==typeof exports?exports["playerjs-iframe"]=t():e["playerjs-iframe"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),i=r(a),s=n(2),l=r(s),f=n(7),c=r(f),d=n(6),p=r(d),h=function(){function e(t){var n=this;if(o(this,e),this.Adapter=c["default"][t.adapter],!this.Adapter)throw new Error("No adapter for "+t.adapter);this.config=t,this.messenger=new l["default"]({context:p["default"].CONTEXT}),Object.keys(p["default"]).forEach(function(e){n[e]=p["default"][e]})}return u(e,[{key:"addAdapter",value:function(e,t){c["default"][e]=t}},{key:"load",value:function(){var e=new this.Adapter(this.config,this.messenger);return new i["default"](function(t,n){e.load().then(function(e){e.initMessenger(),t(e)})})}}]),e}();t["default"]=h,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){this.state?e[this.state]&&e[this.state](this.data):this.callbacks.push(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t){function o(e,t){this.state||(this.state=e,this.data=t,this.callbacks.forEach(r.bind(this)),this.callbacks=[])}n(this,e),this.callbacks=[],this.state,this.data,t(o.bind(this,"fulfill"),o.bind(this,"reject"))}return o(e,[{key:"then",value:function(e,t){r.call(this,{fulfill:e,reject:t})}}]),e}();t["default"]=u,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(3),i=r(a),s=n(4),l=r(s),f=n(5),c=r(f),d=n(6),p=r(d),h=function(){function e(t){o(this,e),this.config=t||{},this.listeners={},this.bindEvents()}return u(e,[{key:"bindEvents",value:function(){var e=this;this.on(p["default"].METHODS.ADD_EVENT_LISTENER,function(t,n){e.listeners[n.value]=new c["default"](e.listeners[n.value]),e.listeners[n.value].add(n.listener),l["default"].log("[messenger#addEventListener]",n)}),this.on(p["default"].METHODS.REMOVE_EVENT_LISTENER,function(t,n){e.listeners[n.value]&&e.listeneres[n.value].remove(n.listener),l["default"].log("[messenger#removeEventListener]",n)})}},{key:"emit",value:function(e){var t=this;if("string"==typeof e&&(e={event:e}),e=Object.keys(this.config).reduce(function(e,n){return e.hasOwnProperty(n)||(e[n]=t.config[n]),e},e||{}),e.event===p["default"].EVENTS.READY)(0,i["default"])(e);else{var n=e.listener?[e.listener]:this.listeners[e.event]||[];n.forEach(function(t){e.listener=t,l["default"].log("[messenger#emit]",e),(0,i["default"])(e)})}return this}},{key:"on",value:function(e,t){var n=this;return window.addEventListener("message",function(r){try{var o=JSON.parse(r.data);n.config.context&&o.context!==n.config.context||o.method===e&&t&&t(o.value,o)}catch(u){}}),this}},{key:"returns",value:function(e,t){e.value=t,e.event=e.method||e.event,delete e.method,this.emit(e)}}]),e}();t["default"]=h,e.exports=t["default"]},function(e,t){"use strict";function n(e){window.parent.postMessage(JSON.stringify(e),"*")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={log:function(){window.DEBUG&&window.console&&window.console.log.apply(window.console,Array.prototype.slice.call(arguments))}},e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];return n(this,o),e.add=e.add||function(t){return-1===e.indexOf(t)?(e.push(t),e):void 0},e.remove=e.remove||function(t){var n=e.indexOf(t);return-1!==n?(e.splice(n,1),e):void 0},e};t["default"]=r,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={CONTEXT:"player.js",EVENTS:{READY:"ready",PLAY:"play",PAUSE:"pause",ENDED:"ended",SEEKED:"seeked",TIME_UPDATE:"timeupdate",PROGRESS:"progress",ERROR:"error"},METHODS:{PLAY:"play",PAUSE:"pause",GET_PAUSED:"getPaused",MUTE:"mute",UNMUTE:"unmute",GET_MUTED:"getMuted",SET_VOLUME:"setVolume",GET_VOLUME:"getVolume",GET_DURATION:"getDuration",SET_CURRENT_TIME:"setCurrentTime",GET_CURRENT_TIME:"getCurrentTime",SET_LOOP:"setLoop",GET_LOOP:"getLoop",REMOVE_EVENT_LISTENER:"removeEventListener",ADD_EVENT_LISTENER:"addEventListener"}},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),u=r(o),a=n(12),i=r(a);t["default"]={vimeo:u["default"],youtube:i["default"]},e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),l=n(1),f=r(l),c=n(10),d=r(c),p=n(11),h=r(p),y=n(4),v=r(y),m=n(6),E=r(m),g="//f.vimeocdn.com/js/froogaloop2.min.js",b=["play","pause","getPaused","mute","unmute","getMuted","setVolume","getVolume","getDuration","setCurrentTime","getCurrentTime"],T=["play","paused","ended"],w=function(e){function t(e,n,r){o(this,t);var a=u(this,Object.getPrototypeOf(t).call(this,e,n));a.supportedEvents=T,a.supportedMethods=b;var i=e.url.split("/").pop(),s=new d["default"]("https://player.vimeo.com/video/"+i+"?api=1");return s.appendTo(document.body),a.player=$f(s.iframe),a.player.addEvent("ready",function(){v["default"].log("[vimeo#event:ready]"),a.player.addEvent("play",function(){v["default"].log("[vimeo#event:play]"),a.messenger.emit(E["default"].EVENTS.PLAY)}),a.player.addEvent("pause",function(){v["default"].log("[vimeo#event:pause]"),a.messenger.emit(E["default"].EVENTS.PAUSE)}),a.player.addEvent("finish",function(){v["default"].log("[vimeo#event:ended]"),a.messenger.emit(E["default"].EVENTS.ENDED),a.messenger.emit(E["default"].EVENTS.SEEKED)}),r(a)}),a}return a(t,e),i(t,[{key:"play",value:function(){this.player.api("play")}},{key:"pause",value:function(){this.player.api("pause")}},{key:"getPaused",value:function(){return this.player.api("paused")}},{key:"mute",value:function(){this.isMuted=!0,this.lastVolume=this.getVolume(),this.player.api("setVolume",0)}},{key:"unmute",value:function(){this.isMuted=!1,this.player.api("setVolume",this.lastVolume)}},{key:"getMuted",value:function(){return this.isMuted}},{key:"setVolume",value:function(e){this.player.api("setVolume",(e/100).toFixed(2))}},{key:"getVolume",value:function(){return 100*this.player.api("getVolume")}},{key:"getDuration",value:function(e){var t=this;this.player.api("getDuration",function(n){v["default"].log("[vimeo#method:getDuration]",n),t.messenger.returns(e,n)})}},{key:"setCurrentTime",value:function(e){v["default"].log("[vimeo#method:setCurrentTime]",e.value),this.player.api("seekTo",e.value)}},{key:"getCurrentTime",value:function(){var e=this;this.player.api("getDuration",function(t){v["default"].log("[vimeo#method:getDuration]",t),e.messenger.returns(data,t)})}}]),t}(s.BaseVideoAdapter);w.isMuted=!1,w.lastVolume=100;var _=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"load",value:function(){var e=this;return new f["default"](function(t,n){(0,h["default"])(g).then(function(){new w(e.config,e.messenger,t)})})}}]),t}(s.BaseServiceAdapter);t["default"]=_,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseVideoAdapter=t.BaseServiceAdapter=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(6),i=r(a);t.BaseServiceAdapter=function s(e,t){o(this,s),this.config=e,this.messenger=t},t.BaseVideoAdapter=function(){function e(t,n){o(this,e),this.supportedEvents=[],this.supportedMethods=[],this.config=t,this.messenger=n}return u(e,[{key:"initMessenger",value:function(){var e=this;this.supportedMethods.forEach(function(t){e.messenger.on(t,function(n,r){e.player[t](r)})}),this.supportedEvents.length>0&&this.supportedMethods.push(i["default"].METHODS.ADD_EVENT_LISTENER,i["default"].METHODS.REMOVE_EVENT_LISTENER),this.messenger.emit({event:i["default"].EVENTS.READY,value:{src:window.location.href,events:this.supportedEvents,methods:this.supportedMethods}})}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u={width:"100%",height:"100%",frameBorder:"0",scrolling:"no",allowfullscreen:"1"},a=function(){function e(t,o){var a=this;n(this,e),o=r({},u,o),this.iframe=document.createElement("iframe"),Object.keys(o).forEach(function(e){a.iframe.setAttribute(e,o[e])}),this.iframe.src=t}return o(e,[{key:"appendTo",value:function(e){e&&e.appendChild(this.iframe)}}]),e}();t["default"]=a,e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return new a["default"](function(t,n){var r=document.createElement("script");r.async=!0,(document.head||document.body).appendChild(r),r.onload=r.onreadystatechange=function(e,o){(o||!r.readyState||/loaded|complete/.test(r.readyState))&&(r.onload=r.onreadystatechange=null,r=void 0,o?n():t())},r.src=e})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(1),a=r(u);e.exports=t["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(9),l=n(1),f=r(l),c=n(11),d=r(c),p=n(4),h=r(p),y=n(6),v=r(y),m="//www.youtube.com/iframe_api",E=["play","pause","getPaused","mute","unmute","getMuted","setVolume","getVolume","getDuration","setCurrentTime","getCurrentTime"],g=["play","paused","ended","error"],b=function(e){function t(e,n,r){o(this,t);var a=u(this,Object.getPrototypeOf(t).call(this,e,n));a.supportedEvents=g,a.supportedMethods=E;var i=document.createElement("div"),s=new URL(e.url);return document.body.appendChild(i),a.player=new YT.Player(i,{height:"100%",width:"100%",videoId:s.searchParams.get("v"),events:{onReady:function(){r(a),h["default"].log("[youtube#event:ready]")},onError:function(){a.messenger.emit({event:v["default"].EVENTS.ERROR,value:{code:-1,msg:"something went wrong"}}),h["default"].log("[youtube#event:error]")},onStateChange:function(e){var t={0:v["default"].EVENTS.ENDED,1:v["default"].EVENTS.PLAY,2:v["default"].EVENTS.PAUSE};t[e.data]&&(a.messenger.emit(t[e.data]),h["default"].log("[youtube#event:%s]",t[e.data]))}}}),a}return a(t,e),i(t,[{key:"play",value:function(){this.player.playVideo(),h["default"].log("[youtube#method:play]")}},{key:"pause",value:function(){this.player.pauseVideo(),h["default"].log("[youtube#method:pause]")}},{key:"mute",value:function(){this.player.mute(),h["default"].log("[youtube#method:mute]")}},{key:"unmute",value:function(){this.player.unMute(),h["default"].log("[youtube#method:unmute]")}},{key:"getDuration",value:function(e){var t=this.player.getDuration();this.messenger.returns(e,t),h["default"].log("[youtube#method:getDuration]",t)}},{key:"setCurrentTime",value:function(e){this.player.seekTo(e.value),h["default"].log("[youtube#method:setCurrentTime]",e.value)}}]),t}(s.BaseVideoAdapter),T=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"load",value:function(){var e=this;return new f["default"](function(t,n){window.onYouTubeIframeAPIReady=function(){new b(e.config,e.messenger,t)},(0,d["default"])(m)})}}]),t}(s.BaseServiceAdapter);t["default"]=T,e.exports=t["default"]}])});