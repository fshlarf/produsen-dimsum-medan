(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3,13],{261:function(t,e,l){var content=l(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(108).default)("7431f7ae",content,!0,{sourceMap:!1})},262:function(t,e,l){"use strict";l.r(e);var n={props:{btnText:{type:String,default:""},mode:{type:String,default:""},addClass:{type:String,default:""}}},o=(l(263),l(42)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-center mt-6 gap-1 cursor-pointer",on:{click:function(e){return t.$emit("click-show")}}},[e("div",{staticClass:"text-p text-[#0194F3] text-sm"},[t._v(t._s(t.btnText))]),t._v(" "),e("svg",{class:"".concat("bottom"===t.mode?"reverse":""),attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"direction=direction5"}},[e("path",{attrs:{id:"vector",d:"M2.81182 5.11395C2.55266 5.37545 2.55274 5.79697 2.81199 6.05838L7.30039 10.5841C7.69157 10.9786 8.32926 10.9786 8.72045 10.5841L13.2088 6.05838C13.4681 5.79697 13.4682 5.37545 13.209 5.11395C12.9467 4.84922 12.5188 4.84916 12.2564 5.11381L8.7205 8.67958C8.3293 9.07409 7.69153 9.07409 7.30034 8.67958L3.76448 5.11381C3.50205 4.84916 3.07418 4.84922 2.81182 5.11395Z",fill:"#0194F3"}})])])])}),[],!1,null,"66108ecc",null);e.default=component.exports},263:function(t,e,l){"use strict";l(261)},264:function(t,e,l){var n=l(107)((function(i){return i[1]}));n.push([t.i,".reverse[data-v-66108ecc]{transform:rotate(180deg)}",""]),n.locals={},t.exports=n},265:function(t,e,l){var content=l(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(108).default)("b23c3ed2",content,!0,{sourceMap:!1})},266:function(t,e,l){var content=l(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(108).default)("32611b55",content,!0,{sourceMap:!1})},270:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcng9IjE1IiBmaWxsPSJibGFjayIgZmlsbC1vcGFjaXR5PSIwLjM1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNTA0NiAxMC4zMjc2QzExLjE3OTIgMTAuMDAyMSAxMC42NTE1IDEwLjAwMjEgMTAuMzI2MSAxMC4zMjc2QzEwLjAwMDcgMTAuNjUzIDEwLjAwMDcgMTEuMTgwNiAxMC4zMjYxIDExLjUwNjFMMTQuMzIwMiAxNS41MDAyTDEwLjMyNjEgMTkuNDk0MkMxMC4wMDA3IDE5LjgxOTcgMTAuMDAwNyAyMC4zNDczIDEwLjMyNjEgMjAuNjcyOEMxMC42NTE1IDIwLjk5ODIgMTEuMTc5MiAyMC45OTgyIDExLjUwNDYgMjAuNjcyOEwxNS40OTg3IDE2LjY3ODdMMTkuNDkyOCAyMC42NzI4QzE5LjgxODIgMjAuOTk4MiAyMC4zNDU4IDIwLjk5ODIgMjAuNjcxMyAyMC42NzI4QzIwLjk5NjcgMjAuMzQ3MyAyMC45OTY3IDE5LjgxOTcgMjAuNjcxMyAxOS40OTQyTDE2LjY3NzIgMTUuNTAwMkwyMC42NzEzIDExLjUwNjFDMjAuOTk2NyAxMS4xODA2IDIwLjk5NjcgMTAuNjUzIDIwLjY3MTMgMTAuMzI3NkMyMC4zNDU4IDEwLjAwMjEgMTkuODE4MiAxMC4wMDIxIDE5LjQ5MjggMTAuMzI3NkwxNS40OTg3IDE0LjMyMTdMMTEuNTA0NiAxMC4zMjc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},271:function(t,e,l){"use strict";l(265)},272:function(t,e,l){var n=l(107)((function(i){return i[1]}));n.push([t.i,".modal-popup{left:50%;position:fixed;top:50%;transform:translate(-50%,-50%)}",""]),n.locals={},t.exports=n},274:function(t,e,l){"use strict";l.r(e);var n={name:"Modal",props:{isShow:{type:Boolean,default:!1},size:{type:String,default:null},isLoading:{type:Boolean,default:!1}},methods:{onClose:function(){this.isLoading||this.$emit("onClose")}}},o=(l(271),l(42)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t.isShow?e("div",{staticClass:"z-30 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"},[e("div",{staticClass:"z-40 relative p-3 mx-auto my-0 w-full"},[e("div",{staticClass:"modal-popup bg-white rounded-lg shadow-lg border flex flex-col w-auto"},[e("button",{staticClass:"absolute -right-3 -top-3",on:{click:t.onClose}},[e("img",{attrs:{src:l(270),alt:"cancel"}})]),t._v(" "),e("div",{staticClass:"md:p-8 p-5"},[t._t("body")],2)])]),t._v(" "),e("div",{staticClass:"z-30 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50",on:{click:t.onClose}})]):t._e()])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,l){"use strict";l(266)},288:function(t,e,l){var n=l(107)((function(i){return i[1]}));n.push([t.i,".box-modal[data-v-3a63ea55]{background:rgba(246,178,5,.1);border:1px solid rgba(246,178,5,.12);border-radius:12px}",""]),n.locals={},t.exports=n},289:function(t,e,l){var content=l(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(108).default)("2ab7773f",content,!0,{sourceMap:!1})},293:function(t,e,l){"use strict";l.r(e);var n={components:{Modal:l(274).default},props:{isShow:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},methods:{onClose:function(){this.$emit("onClose")}}},o=(l(287),l(42)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("Modal",{attrs:{"is-show":t.isShow},on:{onClose:t.onClose},scopedSlots:t._u([{key:"body",fn:function(){return[e("div",{staticClass:"text-center md:w-[535px] w-[300px]"},[e("h1",{staticClass:"md:text-[20px] text-base font-bold"},[t._v("Informasi Kemitraan")]),t._v(" "),e("div",{staticClass:"box-modal mt-6 py-1"},[e("p",{staticClass:"text-p md:text-sm text-xs font-medium text-[#555] leading-[26px]"},[t._v("RESELLER minimal belanja 10 MIKA")]),t._v(" "),e("p",{staticClass:"text-p md:text-sm text-xs font-medium text-[#555] leading-[26px]"},[t._v("AGENT minimal balanja 100 MIKA")])]),t._v(" "),e("div",{staticClass:"rounded-xl bg-[#871A1B] mt-5 p-4"},[e("p",{staticClass:"text-p md:text-sm text-xs font-semibold text-white"},[t._v("\n                    FREE/GRATIS 1 KG saus untuk 25 MIKA, Berlaku kelipatannya. (50 MIKA FREE 2 KG saus) dan seterusnya.\n                ")])]),t._v(" "),e("div",{staticClass:"text-p md:text-sm text-xs font-semibold text-[#555] mt-5"},[e("p",[t._v("\n                    Pengiriman luar kota minimal belanja 1 Styrofoam, Ongkir dan Styrofoam ditanggung Pembeli.\n                ")]),t._v(" "),e("p",{staticClass:"mt-6"},[t._v("Pengiriman dalam kota free delivery untuk AGENT.")])])])]},proxy:!0}])})}),[],!1,null,"3a63ea55",null);e.default=component.exports},314:function(t,e,l){t.exports=l.p+"img/info.e316e22.svg"},315:function(t,e,l){"use strict";l(289)},316:function(t,e,l){var n=l(107)((function(i){return i[1]}));n.push([t.i,".box-price[data-v-2738f320]{background:#fff;border-radius:10px;box-shadow:0 2px 3px 0 rgba(246,178,5,.15)}h2[data-v-2738f320]{color:rgba(85,85,85,.8);font-size:12px}h2[data-v-2738f320],h3[data-v-2738f320]{font-family:Poppins;font-style:normal}h3[data-v-2738f320]{color:#2d2d2d;font-weight:600}",""]),n.locals={},t.exports=n},342:function(t,e,l){"use strict";l.r(e);l(59);var n=l(293),o=l(262),c={components:{ModalInfo:n.default,ButtonShow:o.default},data:function(){return{isShowModalInfo:!1,isShow:!1,displayPriceDesktop:[],displayPriceMobile:[],dataPrice:[{id:1,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:2,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:3,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:4,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:5,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:6,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:7,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:8,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:9,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"},{id:10,images:"dimsum",variant:"Ayam",pcs:"20",reseller:"Rp.55.000",agent:"Rp.50.000"}]}},mounted:function(){this.displayPriceDesktop=this.dataPrice.slice(0,9),this.displayPriceMobile=this.dataPrice.slice(0,4)},methods:{toggleShow:function(){this.isShow?this.showLess():this.showAll()},onCloseInfo:function(){this.isShowModalInfo=!1},onClickInfo:function(){this.isShowModalInfo=!0},showAll:function(){this.displayPriceDesktop=this.dataPrice,this.displayPriceMobile=this.dataPrice},showLess:function(){this.displayPriceDesktop=this.dataPrice.slice(0,9),this.displayPriceMobile=this.dataPrice.slice(0,4)}}},d=(l(315),l(42)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-[1120px] mt-[52px] 2xl:mx-auto lg:mx-[161px] md:mx-10 mx-5"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"flex mt-5 justify-between"},[e("div",{staticClass:"flex gap-2 items-center"},[e("h1",{staticClass:"text-base font-bold text-[#2D2D2D] leading-7 md:block hidden"},[t._v("\n        Daftar Variant & Harga Dimsum\n      ")]),t._v(" "),e("h1",{staticClass:"text-sm font-bold text-[#2D2D2D] leading-7 md:hidden"},[t._v("\n        Daftar Variant & Harga\n      ")]),t._v(" "),e("img",{staticClass:"cursor-pointer",attrs:{src:l(314),alt:"icon-info"},on:{click:t.onClickInfo}})]),t._v(" "),e("div",{staticClass:"flex items-center gap-1"},[e("div",{staticClass:"text-p md:text-base text-sm text-[#2D2D2D]"},[t._v("Per Box")]),t._v(" "),e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{id:"direction=direction5"}},[e("path",{attrs:{id:"vector",d:"M2.81182 5.1137C2.55266 5.3752 2.55274 5.79672 2.81199 6.05813L7.30039 10.5839C7.69157 10.9783 8.32926 10.9783 8.72045 10.5839L13.2088 6.05813C13.4681 5.79672 13.4682 5.3752 13.209 5.1137C12.9467 4.84897 12.5188 4.84891 12.2564 5.11357L8.7205 8.67934C8.3293 9.07384 7.69153 9.07384 7.30034 8.67934L3.76448 5.11357C3.50205 4.84891 3.07418 4.84897 2.81182 5.1137Z",fill:"#2D2D2D"}})])])])]),t._v(" "),e("div",{staticClass:"lg:block hidden"},[e("div",{staticClass:"grid grid-cols-3 mt-2 gap-5 justify-center"},t._l(t.displayPriceDesktop,(function(l,n){return e("div",{key:n},[e("div",{staticClass:"box-price md:h-[138px] h-[116px] md:w-[330px] w-[320px] flex md:gap-4 gap-3 justify-center items-center"},[e("div",[e("img",{staticClass:"w-[90px] lg:w-[104px]",attrs:{src:"images/price/".concat(l.images,".png"),alt:"dimsum-".concat(l.variant)}})]),t._v(" "),e("div",{staticClass:"flex flex-col lg:gap-5 gap-3"},[e("div",{staticClass:"flex lg:gap-6 md:gap-1 gap-3"},[e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Variant Dimsum")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.variant))])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Isi per box")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.pcs)+" pcs")])])]),t._v(" "),e("div",{staticClass:"flex lg:gap-6 md:gap-1 gap-3"},[e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Harga Reseller")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.reseller))])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Harga Agent")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.agent))])])])])])])})),0)]),t._v(" "),e("div",{staticClass:"lg:hidden"},[e("div",{staticClass:"grid md:grid-cols-2 mt-2 gap-3 justify-center"},t._l(t.displayPriceMobile,(function(l,n){return e("div",{key:n},[e("div",{staticClass:"box-price md:h-[138px] h-[116px] md:w-[330px] w-[320px] flex md:gap-4 gap-3 justify-center items-center"},[e("div",[e("img",{staticClass:"w-[90px] lg:w-[104px]",attrs:{src:"images/price/".concat(l.images,".png"),alt:"dimsum-".concat(l.variant)}})]),t._v(" "),e("div",{staticClass:"flex flex-col lg:gap-5 gap-3"},[e("div",{staticClass:"flex lg:gap-6 md:gap-1 gap-3"},[e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Variant Dimsum")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.variant))])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Isi per box")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.pcs)+" pcs")])])]),t._v(" "),e("div",{staticClass:"flex lg:gap-6 md:gap-1 gap-3"},[e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Harga Reseller")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.reseller))])]),t._v(" "),e("div",{staticClass:"space-y-1"},[e("h2",[t._v("Harga Agent")]),t._v(" "),e("h3",{staticClass:"md:text-sm text-xs"},[t._v(t._s(l.agent))])])])])])])})),0)]),t._v(" "),e("ButtonShow",{attrs:{btnText:"".concat(t.isShow?"Tampilkan Lebih Sedikit":"Tampilkan Semua"),mode:"".concat(t.isShow?"bottom":"top")},on:{"click-show":function(e){t.toggleShow(),t.isShow=!t.isShow}}}),t._v(" "),e("ModalInfo",{attrs:{"is-show":t.isShowModalInfo},on:{onClose:t.onCloseInfo}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-[30px] font-bold md:block hidden"},[e("span",{staticClass:"text-[#F6B205]"},[t._v("Daftar Variant &")]),t._v(" Harga Dimsum\n    ")]),t._v(" "),e("h1",{staticClass:"text-[20px] font-bold md:hidden"},[e("span",{staticClass:"text-[#F6B205]"},[t._v("Daftar Variant")]),t._v(" "),e("span",{staticClass:"text-[#B71A1B]"},[t._v("&")]),t._v(" Harga Dimsum\n    ")]),t._v(" "),e("div",{staticClass:"text-p md:text-sm text-xs text-[#555] md:mt-0 mt-3 leading-5"},[t._v("\n      Berikut ini beragam variant dimsum beserta harga yang tersedia di\n      Produsen Dimsum Medan.\n    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex mt-5 justify-center md:py-2"},[e("div",{staticClass:"bg-[#F6B205] md:rounded-[20px] rounded-full md:p-3 flex gap-1 items-center"},[e("img",{staticClass:"pl-2 w-auto",attrs:{src:"images/price/icon-sumpit.svg",alt:"icon-sumpit"}}),t._v(" "),e("p",{staticClass:"text-p text-white md:text-sm text-xs font-bold md:pr-3 pr-4"},[t._v("\n        Aneka Dimsum\n      ")])]),t._v(" "),e("div",{staticClass:"bg-[#F6B205] bg-opacity-20 md:rounded-[20px] rounded-full md:-ml-6 -ml-9 p-3 md:pl-10 pl-11 md:pr-9 pr-4 flex gap-1 items-center"},[e("img",{attrs:{src:"images/price/icon-food.svg",alt:"icon-food"}}),t._v(" "),e("p",{staticClass:"text-p text-[#F6B205] md:text-sm text-xs font-medium"},[t._v("\n        Menu Lainnya\n      ")])])])}],!1,null,"2738f320",null);e.default=component.exports}}]);