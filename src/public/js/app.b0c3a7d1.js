(function(e){function t(t){for(var n,r,c=t[0],i=t[1],l=t[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,c=1;c<s.length;c++){var i=s[c];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1:function(e,t){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return s(t)}function o(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);var n={};s.r(n),s.d(n,"getLesson",(function(){return B}));var a={};s.r(a),s.d(a,"login",(function(){return ue})),s.d(a,"getIam",(function(){return de}));var o={};s.r(o),s.d(o,"getLessons",(function(){return me})),s.d(o,"getLessonUrl",(function(){return be})),s.d(o,"createLesson",(function(){return pe})),s.d(o,"deleteLesson",(function(){return je})),s.d(o,"updateLesson",(function(){return he})),s.d(o,"getLessonItem",(function(){return ve}));var r={};s.r(r),s.d(r,"admin",(function(){return a})),s.d(r,"lessons",(function(){return o}));s("e260"),s("e6cf"),s("cca6"),s("a79d");var c=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},l=[],u=s("5530"),d=s("2f62"),f={methods:Object(u["a"])({},Object(d["b"])("Auth",{getUser:"getUser"}))},m=f,b=(s("5c0b"),s("2877")),p=Object(b["a"])(m,i,l,!1,null,null,null),j=p.exports,h=s("8c4f"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth-page flex-wrap justify-center align-center h100"},[s("form",{staticClass:"flex-column auth-form"},[e._l(e.authInputs,(function(t,n){return s("label",{key:n,staticClass:"w100 default-label"},[s("p",[e._v(" "+e._s(t.label)+" ")]),s("input",{staticClass:"w100",attrs:{type:t.type,placeholder:t.placeholder},on:{input:function(s){return e.changeAuthForm({key:t.key,value:s.target.value})}}})])})),s("input",{staticClass:"default-button",attrs:{type:"submit",value:"Войти"},on:{click:function(t){return t.preventDefault(),e.login(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}})],2)])},g=[],y={data:function(){return{authInputs:[{type:"text",placeholder:"Введите логин",label:"Логин",key:"login"},{type:"password",placeholder:"Введите пароль",label:"Пароль",key:"password"}]}},methods:Object(u["a"])(Object(u["a"])({},Object(d["d"])("Auth",{changeAuthForm:"changeAuthForm"})),Object(d["b"])("Auth",{login:"login"}))},k=y,_=Object(b["a"])(k,v,g,!1,null,null,null),w=_.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lessons flex-wrap"},[s("div",{staticClass:"w100 flex justify-space-between"},[s("p",[e._v("Список уроков")]),s("button",{staticClass:"default-button mt-0",on:{click:e.addNewLesson}},[e._v(" Добавить урок ")])]),s("div",{staticClass:"lessons__items w100"},e._l(e.lessons,(function(t,n){return s("lesson-item",{key:n,attrs:{"lesson-data":t},on:{openModal:function(t){e.editModalIsActive=!0}}})})),1),e.editModalIsActive?s("edit-modal",{attrs:{"is-active":e.editModalIsActive},on:{closeModal:function(t){e.editModalIsActive=!1}}}):e._e()],1)},L=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lesson-item flex w100 justify-space-between align-center"},[s("p",{staticClass:"lesson-item__text"},[s("b",[e._v(e._s(e.lessonData.name))]),e._v(" (создан "+e._s(e.formattedDate)+") ")]),s("div",{staticClass:"lesson-item__buttons"},[s("button",{staticClass:"lesson-item__url-button",on:{click:function(t){return e.goToLesson(e.lessonData.id)}}},[e._v(" Перейти к уроку ")]),s("button",{staticClass:"lesson-item__edit-button",on:{click:function(t){return t.preventDefault(),e.openEditModal(t)}}},[e._v(" Редактировать ")]),s("button",{staticClass:"lesson-item__url-button",on:{click:function(t){return e.deleteHandler(e.lessonData)}}},[e._v(" Удалить ")])])])},F=[],C=(s("b0c0"),s("c1df")),z=s.n(C),E={props:{lessonData:{type:Object,default:function(){return{}},required:!0}},computed:{formattedDate:function(){return z()(this.lessonData.createdAt).format("DD.MM.YYYY")}},methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(d["d"])("Lessons",{setEditForm:"setEditForm"})),Object(d["b"])("Lessons",{deleteLesson:"deleteLesson",goToLesson:"goToLesson"})),{},{openEditModal:function(){this.setEditForm(this.lessonData),this.$emit("openModal")},deleteHandler:function(e){var t=confirm('Действительно удалить урок "'.concat(e.name,'"?'));t&&this.deleteLesson(e.id)}})},A=E,I=Object(b["a"])(A,x,F,!1,null,null,null),M=I.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"edit-modal flex justify-center align-center"},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeModal,expression:"closeModal"}],staticClass:"edit-modal__content flex-column"},[s("label",{staticClass:"w100 default-label flex align-center"},[s("p",[e._v(" Название урока: ")]),s("input",{attrs:{type:"text",placeholder:"Введите название"},domProps:{value:e.editForm.name},on:{input:function(t){return e.changeEditForm({key:"name",value:t.target.value})}}})]),s("ckeditor",{staticClass:"w100",attrs:{value:e.editForm.text,editor:e.editor},on:{input:function(t){return e.changeEditForm({key:"text",value:t})}}}),s("label",{staticClass:"w100 default-label pt-20"},[s("p",{staticClass:"pb-20"},[s("span",[e._v(" Видео урока ")]),e.editForm.id?s("span",[e._v(" ( "),s("a",{attrs:{target:"blank",href:e.editForm.video_url}},[e._v(" текущее видео ")]),e._v(" ) ")]):e._e()]),s("input",{attrs:{id:"lessonVideo",type:"file"},on:{change:function(t){return e.changeEditForm({key:"video_file",value:t.target.files[0]})}}})]),s("input",{staticClass:"default-button",attrs:{type:"submit",value:"Сохранить"},on:{click:function(t){return t.preventDefault(),e.saveHandler(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveHandler(t)}}})],1)])},P=[],S=s("c7db"),U=s("fb3d"),T=s.n(U),$={directives:{onClickaway:S["directive"]},data:function(){return{editor:T.a,editorData:"",editModalIsActive:!1}},props:{isActive:{type:Boolean,default:!1}},computed:Object(u["a"])({},Object(d["c"])("Lessons",{editForm:"editForm"})),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(d["b"])("Lessons",{createLesson:"createLesson",updateLesson:"updateLesson"})),Object(d["d"])("Lessons",{changeEditForm:"changeEditForm"})),{},{saveHandler:function(){var e,t=this;e=this.editForm.id?"updateLesson":"createLesson",this[e]().then((function(){t.closeModal()}))},closeModal:function(){this.isActive&&this.$emit("closeModal")}})},V=$,H=Object(b["a"])(V,D,P,!1,null,null,null),N=H.exports,B=function(){return{name:"",video_file:null,text:""}},R={components:{LessonItem:M,EditModal:N},data:function(){return{editModalIsActive:!1}},created:function(){this.getLessons()},computed:Object(u["a"])({},Object(d["c"])("Lessons",{lessons:"lessons"})),methods:Object(u["a"])(Object(u["a"])(Object(u["a"])({},Object(d["d"])("Lessons",{setEditForm:"setEditForm"})),Object(d["b"])("Lessons",{getLessons:"getLessons"})),{},{addNewLesson:function(){this.setEditForm(n.getLesson()),this.editModalIsActive=!0}})},Y=R,q=Object(b["a"])(Y,O,L,!1,null,null,null),W=q.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"lesson-page flex-wrap"},[s("div",{staticClass:"w100 lesson-page__buttons flex justify-center"},[s("button",{on:{click:function(t){return e.resizeVideo(50)}}},[e._v(" + ")]),s("button",{on:{click:function(t){return e.resizeVideo(-50)}}},[e._v(" - ")])]),s("div",{staticClass:"lesson-page__content w100 flex align-start"},[s("div",{staticClass:"lesson-page__left-part"},[s("p",{staticClass:"lesson-name"},[e._v(" "+e._s(e.lesson.name)+" ")]),s("div",{ref:"videoPlayerWrapper",staticClass:"lesson-video-wrapper"},[e.lesson.id?s("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"}}):e._e()],1)]),s("div",{staticClass:"lesson-page__right-part",domProps:{innerHTML:e._s(e.lesson.text)}})])])},G=[],K=(s("fda2"),s("d6d3")),Q={components:{videoPlayer:K["videoPlayer"]},created:function(){this.getLesson(this.$route.params.hash)},computed:Object(u["a"])(Object(u["a"])({},Object(d["c"])("LessonView",{lesson:"lesson"})),{},{playerOptions:function(){return{muted:!0,autoplay:!0,language:"en",responsive:!0,playbackRates:[.5,1,1.5,2],fluid:!0,breakpoints:{tiny:300,xsmall:400,small:500,medium:600,large:700,xlarge:800,huge:900},sources:[{type:"video/mp4",src:this.lesson.video_url}]}}}),methods:Object(u["a"])(Object(u["a"])({},Object(d["b"])("LessonView",{getLesson:"getLesson"})),{},{resizeVideo:function(e){var t=this.$refs.videoPlayerWrapper;t.style.width="".concat(t.offsetWidth-40+e,"px")}})},X=Q,Z=Object(b["a"])(X,J,G,!1,null,null,null),ee=Z.exports,te=(s("96cf"),s("1da1")),se=s("bc3a"),ne=s.n(se),ae=s("4328"),oe=s.n(ae),re="https://moroshka-english.xyz/",ce={baseURL:re,headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},paramsSerializer:function(e){return oe.a.stringify(e)}},ie=ne.a.create(ce),le=ie,ue=function(e){return le({method:"post",url:"/api/login",data:e})},de=function(){return le({method:"get",headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))},url:"/api/iam"})},fe=function(e){return le(Object(u["a"])(Object(u["a"])({},e),{},{headers:Object(u["a"])(Object(u["a"])({},e.headers),{},{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))})}))},me=function(){return fe({method:"get",url:"/api/lessons"})},be=function(e){return fe({method:"post",url:"/api/lessons/hash/".concat(e)})},pe=function(e){return fe({method:"post",headers:{"Content-Type":"multipart/form-data"},url:"/api/lessons",data:e})},je=function(e){return fe({method:"delete",url:"/api/lessons/".concat(e)})},he=function(e){var t=e.id,s=e.data;return fe({method:"post",headers:{"Content-Type":"multipart/form-data"},url:"/api/lessons/".concat(t),data:s})},ve=function(e){return fe({method:"get",url:"/api/lessons/hash/".concat(e)})},ge=r,ye={namespaced:!0,state:{authForm:{},user:{}},getters:{authForm:function(e){return e.authForm},user:function(e){return e.user}},mutations:{changeAuthForm:function(e,t){var s=t.key,n=t.value;e.authForm[s]=n},changeUserData:function(e,t){e.user=t}},actions:{login:function(e){return Object(te["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.state,e.commit,n=e.dispatch,ge.admin.login(Object(u["a"])({},s.authForm)).then((function(e){var t=e.data;window.localStorage.setItem("token",t.token),n("getUser")})).catch((function(){Ae.push({name:"auth"})}));case 2:case"end":return t.stop()}}),t)})))()},getUser:function(e){var t=e.commit;return ge.admin.getIam().then((function(e){var s=e.data;t("changeUserData",s.user),Ae.push({name:"admin"})})).catch((function(){Ae.push({name:"auth"})}))}}},ke={lessons:[],editForm:n.getLesson()},_e={lessons:function(e){return e.lessons},editForm:function(e){return e.editForm}},we=(s("a434"),{setLessons:function(e,t){e.lessons=t},removeLessonFromArray:function(e,t){e.lessons.splice(t,1)},updateLessonItem:function(e,t){var s=t.index,n=t.data;e.lessons[s]=n},changeEditForm:function(e,t){var s=t.key,n=t.value;e.editForm[s]=n},setEditForm:function(e,t){e.editForm=Object(u["a"])({},t)}}),Oe=(s("99af"),s("c740"),s("2909")),Le={getLessons:function(e){var t=e.commit;ge.lessons.getLessons().then((function(e){var s=e.data;t("setLessons",s)}))},goToLesson:function(e,t){ge.lessons.getLessonUrl(t).then((function(e){var t=e.data;Ae.push({name:"lessonItem",params:{hash:t}})}))},createLesson:function(e){var t=e.state,s=e.commit,n=new FormData;for(var a in t.editForm)Object.prototype.hasOwnProperty.call(t.editForm,a)&&n.set(a,t.editForm[a]);return ge.lessons.createLesson(n).then((function(e){var n=e.data,a=[].concat(Object(Oe["a"])(t.lessons),[n]);s("setLessons",a)}))},deleteLesson:function(e,t){var s=e.state,n=e.commit;ge.lessons.deleteLesson(t).then((function(){var e=s.lessons.findIndex((function(e){return e.id===t}));n("removeLessonFromArray",e)}))},updateLesson:function(e){var t=e.state,s=e.commit,n=t.editForm.id,a=new FormData;for(var o in t.editForm)Object.prototype.hasOwnProperty.call(t.editForm,o)&&a.set(o,t.editForm[o]);return a.set("_method","patch"),ge.lessons.updateLesson({id:n,data:a}).then((function(e){var a=e.data,o=t.lessons.findIndex((function(e){return e.id===n}));s("updateLessonItem",{index:o,data:a})}))}},xe={namespaced:!0,state:ke,getters:_e,mutations:we,actions:Le},Fe={namespaced:!0,state:{lesson:{}},getters:{lesson:function(e){return e.lesson}},mutations:{setLesson:function(e,t){e.lesson=t}},actions:{getLesson:function(e,t){var s=e.commit;ge.lessons.getLessonItem(t).then((function(e){var t=e.data;s("setLesson",t)})).catch((function(){Ae.push("/404")}))}}};c["default"].use(d["a"]);var Ce=new d["a"].Store({modules:{Auth:ye,Lessons:xe,LessonView:Fe}});c["default"].use(h["a"]);var ze=[{path:"/auth",name:"auth",component:w,beforeEnter:function(e,t,s){window.localStorage.getItem("token")?Ce.dispatch("Auth/getUser"):s()}},{path:"/admin",name:"admin",component:W,beforeEnter:function(e,t,s){window.localStorage.getItem("token")?(console.log(Ce.getters["Auth/user"].id),Ce.getters["Auth/user"].id?s():Ce.dispatch("Auth/getUser")):Ce.dispatch("Auth/login")}},{path:"/lesson/:hash",name:"lessonItem",component:ee}],Ee=new h["a"]({routes:ze,mode:"history"}),Ae=Ee,Ie=s("3730"),Me=s.n(Ie);s("a41b");c["default"].use(Me.a),c["default"].config.productionTip=!1,new c["default"]({router:Ae,store:Ce,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),a=s.n(n);a.a},"9c0c":function(e,t,s){},a41b:function(e,t,s){}});
//# sourceMappingURL=app.b0c3a7d1.js.map