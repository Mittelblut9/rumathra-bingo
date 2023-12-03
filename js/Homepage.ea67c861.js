"use strict";(self["webpackChunkrumathra_bingo"]=self["webpackChunkrumathra_bingo"]||[]).push([[37],{717:function(t,e,i){i.r(e),i.d(e,{default:function(){return it}});var n=i(252);const o={class:"position-absolute left-0 bottom-0 d-flex"};function s(t,e,i,s,l,r){const a=(0,n.up)("BingoComponent"),c=(0,n.up)("SaveButtonAtom"),d=(0,n.up)("EditButtonAtom"),u=(0,n.up)("EditMouseOverButtonAtom"),m=(0,n.up)("EditBingoGifButtonAtom");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(a),(0,n._)("div",o,[(0,n.Wm)(c,{class:"p-3"}),(0,n.Wm)(d,{class:"p-3"}),(0,n.Wm)(u,{class:"p-3"}),(0,n.Wm)(m,{class:"p-3"})])],64)}const l={class:"edit-button"};function r(t,e,i,o,s,r){return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=t=>r.triggerEditEvent())},"Edit")])}var a={name:"EditButtonAtom",data(){return{edit:!1}},methods:{triggerEditEvent(){const t=this.$el.firstChild;t.innerHTML=this.edit?"Edit":"Editting",t.classList.toggle("btn-danger"),this.edit=!this.edit,document.dispatchEvent(new CustomEvent("editBingo"))}}},c=i(744);const d=(0,c.Z)(a,[["render",r]]);var u=d;const m={class:"mb-3 w-50"},g=(0,n._)("label",{for:"bingoGifInput",class:"form-label"},"Das Bingo Gif (Gebe einen Discord Link ein) (NUR gif)",-1),h=["value"],p=(0,n._)("div",{class:"invalid-feedback"}," Please provide a discord image path ",-1),v=(0,n._)("div",{class:"valid-feedback"}," Looks good! Saved the path. ",-1);function b(t,e,i,o,s,l){return(0,n.wg)(),(0,n.iD)("div",m,[g,(0,n._)("input",{type:"email",class:"form-control",id:"bingoGifInput",placeholder:"https://cdn.discordapp.com/attachments/xxx/xxx/YOUR_GIF.png",value:l.getImage()},null,8,h),p,v])}var f={name:"EditMouseOverButtonAtom",data(){return{validExtensions:["gif"]}},mounted(){this.$el.querySelector("input").addEventListener("focusout",this.handleFileSelect,!1)},methods:{handleFileSelect(t){const e=t.target.value;if(!e)return this.validation(!0),void this.saveImage("");const i=new URL(e).hostname;if("cdn.discordapp.com"!==i)return void this.validation(!1);const n=e.split("?")[0],o=n.split(".").pop().toLowerCase();this.validExtensions.includes(o)?(this.validation(!0),this.saveImage(n)):this.validation(!1)},validation(t){t?(this.$el.querySelector("input").classList.remove("is-invalid"),this.$el.querySelector("input").classList.add("is-valid")):(this.$el.querySelector("input").classList.remove("is-valid"),this.$el.querySelector("input").classList.add("is-invalid"))},saveImage(t){const e=window.location.pathname,i=new Date,n=new Date;n.setFullYear(i.getFullYear()+1);const o=n.toUTCString();document.cookie=`bingoGif=${t}; expires=${o}; path=${e}; sameSite=strict;`},getImage(){const t=`; ${document.cookie}`,e=t.split("; bingoGif="),i=e.pop().split(";").shift();return i}}};const S=(0,c.Z)(f,[["render",b]]);var y=S;const x={class:"mb-3 w-50"},E=(0,n._)("label",{for:"hoverImageInput",class:"form-label"},"Das Hover Bild (Gebe einen Discord Link ein) (NUR png oder jpg)",-1),q=["value"],k=(0,n._)("div",{class:"invalid-feedback"}," Please provide a discord image path ",-1),w=(0,n._)("div",{class:"valid-feedback"}," Looks good! Saved the path. ",-1);function B(t,e,i,o,s,l){return(0,n.wg)(),(0,n.iD)("div",x,[E,(0,n._)("input",{type:"email",class:"form-control",id:"hoverImageInput",placeholder:"https://cdn.discordapp.com/attachments/xxx/xxx/YOUR_IMAGE.png",value:l.getImage()},null,8,q),k,w])}var $={name:"EditMouseOverButtonAtom",data(){return{validExtensions:["png","jpg","jpeg"]}},mounted(){this.$el.querySelector("input").addEventListener("focusout",this.handleFileSelect,!1)},methods:{handleFileSelect(t){const e=t.target.value;if(!e)return this.validation(!0),void this.saveImage("");const i=new URL(e).hostname;if("cdn.discordapp.com"!==i)return void this.validation(!1);const n=e.split("?")[0],o=n.split(".").pop().toLowerCase();this.validExtensions.includes(o)?(this.validation(!0),this.saveImage(n)):this.validation(!1)},validation(t){t?(this.$el.querySelector("input").classList.remove("is-invalid"),this.$el.querySelector("input").classList.add("is-valid")):(this.$el.querySelector("input").classList.remove("is-valid"),this.$el.querySelector("input").classList.add("is-invalid"))},saveImage(t){const e=window.location.pathname,i=new Date,n=new Date;n.setFullYear(i.getFullYear()+1);const o=n.toUTCString();document.cookie=`hoverImage=${t}; expires=${o}; path=${e}; sameSite=strict;`},getImage(){const t=`; ${document.cookie}`,e=t.split("; hoverImage="),i=e.pop().split(";").shift();return i}}};const C=(0,c.Z)($,[["render",B]]);var I=C;const _={class:"save-button"};function D(t,e,i,o,s,l){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("button",{class:"btn btn-success",onClick:e[0]||(e[0]=(...t)=>l.save&&l.save(...t))},"Save")])}var L={name:"SaveButtonAtom",methods:{save(){const t=document.querySelector("table"),e=t.querySelectorAll("tr"),i=[];for(let n=0;n<e.length;n++){const t=e[n],o=t.querySelectorAll("td"),s=[];for(let e=0;e<o.length;e++){const t=o[e];s.push(t.innerText.trim())}i.push(s)}i.shift(),this.saveCookie(i),alert("Successfully saved!")},saveCookie(t){const e=window.location.pathname,i=new Date,n=(new Date).setFullYear(i.getFullYear()+1),o=n.toUTCString();document.cookie=`bingo=${JSON.stringify(t)}; expires=${o}; path=${e}; sameSite=strict;`}}};const A=(0,c.Z)(L,[["render",D]]);var N=A,O=i(577);const G={class:"section-bingo"},T={class:"section-bingo--animation",id:"bingo-container"},Y=["src"],F={class:"bg-white show"},H=(0,n._)("tr",{class:"user-select-none text-center fs-3"},[(0,n._)("th",{"data-fixed":"true"},"B"),(0,n._)("th",{"data-fixed":"true"},"I"),(0,n._)("th",{"data-fixed":"true"},"N"),(0,n._)("th",{"data-fixed":"true"},"G"),(0,n._)("th",{"data-fixed":"true"},"O")],-1);function z(t,e,i,o,s,l){const r=(0,n.up)("BingoBoxAtom");return(0,n.wg)(),(0,n.iD)("section",G,[(0,n._)("div",T,[(0,n._)("img",{src:l.getBingoGif(),style:{visibility:"hidden"}},null,8,Y),(0,n._)("h1",null,(0,O.zw)(s.snippets.bingoTriggered),1),(0,n._)("table",F,[H,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.tableData,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t,class:"bingo-content"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t,(t=>((0,n.wg)(),(0,n.iD)("td",{key:t,onClick:e[0]||(e[0]=(...t)=>l.selectTarget&&l.selectTarget(...t)),onContextmenu:e[1]||(e[1]=t=>l.rightClickHandler(t))},[(0,n.Wm)(r,{selected:!1,text:t.text||t,multiSelectNumber:t.multiSelectNumber,multiSelectOptions:JSON.stringify(t?.multiSelectOptions)},null,8,["text","multiSelectNumber","multiSelectOptions"])],32)))),128))])))),128))])])])}var R=JSON.parse('{"Y":{"color0":"yellow","color1":"red","color2":"purple","color3":"blue","color4":"green"},"z":[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]]}');const U=["data-selected","data-multi-select-number","data-multi-select-options"],M=["contenteditable"],W={key:0,class:"bingo-box-multi pointer-events-none d-flex justify-content-space-between mt-3"},Z=["data-multi-select-number"];function P(t,e,i,o,s,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("input",{hidden:"","data-selected":i.selected,"data-multi-select-number":i.multiSelectNumber,"data-multi-select-options":i.multiSelectOptions,"data-times-pressed":"0","data-times-rounds":"0"},null,8,U),(0,n._)("p",{class:(0,O.C_)([[s.isEditing||"pointer-events-none"],"text-center user-select-none p-0 m-0 text-uppercase fw-bold py-2"]),contenteditable:s.isEditing},(0,O.zw)(i.text),11,M),i.multiSelectNumber>0?((0,n.wg)(),(0,n.iD)("div",W,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.multiSelectNumber,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:"bingo-box-multi--item pointer-events-none fw-bold text-black",style:(0,O.j5)({backgroundColor:i.multiSelectOptions[`color${t}`]})},[(0,n._)("input",{hidden:"","data-multi-select-number":t},null,8,Z)],4)))),128))])):(0,n.kq)("",!0)],64)}var j={name:"BingoBoxAtom",props:{selected:{type:Boolean,default:!1},text:{type:String,default:""},multiSelectNumber:{type:Number,default:0},multiSelectOptions:{type:String,default:""}},data(){return{isEditing:!1,editBingoClicked:!1}},mounted(){document.addEventListener("editBingo",(()=>{this.editBingoClicked=!0,this.editBingoClicked&&this.isEditing!==!this.isEditing&&(this.isEditing=!this.isEditing)})),this.$nextTick((()=>{const t=this.$el;this.changeFontSize(t)})),this.$el.nextElementSibling.nextElementSibling.addEventListener("input",(()=>{const t=this.$el;this.changeFontSize(t)})),this.$el.parentElement.addEventListener("mouseover",(()=>{this.isEditing?document.body.style.cursor="":document.body.style.cursor=`url(${this.getHoverImage()}) 4 12, auto`}))},methods:{changeFontSize(t){const e=t.nextElementSibling.nextElementSibling,i=e.innerHTML;if(i.length<7&&(e.style.fontSize="2rem"),i.length>40){const t=50/i.length;e.style.fontSize=`${t}rem`}i.split(" ").forEach((t=>{const i=t.length;if(i>11){const t=15/i;e.style.fontSize=`${t}rem`}}))},getHoverImage(){const t=`; ${document.cookie}`,e=t.split("; hoverImage="),i=e.pop().split(";").shift().replaceAll("\\","/");return i}}};const J=(0,c.Z)(j,[["render",P]]);var K=J,V={name:"BingoComponent",data(){return{tableData:this.getBingoCookie()||R.z,bingoTriggered:!1,snippets:{bingoTriggered:"BINGO!!"}}},mounted(){const t=document.getElementById("bingo-container"),e=t.querySelector("img"),i=t.querySelector("table");e.style.width=i.offsetWidth-50+"px",e.style.height=`${i.offsetHeight}px`},components:{BingoBoxAtom:K},methods:{getBingoCookie(){const t=`; ${document.cookie}`,e=t.split("; bingo="),i=e.pop().split(";").shift();try{return JSON.parse(i)}catch(n){return null}},rightClickHandler(t){t.preventDefault();const e=t.target,i=e.firstElementChild;if("true"===i.dataset.fixed)return;i.dataset.selected=!1,i.dataset.timesPressed=0,i.dataset.timesRounds=0,e.style.backgroundColor="";const n=i.dataset.multiSelectNumber>0;n&&e.querySelectorAll(".bingo-box-multi--item").forEach((t=>{t.style.backgroundColor=""}))},selectTarget(t){const e=t.target,i="P"===e.tagName;if(i&&e.isContentEditable||e.lastElementChild.isContentEditable)return;const n=e.querySelector("input");let o;const s="true"===n.dataset.fixed;if(s)return;let l,r=parseInt(n.dataset.timesPressed),a=parseInt(n.dataset.timesRounds),c="true"===n.dataset.selected,d=!1,u=!1;const m=parseInt(n.dataset.multiSelectNumber),g=m>0,h=R.Y;if(g&&r>0?l=h[`color${a}`]:(l=h["color0"],c=!c),g){c=!1,o=e.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${r+1}"]`),o||(o=e.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]'),l=h[`color${a+1}`],n.dataset.timesRounds=a+1,r=0);const t=e.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${r+2}"]`);t||(c=!0),o=o.parentElement}else o=e;o.style.backgroundColor=c||g?l:"",n.dataset.selected=c,n.dataset.timesPressed=u?0:r+1,d&&(o.style.backgroundColor=""),this.checkIfBingo((t=>{if(t){if(this.bingoTriggered)return;this.bingoTriggered=!0,this.animateBingo()}}))},checkIfBingo(t){const e=document.querySelector(".section-bingo table"),i=e.querySelectorAll(".bingo-content"),n=e.querySelectorAll("td");let o=!1;i.forEach((e=>{if(o)return;const i=e.querySelectorAll("td"),n=i.length;let s=0;i.forEach((t=>{const e=t.querySelector("input"),i="true"===e.dataset.selected;i&&s++})),o=s===n,t(o)})),n.forEach((i=>{if(o)return;const n=e.querySelectorAll(`td:nth-child(${i.cellIndex+1})`),s=n.length;let l=0;n.forEach((t=>{const e=t.querySelector("input"),i="true"===e.dataset.selected;i&&l++})),o=l===s,t(o)}));const s=()=>{const t=e.querySelector(".bingo-content:nth-child(2) td:first-child"),i=e.querySelector(".bingo-content:nth-child(3) td:nth-child(2)"),n=e.querySelector(".bingo-content:nth-child(4) td:nth-child(3)"),o=e.querySelector(".bingo-content:nth-child(5) td:nth-child(4)"),s=e.querySelector(".bingo-content:nth-child(6) td:nth-child(5)"),l="true"===t.querySelector("input").dataset.selected,r="true"===i.querySelector("input").dataset.selected,a="true"===n.querySelector("input").dataset.selected,c="true"===o.querySelector("input").dataset.selected,d="true"===s.querySelector("input").dataset.selected;return l&&r&&a&&c&&d},l=()=>{const t=e.querySelector(".bingo-content:nth-child(2) td:nth-child(5)"),i=e.querySelector(".bingo-content:nth-child(3) td:nth-child(4)"),n=e.querySelector(".bingo-content:nth-child(4) td:nth-child(3)"),o=e.querySelector(".bingo-content:nth-child(5) td:nth-child(2)"),s=e.querySelector(".bingo-content:nth-child(6) td:nth-child(1)"),l="true"===t.querySelector("input").dataset.selected,r="true"===i.querySelector("input").dataset.selected,a="true"===n.querySelector("input").dataset.selected,c="true"===o.querySelector("input").dataset.selected,d="true"===s.querySelector("input").dataset.selected;return l&&r&&a&&c&&d};t(s()),t(l())},animateBingo(){const t=document.querySelector(".section-bingo--animation");t.classList.add("section-bingo--animation--active"),t.querySelector("h1").style.opacity=1;const e=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"];let i=0;const n=setInterval((()=>{t.querySelector("h1").style.color=e[i],i++,i===e.length&&(i=0)}),100);setTimeout((()=>{t.querySelector("h1").style.opacity=0,t.classList.remove("section-bingo--animation--active"),clearInterval(n)}),5e3)},getBingoGif(){const t=`; ${document.cookie}`,e=t.split("; bingoGif="),i=e.pop().split(";").shift().replaceAll("\\","/");return i}}};const Q=(0,c.Z)(V,[["render",z]]);var X=Q,tt={name:"HomepageView",components:{BingoComponent:X,SaveButtonAtom:N,EditButtonAtom:u,EditMouseOverButtonAtom:I,EditBingoGifButtonAtom:y}};const et=(0,c.Z)(tt,[["render",s]]);var it=et}}]);
//# sourceMappingURL=Homepage.ea67c861.js.map