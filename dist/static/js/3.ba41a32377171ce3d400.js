webpackJsonp([3],{"/lZI":function(e,t,n){"use strict";function i(e){n("dsbQ")}var o=n("x50f"),r=n("7bRW"),s=n("C7Lr"),a=i,d=s(o.a,r.a,!1,a,"data-v-7d6a2178",null);t.a=d.exports},"4lDk":function(e,t,n){t=e.exports=n("UTlt")(!0),t.push([e.i,".recommend[data-v-536742ad]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-536742ad]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-536742ad]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-536742ad]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-536742ad]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-536742ad]{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-536742ad]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-536742ad]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-536742ad]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-536742ad]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/GitHub/Vue-Music/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,2EACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,qEACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,mBAA0B,CAC3B,AACD,2EACE,mBAAoB,AAChB,kBAAmB,AACf,cAAe,AACvB,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,iFACE,mBAAoB,AACpB,UAAY,CACb,AACD,iFACE,wBAA6B,CAC9B,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"recommend.vue",sourcesContent:["\n.recommend[data-v-536742ad] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-536742ad] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-536742ad] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list .list-title[data-v-536742ad] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item[data-v-536742ad] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-536742ad] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-content .recommend-list .item .text[data-v-536742ad] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name[data-v-536742ad] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-content .recommend-list .item .text .desc[data-v-536742ad] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .loading-container[data-v-536742ad] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},"7bRW":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return e.dots?n("span",{staticClass:"dot",class:{active:e.currentPageIndex===i}}):e._e()}))])},o=[],r={render:i,staticRenderFns:o};t.a=r},P3Gh:function(e,t,n){t=e.exports=n("UTlt")(!0),t.push([e.i,".slider[data-v-7d6a2178]{min-height:1px}.slider .slider-group[data-v-7d6a2178]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-7d6a2178]{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-7d6a2178]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-7d6a2178]{display:block;width:100%}.slider .dots[data-v-7d6a2178]{position:absolute;left:0;right:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-7d6a2178]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-7d6a2178]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["E:/GitHub/Vue-Music/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-7d6a2178] {\n  min-height: 1px;\n}\n.slider .slider-group[data-v-7d6a2178] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-7d6a2178] {\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-7d6a2178] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-7d6a2178] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-7d6a2178] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-7d6a2178] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-7d6a2178] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},TCVM:function(e,t,n){var i=n("4lDk");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("FIqI")("17ff9646",i,!0,{})},"W1+L":function(e,t,n){"use strict";function i(e){n("TCVM")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("XHmo"),r=n("nTvJ"),s=n("C7Lr"),a=i,d=s(o.a,r.a,!1,a,"data-v-536742ad",null);t.default=d.exports},XHmo:function(e,t,n){"use strict";var i=n("4YfN"),o=n.n(i),r=n("m40h"),s=n("T452"),a=n("/lZI"),d=n("qwAB"),A=n("y/jF"),l=n("F4+m"),c=n("HVJf");t.a={mixins:[l.c],components:{Slider:a.a,Scroll:d.a,Loading:A.a},data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:o()({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.recommend.style.bottom=t,this.$refs.scroll.refresh()},_getRecommend:function(){var e=this;n.i(r.b)().then(function(t){s.b===t.code&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;n.i(r.c)().then(function(t){s.b===t.code&&(e.discList=t.data.list)})},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)}},n.i(c.b)({setDisc:"SET_DISC"}))}},dsbQ:function(e,t,n){var i=n("P3Gh");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n("FIqI")("7b345410",i,!0,{})},m40h:function(e,t,n){"use strict";function i(){var e=A()({},c.a,{platform:"h5",uin:0,needNewCode:1});return n.i(l.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,c.c)}function o(){var e=A()({},c.a,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return C.a.get("/api/getDiscList",{params:e}).then(function(e){return a.a.resolve(e.data)})}function r(e){var t=A()({},{disstid:e,type:1,json:1,utf8:1,onlysong:0,format:"jsonp",g_tk:5381,jsonpCallback:"playlistinfoCallback",loginUin:0,hostUin:0,inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq",needNewCode:0});return C.a.get("/api/getSongList",{params:t}).then(function(e){var t=e.data.substring(21,e.data.length-1);return t=JSON.parse(t),a.a.resolve(t)})}t.b=i,t.c=o,t.a=r;var s=n("rVsN"),a=n.n(s),d=n("aA9S"),A=n.n(d),l=n("Gak4"),c=n("T452"),m=n("BMa3"),C=n.n(m)},nTvJ:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[n("div",[e.recommends.length?n("div",{staticClass:"slider-wrapper"},[n("slider",e._l(e.recommends,function(e){return n("div",[n("a",[n("img",{attrs:{src:e.picUrl}})])])}))],1):e._e(),e._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),n("ul",e._l(e.discList,function(t,i){return n("li",{staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),n("div",{staticClass:"text"},[n("h2",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("router-view")],1)},o=[],r={render:i,staticRenderFns:o};t.a=r},x50f:function(e,t,n){"use strict";var i=n("3Q4o"),o=n("Hu4l"),r=n.n(o);t.a={props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},destroyed:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,o=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var s=this.children[r];n.i(i.c)(s,"slider-item"),s.style.width=o+"px",t+=o}this.loop&&!e&&(t+=2*o),this.$refs.sliderGroup.style.width=t+"px"},_initDots:function(){this.dots=new Array(this.children.length)},_initSlider:function(){var e=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&e._play()}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}}}}});
//# sourceMappingURL=3.ba41a32377171ce3d400.js.map