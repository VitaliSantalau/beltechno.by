(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{D5Hz:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.EmailJSResponseStatus=a.sendForm=a.send=a.init=void 0;var n=t("MkV5");Object.defineProperty(a,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var s=t("USkh"),r=null,o="https://api.emailjs.com";function i(e,a,t){return void 0===t&&(t={}),new Promise((function(s,r){var o=new XMLHttpRequest;for(var i in o.addEventListener("load",(function(e){var a=new n.EmailJSResponseStatus(e.target);200===a.status||"OK"===a.text?s(a):r(a)})),o.addEventListener("error",(function(e){r(new n.EmailJSResponseStatus(e.target))})),o.open("POST",e,!0),t)o.setRequestHeader(i,t[i]);o.send(a)}))}function c(e){var a=document&&document.getElementById("g-recaptcha-response");return a&&a.value&&(e["g-recaptcha-response"]=a.value),a=null,e}function l(e,a){r=e,o=a||"https://api.emailjs.com"}function u(e,a,t,n){var s={lib_version:"2.6.4",user_id:n||r,service_id:e,template_id:a,template_params:c(t)};return i(o+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})}function d(e,a,t,n){var c;if("string"==typeof t&&(t=document.querySelector("#"!==(c=t)[0]&&"."!==c[0]?"#"+c:c)),!t||"FORM"!==t.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(t);var l=new FormData(t);return l.append("lib_version","2.6.4"),l.append("service_id",e),l.append("template_id",a),l.append("user_id",n||r),i(o+"/api/v1.0/email/send-form",l).then((function(e){return s.UI.successState(t),e}),(function(e){return s.UI.errorState(t),Promise.reject(e)}))}a.init=l,a.send=u,a.sendForm=d,a.default={init:l,send:u,sendForm:d}},GegP:function(e,a,t){e.exports={form:"feedbackForm-module--form--2AhPA",show:"feedbackForm-module--show--3YuKf",containerMessage:"feedbackForm-module--containerMessage--3XxJg",header:"feedbackForm-module--header--3qS8Y",underheaderText:"feedbackForm-module--underheaderText--1nyWi",inputName:"feedbackForm-module--inputName--38aIo",inputEmail:"feedbackForm-module--inputEmail--36hx3",inputFeedback:"feedbackForm-module--inputFeedback--2PlH8",containerButtons:"feedbackForm-module--containerButtons--2ZszT",buttonClose:"feedbackForm-module--buttonClose--2A9IW",buttonSend:"feedbackForm-module--buttonSend--1VPXC",buttonLoading:"feedbackForm-module--buttonLoading--2dQqx",successMessage:"feedbackForm-module--successMessage--2MSI6",errorMessage:"feedbackForm-module--errorMessage--3Hjf1",validMessage:"feedbackForm-module--validMessage--JSW3O"}},LkCl:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("GegP"),s=t.n(n),r=t("q1tI"),o=t.n(r);var i=function(e,a,t){return e&&a&&t?function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(a)?void 0:"Пожалуйста, укажите корректный email":"Пожалуйста, заполните все поля"},c=t("D5Hz"),l=t.n(c),u=t("AeFk");function d(e,a){switch(a.type){case"success":return Object.assign({},e,{message:Object(u.a)("div",{className:s.a.successMessage},Object(u.a)("div",null,"Ваше сообщение было отправлено"))});case"error":return Object.assign({},e,{message:Object(u.a)("div",{className:s.a.errorMessage},Object(u.a)("div",null,"Ваше сообшение не было отправлено. Попробуйте позвонить"))});case"loading":return Object.assign({},e,{isShowLoading:!0});case"reset":return Object.assign({},e,{message:null,isShowLoading:!1});case"valid":return Object.assign({},e,{message:Object(u.a)("div",{className:s.a.validMessage},a.payload)});default:throw new Error}}Object(c.init)("user_40O79S8SCPDAID55QRcBX");var m={isShowLoading:!1,validMessage:null,message:null};function b(e){var a=e.handleShowFeedback,t=Object(r.useState)({senderName:"",senderEmail:"",feedback:""}),n=t[0],c=t[1],b=n.senderName,v=n.senderEmail,g=n.feedback,p=function(e){var a;c(Object.assign({},n,((a={})[e.target.name]=e.target.value,a)))},f=Object(r.useReducer)(d,m),O=f[0],j=f[1];return Object(u.a)(o.a.Fragment,null,Object(u.a)("div",{className:s.a.form},Object(u.a)("div",{className:s.a.containerMessage},Object(u.a)("div",{className:s.a.header},"Оставить заявку"),Object(u.a)("div",{className:s.a.underheaderText},"Мы свяжемся с Вами!"),O.message),Object(u.a)("input",{type:"text",className:s.a.inputName,required:!0,placeholder:"Ваше имя",name:"senderName",value:b,onChange:p}),Object(u.a)("input",{type:"text",className:s.a.inputEmail,required:!0,placeholder:"Ваш е-mail",name:"senderEmail",value:v,onChange:p}),Object(u.a)("textarea",{className:s.a.inputFeedback,required:!0,placeholder:"Оставить заявку / Задать вопрос",name:"feedback",value:g,onChange:p}),Object(u.a)("div",{className:s.a.containerButtons},O.isShowLoading?Object(u.a)("button",{className:s.a.buttonLoading},"Отправка..."):Object(u.a)("button",{className:s.a.buttonSend,onClick:function(){var e=i(b,v,g);e?(j({type:"valid",payload:e}),setTimeout((function(){return j({type:"reset"})}),3e3)):(j({type:"loading"}),l.a.send("service_9fpesnd","template_jxk3fme",n).then((function(e){j({type:"success"}),setTimeout(a,3e3),setTimeout((function(){return j({type:"reset"})}),3e3),c({senderEmail:"",feedback:""}),console.log("SUCCESS!",e.status,e.text)}),(function(e){j({type:"error"}),setTimeout(a,3e3),setTimeout((function(){return j({type:"reset"})}),3e3),c({senderName:"",senderEmail:"",feedback:""}),console.log("FAILED...",e)})))}},"Отправить"),Object(u.a)("button",{onClick:a,className:s.a.buttonClose},"Закрыть"))))}},MkV5:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};a.EmailJSResponseStatus=n},USkh:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();a.UI=n},jxEM:function(e,a,t){e.exports={root:"vegetables-module--root--1uYEV",main:"vegetables-module--main--3TcNN",wrapper:"vegetables-module--wrapper--108qq",containerHeaderSection:"vegetables-module--containerHeaderSection--90K0t",title:"vegetables-module--title--148Yb",containerPhrases:"vegetables-module--containerPhrases--jerPA",wordAny:"vegetables-module--wordAny--3DVcH",buttonOrder:"vegetables-module--buttonOrder--3Mx6L",pulse:"vegetables-module--pulse--5B2Ky",containerListItems:"vegetables-module--containerListItems--1Mb49",containerItem:"vegetables-module--containerItem--3xUVm",containerUnVisiblePartItem:"vegetables-module--containerUnVisiblePartItem--2_kXw",containerButtonArea:"vegetables-module--containerButtonArea--2NDHc",containerVisiblePartItem:"vegetables-module--containerVisiblePartItem--3FO9D",containerImageItem:"vegetables-module--containerImageItem--20dIS",image:"vegetables-module--image--29Mt0",containerNameItem:"vegetables-module--containerNameItem--2KQ5Y",buttonItem:"vegetables-module--buttonItem--3i7ev",containerMarkTrue:"vegetables-module--containerMarkTrue--16eBQ",containerMarkFalse:"vegetables-module--containerMarkFalse--3-tEM",round:"vegetables-module--round--2tezg"}},smIJ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("jxEM"),s=t.n(n),r=t("q1tI"),o=t.n(r),i=t("W/9C"),c=t("LbRr"),l=t("EYWl"),u=t("Wbzz"),d=t("9eSz"),m=t.n(d),b=t("IP2g"),v=t("wHSu"),g=t("LkCl"),p=t("AeFk");function f(e){var a=e.data,t=Object(r.useState)(!1),n=t[0],d=t[1],f=function(){d(!n)};return Object(p.a)(o.a.Fragment,null,Object(p.a)(l.a,{title:"Овощи",pathname:"/vegetables"}),Object(p.a)("div",{className:s.a.root},Object(p.a)(c.a,null),Object(p.a)("main",{className:s.a.main},Object(p.a)("div",{className:s.a.wrapper},Object(p.a)("section",{className:s.a.containerHeaderSection},Object(p.a)("h1",{className:s.a.title},"Овощи свежие"),Object(p.a)("div",{className:s.a.containerPhrases},Object(p.a)("p",null,"мы готовы поставить для Вас"),Object(p.a)("p",{className:s.a.wordAny},"любой"),Object(p.a)("p",null,"ассортимент овощей")),Object(p.a)("button",{className:s.a.buttonOrder,onClick:f},"Заявка"),n&&Object(p.a)(g.a,{handleShowFeedback:f})),Object(p.a)("div",{className:s.a.containerListItems},a.allContentfulVegetable.edges.map((function(e){var a=e.node;return Object(p.a)(u.Link,{to:"/vegetables/"+a.id,key:a.id,className:s.a.containerItem},Object(p.a)("div",{className:s.a.containerVisiblePartItem},Object(p.a)("div",{className:s.a.containerImageItem},Object(p.a)(m.a,{fluid:a.image.fluid,className:s.a.image})),Object(p.a)("div",{className:s.a.containerNameItem},a.name)),Object(p.a)("div",{className:s.a.containerUnVisiblePartItem},Object(p.a)("div",{className:s.a.containerButtonArea},Object(p.a)("div",{className:s.a.buttonItem},"Выбрать этот товар"))),a.state?Object(p.a)("div",{className:s.a.containerMarkTrue},Object(p.a)("div",{className:s.a.round},Object(p.a)(b.a,{icon:v.d})),Object(p.a)("div",{className:s.a.mark},"в наличии")):Object(p.a)("div",{className:s.a.containerMarkFalse},Object(p.a)("div",{className:s.a.round},Object(p.a)(b.a,{icon:v.d})),Object(p.a)("div",{className:s.a.mark},"под заказ")))}))))),Object(p.a)(i.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-vegetables-js-260bcf2757d8fba07666.js.map