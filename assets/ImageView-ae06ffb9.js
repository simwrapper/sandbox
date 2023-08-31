import{d as i,g as o,n}from"./index-04a97e2f.js";import{r as l}from"./index-ba9ce3bf.js";const r=i({name:"ImageViewPlugin",props:{fileApi:{type:Object,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,thumbnail:Boolean},data:()=>({globalState:o.state,myState:{},matsimPngTitles:{"modestats.png":"Mode statistics","ph_modestats.png":"Passenger hours traveled per mode","pkm_modestats.png":"Passenger km traveled per mode","scorestats.png":"Score statistics","stopwatch.png":"Stopwatch: computation time","traveldistancestatslegs.png":"Leg travel distance","traveldistancestatstrips.png":"Trip travel distance"}}),computed:{isDarkMode(){return this.globalState.isDarkMode}},methods:{buildRouteFromUrl(){const e=this.$route.params;if(!e.project||!e.pathMatch){console.log("I CANT EVEN: NO PROJECT/PARHMATCH");return}const t=1+e.pathMatch.lastIndexOf("/"),s=e.pathMatch.substring(0,t),a=e.pathMatch.substring(t);this.myState.subfolder=s,this.myState.yamlConfig=a},async getVizDetails(){try{const e=await this.myState.fileApi.getFileBlob(this.myState.subfolder+"/"+this.myState.yamlConfig);if(!e){console.log("no blob! :-(");return}const t=await l.dataurl(e);this.myState.imageData=t;const s=this.yamlConfig,a=this.matsimPngTitles[s]?this.matsimPngTitles[s]:this.yamlConfig;this.$emit("title",a)}catch(e){return console.error({e}),null}}},watch:{yamlConfig(){this.myState.yamlConfig=this.yamlConfig,this.getVizDetails()},subfolder(){this.myState.subfolder=this.subfolder,this.getVizDetails()}},mounted(){this.myState={fileApi:this.fileApi,subfolder:this.subfolder,yamlConfig:this.yamlConfig,thumbnail:this.thumbnail,imageData:""},this.yamlConfig||this.buildRouteFromUrl(),this.getVizDetails()}});var m=function(){var t=this,s=t._self._c;return t._self._setupProxy,t.myState.yamlConfig?s("div",{staticClass:"image-container",class:{zthumbnail:t.thumbnail}},[s("img",{staticClass:"medium-zoom",class:{"invert-colors":t.isDarkMode},attrs:{src:t.myState.imageData}})]):t._e()},g=[];var c=n(r,m,g,!1,null,"e5219d61",null,null);const u=c.exports;export{u as default};
//# sourceMappingURL=ImageView-ae06ffb9.js.map
