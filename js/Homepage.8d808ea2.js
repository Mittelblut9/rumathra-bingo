"use strict";(self["webpackChunkrumathra_bingo"]=self["webpackChunkrumathra_bingo"]||[]).push([[37],{679:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var i=n(252);function l(e,t,n,l,o,r){const c=(0,i.up)("BingoComponent");return(0,i.wg)(),(0,i.j4)(c)}var o=n.p+"img/winning.a3830787.gif";const r={class:"section-bingo"},c={class:"section-bingo--animation",id:"bingo-container"},s=(0,i._)("img",{src:o,alt:"bingo",style:{visibility:"hidden"}},null,-1),a=(0,i._)("h1",null,"BINGO!!",-1),u=(0,i._)("tr",{class:"user-select-none"},[(0,i._)("th",{"data-fixed":"true"},"B"),(0,i._)("th",{"data-fixed":"true"},"I"),(0,i._)("th",{"data-fixed":"true"},"N"),(0,i._)("th",{"data-fixed":"true"},"G"),(0,i._)("th",{"data-fixed":"true"},"O")],-1);function d(e,t,n,l,o,d){const m=(0,i.up)("BingoBoxAtom");return(0,i.wg)(),(0,i.iD)("section",r,[(0,i._)("div",c,[s,a,(0,i._)("table",null,[u,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.tableData,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e,id:"bingo-content"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,(e=>((0,i.wg)(),(0,i.iD)("td",{key:e,onClick:t[0]||(t[0]=(...e)=>d.selectTarget&&d.selectTarget(...e)),onContextmenu:t[1]||(t[1]=e=>d.rightClickHandler(e))},[(0,i.Wm)(m,{selected:!1,text:e.text,multiSelectNumber:e.multiSelectNumber,multiSelectOptions:JSON.stringify(e?.multiSelectOptions)},null,8,["text","multiSelectNumber","multiSelectOptions"])],32)))),128))])))),128))])])])}var m=JSON.parse('{"Y":{"color0":"yellow","color1":"red","color2":"purple","color3":"blue","color4":"green"},"z":[[{"text":"Test"},{"text":"Schwarz/ Weiß Blende"},{"text":"Klimbim Kladderadatsch"},{"text":"Tuten und Blasen / Damokles"},{"text":"Von dem Stress ind er Küche kriegen die Testesser nichts mit"}],[{"text":"Sose x5","multiSelectNumber":5},{"text":"Die Inhaber sind verschuldet"},{"text":"Flo oder Willi kommt"},{"text":"Restaurant hat noch offen"},{"text":"Frank macht einen schlechten Witz"}],[{"text":"Es weint jemand"},{"text":"Nach dem 1. Testessen wird geglaubt man habe sehr gut abgeschnitten"},{"text":"5er Sub Bombe kommt rein"},{"text":"Frank braucht mal 5 Minuten"},{"text":"Mega x3","multiSelectNumber":3}],[{"text":"Es werden Tütenprodukte verwendet"},{"text":"Rosin zwinkert"},{"text":"Rosin geht mit Finger in die Soße"},{"text":"Rosin wird touchy"},{"text":"Bei Rosin kickts"}],[{"text":"Rosin geht im eigenen Restaurant kochen"},{"text":"Seine Sterne werden erwähnt"},{"text":"Ein Testesser sagt das Fleisch sei trocken"},{"text":"Die Rezepte kann man auf Kabeleins.de nachlesen"},{"text":"Die Wände werden grau gestrichen"}]]}'),h=n(577);const g=["data-fixed","data-selected","data-color","data-multi-select-number","data-multi-select-options"],b={key:0,class:"bingo-box-multi pointer-events-none display-flex justify-content-space-between"},S=["data-multi-select-number"];function p(e,t,n,l,o,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("input",{hidden:"","data-fixed":n.fixed,"data-selected":n.selected,"data-color":n.color,"data-multi-select-number":n.multiSelectNumber,"data-multi-select-options":n.multiSelectOptions,"data-times-pressed":"0","data-times-rounds":"0"},null,8,g),(0,i._)("p",{class:(0,h.C_)([[n.fixed?"bold big":""],"center user-select-none pointer-events-none"]),editable:"true"},(0,h.zw)(n.text),3),n.multiSelectNumber>0?((0,i.wg)(),(0,i.iD)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.multiSelectNumber,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e,class:"bingo-box-multi--item pointer-events-none",style:(0,h.j5)({backgroundColor:n.multiSelectOptions[`color${e}`]})},[(0,i._)("input",{hidden:"","data-multi-select-number":e},null,8,S)],4)))),128))])):(0,i.kq)("",!0)],64)}var y={name:"BingoBoxAtom",props:{fixed:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},text:{type:String,default:""},color:{type:String,default:""},multiSelectNumber:{type:Number,default:0},multiSelectOptions:{type:String,default:""}},data(){return{}},mounted(){this.$nextTick((()=>{const e=this.$el;this.changeFontSize(e)}))},methods:{changeFontSize(e){const t=e.nextElementSibling.nextElementSibling,n=t.innerText;if(n.length<7&&(t.style.fontSize="2rem"),n.length>30){const e=46/n.length;t.style.fontSize=`${e}rem`}n.split(" ").forEach((e=>{const n=e.length;if(n>11){const e=11/n;t.style.fontSize=`${e}rem`}}))}}},x=n(744);const f=(0,x.Z)(y,[["render",p]]);var q=f,k={name:"BingoComponent",data(){return{tableData:m.z,bingoTriggered:!1}},components:{BingoBoxAtom:q},methods:{rightClickHandler(e){e.preventDefault();const t=e.target,n=t.firstElementChild;if("true"===n.dataset.fixed)return;n.dataset.selected=!1,n.dataset.timesPressed=0,n.dataset.timesRounds=0,t.style.backgroundColor="";const i=n.dataset.multiSelectNumber>0;i&&t.querySelectorAll(".bingo-box-multi--item").forEach((e=>{e.style.backgroundColor=""}))},selectTarget(e){const t=e.target,n=t.querySelector("input");let i;const l="true"===n.dataset.fixed;if(l)return;let o,r=parseInt(n.dataset.timesPressed),c=parseInt(n.dataset.timesRounds),s="true"===n.dataset.selected,a=!1,u=!1;const d=parseInt(n.dataset.multiSelectNumber),h=d>0,g=m.Y;if(h&&r>0?o=g[`color${c}`]:(o=g["color0"],s=!s),h){s=!1,i=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${r+1}"]`),i||(i=t.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]'),o=g[`color${c+1}`],n.dataset.timesRounds=c+1,r=0);const e=t.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${r+2}"]`);e||(s=!0),i=i.parentElement}else i=t;i.style.backgroundColor=s||h?o:"",n.dataset.selected=s,n.dataset.timesPressed=u?0:r+1,a&&(i.style.backgroundColor=""),this.checkIfBingo((e=>{if(e){if(this.bingoTriggered)return;this.bingoTriggered=!0,this.animateBingo()}}))},checkIfBingo(e){const t=document.querySelector(".section-bingo table"),n=t.querySelectorAll("#bingo-content"),i=t.querySelectorAll("td");let l=!1;n.forEach((t=>{if(l)return;const n=t.querySelectorAll("td"),i=n.length;let o=0;n.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&o++})),l=o===i,e(l)})),i.forEach((n=>{if(l)return;const i=t.querySelectorAll(`td:nth-child(${n.cellIndex+1})`),o=i.length;let r=0;i.forEach((e=>{const t=e.querySelector("input"),n="true"===t.dataset.selected;n&&r++})),l=r===o,e(l)}));const o=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:first-child"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(2)"),i=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),l=t.querySelector("#bingo-content:nth-child(5) td:nth-child(4)"),o=t.querySelector("#bingo-content:nth-child(6) td:nth-child(5)"),r="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,s="true"===i.querySelector("input").dataset.selected,a="true"===l.querySelector("input").dataset.selected,u="true"===o.querySelector("input").dataset.selected;return r&&c&&s&&a&&u},r=()=>{const e=t.querySelector("#bingo-content:nth-child(2) td:nth-child(5)"),n=t.querySelector("#bingo-content:nth-child(3) td:nth-child(4)"),i=t.querySelector("#bingo-content:nth-child(4) td:nth-child(3)"),l=t.querySelector("#bingo-content:nth-child(5) td:nth-child(2)"),o=t.querySelector("#bingo-content:nth-child(6) td:nth-child(1)"),r="true"===e.querySelector("input").dataset.selected,c="true"===n.querySelector("input").dataset.selected,s="true"===i.querySelector("input").dataset.selected,a="true"===l.querySelector("input").dataset.selected,u="true"===o.querySelector("input").dataset.selected;return r&&c&&s&&a&&u};e(o()),e(r())},animateBingo(){const e=document.querySelector(".section-bingo--animation");e.classList.add("section-bingo--animation--active"),e.querySelector("h1").style.opacity=1,setTimeout((()=>{e.querySelector("h1").style.opacity=0,e.classList.remove("section-bingo--animation--active")}),5e3)}}};const w=(0,x.Z)(k,[["render",d]]);var B=w,v={name:"HomepageView",components:{BingoComponent:B}};const N=(0,x.Z)(v,[["render",l]]);var C=N}}]);
//# sourceMappingURL=Homepage.8d808ea2.js.map