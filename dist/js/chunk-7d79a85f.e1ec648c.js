(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d79a85f"],{2656:function(t,a,s){},6605:function(t,a,s){"use strict";s("66c4")},"66c4":function(t,a,s){},"7ea6":function(t,a,s){t.exports=s.p+"img/liney.57df864e.png"},"8cd2":function(t,a,s){"use strict";s("2656")},a471:function(t,a,s){"use strict";s.r(a);var e,n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"wrap"},[a("div",{staticClass:"white_bg"},[a("div",{staticStyle:{padding:"14px 24px 14px 24px"}},[a("p",[t._v("Chain type")]),a("van-tabs",{attrs:{type:"card"},on:{click:t.qrchange},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[a("van-tab",{attrs:{title:"btc"}},[a("div",{attrs:{id:"btcr"}}),a("van-cell",{staticClass:"bankInfo"},[[a("span",{staticClass:"bank_title"},[t._v(t._s(t.btc))]),a("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.btc,expression:"btc",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:s("78a3"),alt:""}})]],2)],1),a("van-tab",{attrs:{title:"hbtc"}},[a("div",{ref:"qrhbtc",attrs:{id:"hbtcr"}}),a("van-cell",{staticClass:"bankInfo"},[[a("span",{staticClass:"bank_title"},[t._v(t._s(t.hbtc))]),a("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.hbtc,expression:"hbtc",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy",attrs:{src:s("78a3"),alt:""}})]],2)],1)],1),a("div",{staticClass:"qr"},[a("img",{staticClass:"qr_img",attrs:{src:t.orderInfo.pay_code,alt:""}})]),a("p",{staticClass:"amount"},[a("span",{staticClass:"amount_tips"},[t._v("支付时请输入此金额")]),a("span",{staticClass:"amount_amount"},[a("strong",[a("label",[t._v("￥"+t._s(t.orderInfo.amount))])])])])],1),a("img",{staticStyle:{height:"20px",width:"100%"},attrs:{src:s("7ea6"),alt:""}}),a("div",{staticStyle:{padding:"14px 24px 24px 24px"}},[t._m(0),t._m(1),a("p",{staticClass:"orderInfo"},[t._v(" 订单编号： "),a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.orderInfo.order_no))])]),a("p",{staticClass:"orderInfo"},[t._v(" 有效期： "),a("span",[a("van-count-down",{staticStyle:{display:"inline-block",color:"#F56C6C"},attrs:{time:t.sec,format:" mm 分 ss 秒"},on:{finish:t.finish}})],1)])])])])},c=[function(){var t=this,a=t._self._c;return a("p",{staticClass:"title"},[a("strong",[t._v("订单状态")])])},function(){var t=this,a=t._self._c;return a("p",{staticClass:"orderInfo"},[t._v(" 订单类型： "),a("span",[t._v("BTC")])])}],r=s("ade3"),i=(s("c194"),s("7744")),o=(s("e7e5"),s("d399")),p=(s("bda7"),s("5e46")),l=(s("da3c"),s("0b33")),d=(s("c3a6"),s("ad06")),u=(s("0653"),s("34e9")),b=(s("414a"),s("7a82")),h=(s("14d9"),s("b680"),s("d044")),f=s.n(h),v={components:(e={},Object(r["a"])(e,b["a"].name,b["a"]),Object(r["a"])(e,u["a"].name,u["a"]),Object(r["a"])(e,d["a"].name,d["a"]),Object(r["a"])(e,l["a"].name,l["a"]),Object(r["a"])(e,p["a"].name,p["a"]),Object(r["a"])(e,o["a"].name,o["a"]),Object(r["a"])(e,i["a"].name,i["a"]),e),data:function(){return{orderInfo:{amount:"0"},sec:0,btc:"",hbtc:"",active:0}},methods:{getData:function(){var t=this,a=this;a.$axios.post("index.php?s=OTCUser.pcode&time="+this.$route.query.time).then((function(a){if("end"==a.data.data)t.$router.push({path:"end"});else{t.orderInfo=a.data.data,t.orderInfo.amount=(t.orderInfo.amount/100).toFixed(2),t.sec=1e3*t.orderInfo.time;var s=t.orderInfo.pay_code.split(",");t.btc=s[0],t.hbtc=s[1],t.qrbtc()}})).catch((function(t){console.log(t)}))},qrbtc:function(){new f.a("btcr",{width:195,height:195,text:this.btc})},qrhbtc:function(){new f.a("hbtcr",{width:195,height:195,text:this.hbtc})},qrchange:function(){1==this.active?this.$nextTick((function(){this.qrhbtc()})):this.$refs.qrhbtc.innerHTML=""},onCopy:function(){o["a"].success("复制成功")},onError:function(){o["a"].fail("复制失败")},finish:function(){this.$router.push({path:"end"})}},mounted:function(){this.getData(),this.sec=3e5}},m=v,_=(s("8cd2"),s("6605"),s("2877")),C=Object(_["a"])(m,n,c,!1,null,"d3f2fabc",null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-7d79a85f.e1ec648c.js.map