(this["webpackJsonppmsense-client"]=this["webpackJsonppmsense-client"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),o=n.n(r),i=(n(13),n(5)),u=n(2),l=n.n(u),s=n(6),f=n(1);n(15);var m=n(7).a.load();function p(e){var t=e.values;return c.a.createElement("div",null,t["pm0.1"]&&c.a.createElement("div",null,c.a.createElement("strong",null,"PM0.1"),c.a.createElement("p",null,t["pm0.1"])),t["pm2.5"]&&c.a.createElement("div",null,c.a.createElement("strong",null,"PM2.5"),c.a.createElement("p",null,t["pm2.5"])),t.pm10&&c.a.createElement("div",null,c.a.createElement("strong",null,"PM10"),c.a.createElement("p",null,t.pm10)))}var v=function(){var e={"cc4f2f18-7b99-4fae-b46d-3568a42cb3f8":"pm0.1","d7f6bea5-4e01-458d-9395-9e42ddd00b69":"pm2.5","4e79550a-da13-4cc3-905c-2c4426d305be":"pm10"},t=Object(a.useState)(!1),n=Object(f.a)(t,2),r=n[0],o=n[1],u=Object(a.useState)(!1),v=Object(f.a)(u,2),d=v[0],b=v[1],h=Object(a.useState)(!1),g=Object(f.a)(h,2),E=g[0],O=g[1],j=Object(a.useState)(!1),w=Object(f.a)(j,2),S=w[0],y=w[1];Object(s.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m;case 2:return t=e.sent,e.next=5,t.get();case 5:n=e.sent,a=n.visitorId,y(a);case 8:case"end":return e.stop()}}),e)})))();var k=function(t){var n={};for(var a in e)t.getCharacteristic(a).then((function(e){return e.startNotifications()})).then((function(t){return t.addEventListener("characteristicvaluechanged",(function(t){var a=e[t.target.uuid];n=Object.assign(n,Object(i.a)({},a,t.target.value.getUint8(0))),o(n)}))}))};return navigator.geolocation&&navigator.geolocation.watchPosition((function(e){O({lat:e.coords.latitude,lng:e.coords.longitude,acc:e.coords.accuracy})})),Object(a.useEffect)((function(){var e=setTimeout((function(){d&&k(d)}),1e3);return function(){return clearTimeout(e)}})),Object(a.useEffect)((function(){var e=new Date;if(!1!==r){var t=setInterval((function(){var t={location:E.lat+", "+E.lng,accuracy:E.acc,visitor:S,"pm0.1":r["pm0.1"],"pm2.5":r["pm2.5"],pm10:r.pm10,createdAt:e.toISOString()};fetch("https://pms.kixlive.ru/measurements/_doc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}),1e4);return function(){return clearInterval(t)}}}),[r,S]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},!1!==d?c.a.createElement("p",null,"\u0414\u0430\u0442\u0447\u0438\u043a \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d"):c.a.createElement("p",null,"\u0414\u0430\u0442\u0447\u0438\u043a \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d"),!d&&c.a.createElement("button",{onClick:function(){new Promise((function(e,t){navigator.bluetooth.requestDevice({acceptAllDevices:!0,optionalServices:["faf6c799-5567-4f54-89fb-c7188b3f3b88"]}).then((function(e){return e.gatt.connect()})).then((function(e){return e.getPrimaryService("faf6c799-5567-4f54-89fb-c7188b3f3b88")})).then((function(t){e(t)}))})).then((function(e){b(e),k(e)}))}},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c"),r&&c.a.createElement(p,{values:r})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ff36f00b.chunk.js.map