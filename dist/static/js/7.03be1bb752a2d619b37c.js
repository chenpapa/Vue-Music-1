webpackJsonp([7],{A1IV:function(t,e,r){"use strict";var s=r("2X+S"),a=r("6Xyt"),c=r("vhoT"),o=r("XEAW"),i=r("qwAB"),n=r("8stH"),A=r("T452"),h=r("F4+m");e.a={mixins:[h.b,h.c],components:{SearchBox:s.a,Suggest:a.a,SearchList:c.a,confirm:o.a,Scroll:i.a},data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},watch:{query:function(t){var e=this;t||setTimeout(function(){e.$refs.shortcut.refresh()},20)}},created:function(){this._getHotKey()},methods:{handlePlaylist:function(t){var e=t.length>0?"60px":0;this.$refs.shortcutWrapper.style.bottom=e,this.$refs.shortcut.refresh(),this.$refs.searchResult.style.bottom=e,this.$refs.suggest.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var t=this;r.i(n.b)().then(function(e){A.a===e.code&&(t.hotKey=e.data.hotkey.slice(0,10))})}}}},CgLt:function(t,e,r){var s=r("LcyW");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("8a9ed2fa",s,!0)},LcyW:function(t,e,r){e=t.exports=r("FZ+f")(!0),e.push([t.i,'.search .search-box-wrapper[data-v-3c5ff3c0]{margin:20px}.search .shortcut-wrapper[data-v-3c5ff3c0]{position:fixed;top:178px;bottom:0;width:100%}.search .shortcut-wrapper .shortcut[data-v-3c5ff3c0]{height:100%;overflow:hidden}.search .shortcut-wrapper .shortcut .hot-key[data-v-3c5ff3c0]{margin:0 20px 20px}.search .shortcut-wrapper .shortcut .hot-key .title[data-v-3c5ff3c0]{margin-bottom:20px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .hot-key .item[data-v-3c5ff3c0]{display:inline-block;padding:5px 10px;margin:0 20px 10px 0;border-radius:6px;background:#333;font-size:14px;color:hsla(0,0%,100%,.3)}.search .shortcut-wrapper .shortcut .search-history[data-v-3c5ff3c0]{position:relative;margin:0 20px}.search .shortcut-wrapper .shortcut .search-history .title[data-v-3c5ff3c0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px;font-size:14px;color:hsla(0,0%,100%,.5)}.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-3c5ff3c0]{-webkit-box-flex:1;-ms-flex:1;flex:1}.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-3c5ff3c0]{position:relative}.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-3c5ff3c0]:before{content:"";position:absolute;top:-10px;right:-10px;bottom:-10px;left:-10px}.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-3c5ff3c0]{font-size:14px;color:hsla(0,0%,100%,.3)}.search .search-result[data-v-3c5ff3c0]{position:fixed;width:100%;top:178px;bottom:0}',"",{version:3,sources:["/Users/linjinding/Documents/GitHub/Vue-Music/src/components/search/search.vue"],names:[],mappings:"AACA,6CACE,WAAa,CACd,AACD,2CACE,eAAgB,AAChB,UAAW,AACX,SAAU,AACV,UAAY,CACb,AACD,qDACE,YAAa,AACb,eAAiB,CAClB,AACD,8DACE,kBAAyB,CAC1B,AACD,qEACE,mBAAoB,AACpB,eAAgB,AAChB,wBAA6B,CAC9B,AACD,oEACE,qBAAsB,AACtB,iBAAkB,AAClB,qBAAsB,AACtB,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,wBAA6B,CAC9B,AACD,qEACE,kBAAmB,AACnB,aAAe,CAChB,AACD,4EACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,eAAgB,AAChB,wBAA6B,CAC9B,AACD,kFACE,mBAAoB,AAChB,WAAY,AACR,MAAQ,CACjB,AACD,mFACE,iBAAmB,CACpB,AACD,0FACE,WAAY,AACZ,kBAAmB,AACnB,UAAW,AACX,YAAa,AACb,aAAc,AACd,UAAY,CACb,AACD,+FACE,eAAgB,AAChB,wBAA6B,CAC9B,AACD,wCACE,eAAgB,AAChB,WAAY,AACZ,UAAW,AACX,QAAU,CACX",file:"search.vue",sourcesContent:["\n.search .search-box-wrapper[data-v-3c5ff3c0] {\n  margin: 20px;\n}\n.search .shortcut-wrapper[data-v-3c5ff3c0] {\n  position: fixed;\n  top: 178px;\n  bottom: 0;\n  width: 100%;\n}\n.search .shortcut-wrapper .shortcut[data-v-3c5ff3c0] {\n  height: 100%;\n  overflow: hidden;\n}\n.search .shortcut-wrapper .shortcut .hot-key[data-v-3c5ff3c0] {\n  margin: 0 20px 20px 20px;\n}\n.search .shortcut-wrapper .shortcut .hot-key .title[data-v-3c5ff3c0] {\n  margin-bottom: 20px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .hot-key .item[data-v-3c5ff3c0] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin: 0 20px 10px 0;\n  border-radius: 6px;\n  background: #333;\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .shortcut-wrapper .shortcut .search-history[data-v-3c5ff3c0] {\n  position: relative;\n  margin: 0 20px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title[data-v-3c5ff3c0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  font-size: 14px;\n  color: rgba(255,255,255,0.5);\n}\n.search .shortcut-wrapper .shortcut .search-history .title .text[data-v-3c5ff3c0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-3c5ff3c0] {\n  position: relative;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear[data-v-3c5ff3c0]:before {\n  content: '';\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  bottom: -10px;\n  left: -10px;\n}\n.search .shortcut-wrapper .shortcut .search-history .title .clear .icon-clear[data-v-3c5ff3c0] {\n  font-size: 14px;\n  color: rgba(255,255,255,0.3);\n}\n.search .search-result[data-v-3c5ff3c0] {\n  position: fixed;\n  width: 100%;\n  top: 178px;\n  bottom: 0;\n}"],sourceRoot:""}])},YOyO:function(t,e,r){"use strict";function s(t){r("CgLt")}Object.defineProperty(e,"__esModule",{value:!0});var a=r("A1IV"),c=r("dx1g"),o=r("VU/8"),i=s,n=o(a.a,c.a,i,"data-v-3c5ff3c0",null);e.default=n.exports},dx1g:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-box-wrapper"},[r("search-box",{ref:"searchBox",on:{query:t.onQueryChange}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[r("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:t.refreshDelay,data:t.shortcut}},[r("div",[r("div",{staticClass:"hot-key"},[r("h1",{staticClass:"title"},[t._v("热门搜索")]),t._v(" "),r("ul",t._l(t.hotKey,function(e){return r("li",{staticClass:"item",on:{click:function(r){t.addQuery(e.k)}}},[r("span",[t._v(t._s(e.k))])])}))]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[r("h1",{staticClass:"title"},[r("span",{staticClass:"text"},[t._v("搜索历史")]),t._v(" "),r("span",{staticClass:"clear",on:{click:t.showConfirm}},[r("i",{staticClass:"icon-clear"})])]),t._v(" "),r("search-list",{attrs:{searches:t.searchHistory},on:{select:t.addQuery,delete:t.deleteSearchHistory}})],1)])])],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[r("suggest",{ref:"suggest",attrs:{query:t.query},on:{listScroll:t.blurInput,select:t.saveSearch}})],1),t._v(" "),r("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:t.clearSearchHistory}}),t._v(" "),r("router-view")],1)},a=[],c={render:s,staticRenderFns:a};e.a=c}});
//# sourceMappingURL=7.03be1bb752a2d619b37c.js.map