import{d as c,g as l,n as m}from"./index-04a97e2f.js";const n=[{pixels:1e4,factor:.01,length:10,label:"m"},{pixels:5e3,factor:.02,length:20,label:"m"},{pixels:2e3,factor:.05,length:50,label:"m"},{pixels:1e3,factor:.1,length:100,label:"m"},{pixels:500,factor:.2,length:200,label:"m"},{pixels:250,factor:.5,length:500,label:"m"},{pixels:100,factor:1,length:1,label:"km"},{pixels:50,factor:2,length:2,label:"km"},{pixels:20,factor:5,length:5,label:"km"},{pixels:8,factor:10,length:10,label:"km"},{pixels:4,factor:20,length:20,label:"km"},{pixels:2,factor:50,length:50,label:"km"},{pixels:1,factor:100,length:100,label:"km"}],r=[{pixels:2e4,factor:.003787878,length:20,label:"ft"},{pixels:1e4,factor:.00946969696,length:50,label:"ft"},{pixels:5e3,factor:.0189393939,length:100,label:"ft"},{pixels:2500,factor:.04734848,length:250,label:"ft"},{pixels:1e3,factor:.09469696,length:500,label:"ft"},{pixels:500,factor:.18939393,length:1e3,label:"ft"},{pixels:300,factor:.25,length:.25,label:"mi"},{pixels:180,factor:.5,length:.5,label:"mi"},{pixels:80,factor:1,length:1,label:"mi"},{pixels:40,factor:2,length:2,label:"mi"},{pixels:20,factor:5,length:5,label:"mi"},{pixels:8,factor:10,length:10,label:"mi"},{pixels:4,factor:25,length:25,label:"mi"},{pixels:1.5,factor:50,length:50,label:"mi"}],h=c({name:"MapScale",data:()=>({globalState:l.state,showScale:!1,metric:{pixels:100,length:1e3,label:"m"},miles:{pixels:100,length:1e3,label:"mi"}}),mounted(){this.zoomChanged()},watch:{"globalState.viewState.zoom"(){this.zoomChanged()},"globalState.viewState.pitch"(){this.zoomChanged()},"globalState.viewState.latitude"(){this.zoomChanged()}},methods:{zoomChanged(){if(this.globalState.viewState.pitch>15||this.globalState.viewState.zoom<5){this.showScale=!1;return}this.showScale=!0;const o=156543.03,t=Math.PI/180*this.globalState.viewState.latitude,e=this.globalState.viewState.zoom,s=o*Math.cos(t)/2**e,a=window.devicePixelRatio*1e3/s;this.calculateBestMeasurements(a)},calculateBestMeasurements(o){let t={pixels:o/200,length:5,label:"m"};for(let a=0;a<n.length;a++){const i=n[a];if(o>i.pixels)break;t={pixels:o*i.factor,length:i.length,label:i.label}}const e=o*1.609344;let s={pixels:10*e/5280,length:10,label:"ft"};for(let a=0;a<r.length;a++){const i=r[a];if(e>i.pixels)break;s={pixels:e*i.factor,length:i.length,label:i.label}}this.metric=t,this.miles=s}}});var g=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{directives:[{name:"show",rawName:"v-show",value:t.showScale,expression:"showScale"}],staticClass:"map-scale"},[e("div",{staticClass:"feet",style:{width:`${t.miles.pixels}px`}},[e("p",[t._v(t._s(t.miles.length)+" "+t._s(t.miles.label))])]),e("div",{staticClass:"meters",style:{width:`${t.metric.pixels}px`}},[e("p",[t._v(t._s(t.metric.length)+" "+t._s(t.metric.label))])])])},b=[];var p=m(h,g,b,!1,null,"b7eed013",null,null);const u=p.exports,_={messages:{en:{in:"Zoom in",out:"Zoom out",center:"North"},de:{in:"Einzoomen",out:"Auszoomen",center:"Norden"}}},d=c({name:"ZoomButtons",i18n:_,components:{MapScale:u},props:{corner:String},data:()=>({globalState:l.state,zoomInFactor:.5,zoomOutFactor:.5,maxZoomIn:20,maxZoomOut:0,arrowRotation:0,location:0,smooth:[.0125,.025,.05,.1,.15,.2,.3,.4,.6,.7,.8,.85,.9,.95,.975,.9875,1]}),mounted(){this.corner&&this.corner.startsWith("top")&&(this.location=0),this.corner&&this.corner.startsWith("bottom")&&(this.location=1)},watch:{"globalState.viewState.bearing"(){this.updateNorthArrow()}},computed:{cornerSettings(){let o={display:"flex",right:"7px"};return this.location==0&&(o=Object.assign(o,{flexDirection:"row",top:"5px"})),this.location==1&&(o=Object.assign(o,{flexDirection:"column-reverse",bottom:"32px"})),o}},methods:{setNorth(){const o=l.state.viewState;for(let t=0;t<this.smooth.length;t++)setTimeout(()=>{const e=Object.assign({},o,{bearing:o.bearing-this.smooth[t]*o.bearing,pitch:o.pitch-this.smooth[t]*o.pitch});l.commit("setMapCamera",e)},24*t)},zoomIn(){let o=l.state.viewState.zoom;if(o+this.zoomInFactor<=this.maxZoomIn)for(let t=0;t<this.smooth.length;t++)setTimeout(()=>{const e={zoom:o+this.smooth[t]*this.zoomInFactor},s=l.state.viewState,a=Object.assign({},s,e);l.commit("setMapCamera",a)},16.67*t)},zoomOut(){var o=l.state.viewState.zoom;if(o-this.zoomOutFactor>=this.maxZoomOut)for(let t=0;t<this.smooth.length;t++)setTimeout(()=>{const e={zoom:o-this.smooth[t]*this.zoomInFactor},s=l.state.viewState,a=Object.assign({},s,e);l.commit("setMapCamera",a)},16.67*t)},updateNorthArrow(){this.arrowRotation=-1*this.globalState.viewState.bearing}}}),f="/sandbox/assets/sw_plus_dm-addc2ce2.jpg",x="/sandbox/assets/sw_plus-c32d0b8a.jpg",v="/sandbox/assets/sw_minus_dm-92f86065.jpg",w="/sandbox/assets/sw_minus-5b756579.jpg",S="/sandbox/assets/sw_north_arrow_dm-aa6d011c.png",z="/sandbox/assets/sw_north_arrow-5b7b9814.png";var k=function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"map-complications",style:t.cornerSettings},[e("map-scale",{staticClass:"map-scale"}),e("div",{staticClass:"zoom-buttons"},[e("div",{staticClass:"button-single button-top"},[t.globalState.isDarkMode?e("img",{staticClass:"img-button",attrs:{title:t.$t("in"),src:f},on:{click:function(s){return t.zoomIn()}}}):e("img",{staticClass:"img-button",attrs:{title:t.$t("in"),src:x},on:{click:function(s){return t.zoomIn()}}})]),e("div",{staticClass:"button-single"},[t.globalState.isDarkMode?e("img",{staticClass:"img-button",attrs:{title:t.$t("out"),src:v},on:{click:function(s){return t.zoomOut()}}}):e("img",{staticClass:"img-button",attrs:{title:t.$t("out"),src:w},on:{click:function(s){return t.zoomOut()}}})]),t.globalState.isDarkMode?e("div",{staticClass:"button-single button-bottom",style:{background:"rgb(43,60,78)",border:"1px solid rgb(119,119,119)"}},[t.globalState.isDarkMode?e("img",{staticClass:"img-button",style:{transform:`rotate(${t.arrowRotation}deg)`,background:"rgb(43,60,78)",height:"21px"},attrs:{title:t.$t("center"),src:S},on:{click:function(s){return t.setNorth()}}}):t._e()]):t._e(),t.globalState.isDarkMode?t._e():e("div",{staticClass:"button-single button-bottom",style:{border:"1px solid rgb(224,224,224)"}},[e("img",{staticClass:"img-button",style:{transform:`rotate(${t.arrowRotation}deg)`,height:"21px"},attrs:{title:t.$t("center"),src:z},on:{click:function(s){return t.setNorth()}}})])])],1)},C=[];var $=m(d,k,C,!1,null,"a8e635d3",null,null);const y=$.exports;export{y as Z};
//# sourceMappingURL=ZoomButtons-bd69e1e7.js.map
