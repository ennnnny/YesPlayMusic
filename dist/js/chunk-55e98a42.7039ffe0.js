(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55e98a42"],{"0c94":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},i=[],o=(a("a9e3"),a("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:o["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},s=r,c=a("2877"),u=Object(c["a"])(s,n,i,!1,null,"7e2a888e",null);e["a"]=u.exports},1101:function(t,e,a){"use strict";var n=a("bff0"),i=a.n(n);i.a},"1e9a":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"d",(function(){return l}));var n=a("b775"),i=a("cf45");function o(t){return Object(n["a"])({url:"/personalized",method:"get",params:t})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={id:t};return e&&(a.timestamp=(new Date).getTime()),Object(n["a"])({url:"/playlist/detail",method:"get",params:a}).then((function(t){return t.playlist.tracks=Object(i["a"])(t.playlist.tracks),t}))}function s(t){return Object(n["a"])({url:"/top/playlist/highquality",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/top/playlist",method:"get",params:t})}function u(){return Object(n["a"])({url:"/toplist/detail",method:"get"})}function l(t){return Object(n["a"])({url:"/playlist/subscribe",method:"get",params:t})}},2726:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-row"},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type},style:{marginBottom:"none"===t.subText?"32px":"24px"}},[a("Cover",{staticClass:"cover",attrs:{id:e.id,type:"chart"===t.type?"playlist":t.type,url:t._f("resizeImage")(t.getUrl(e),t.imageSize),hoverEffect:!0,showBlackShadow:!0,showPlayButton:t.showPlayButton,radius:"artist"===t.type?100:12,size:"artist"===t.type?192:208}}),a("div",{staticClass:"text"},[t.showPlayCount?a("div",{staticClass:"info"},[a("span",{staticClass:"play-count"},[a("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),a("div",{staticClass:"name"},["album"===t.type&&1056768===e.mark?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),"playlist"===t.type&&10===e.privacy?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),a("router-link",{attrs:{to:"/"+("chart"===t.type?"playlist":t.type)+"/"+e.id}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},i=[],o=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("a9e3"),a("0c94")),r=a("3020"),s={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:o["a"]},props:{items:Array,type:String,subText:{type:String,default:"none"},imageSize:{type:Number,default:512},showPlayButton:{type:Boolean,default:!1},showPlayCount:{type:Boolean,default:!1}},methods:{getUrl:function(t){return void 0!==t.picUrl?t.picUrl:void 0!==t.coverImgUrl?t.coverImgUrl:void 0!==t.img1v1Url?t.img1v1Url:void 0},getSubText:function(t){return"copywriter"===this.subText?t.copywriter:"description"===this.subText?t.description:"updateFrequency"===this.subText?t.updateFrequency:"creator"===this.subText?"by "+t.creator.nickname:"releaseYear"===this.subText?new Date(t.publishTime).getFullYear():"artist"===this.subText?'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>"):"albumType+releaseYear"===this.subText?"".concat(1===t.size?"Single":"EP"," · ").concat(new Date(t.publishTime).getFullYear()):"appleMusic"===this.subText?"by Apple Music":void 0}}},c=s,u=(a("1101"),a("2877")),l=Object(u["a"])(c,n,i,!1,null,"3531e890",null);e["a"]=l.exports},2909:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function i(t){if(Array.isArray(t))return n(t)}a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("fb6a"),a("b0c0"),a("25f0");function r(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||r(t)||s()}},3020:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("transition",{attrs:{name:"zoom"}},[a("div",{staticClass:"cover",class:{"hover-float":t.hoverEffect,"hover-play-button":t.showPlayButton},style:t.coverStyle,on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickToPlay?t.play():t.goTo()}}},[t.showPlayButton?a("button",{staticClass:"play-button",style:t.playButtonStyle,on:{click:function(e){return e.stopPropagation(),t.playButtonClicked(e)}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1):t._e()])]),t.hoverEffect?a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}})]):t._e(),t.alwaysShowShadow?a("img",{staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}}):t._e()],1)},i=[],o=(a("a9e3"),a("eb6f")),r={name:"Cover",props:{id:Number,type:String,url:String,hoverEffect:Boolean,showPlayButton:Boolean,alwaysShowShadow:Boolean,showBlackShadow:Boolean,clickToPlay:Boolean,size:{type:Number,default:208},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12},playButtonSize:{type:Number,default:48}},data:function(){return{focus:!1,shadowStyle:{},playButtonStyle:{}}},created:function(){this.shadowStyle={height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),top:"".concat(this.shadowMargin,"px"),borderRadius:"".concat(this.radius,"px")},this.playButtonStyle={height:"".concat(this.playButtonSize,"px"),width:"".concat(this.playButtonSize,"px")}},computed:{coverStyle:function(){return{backgroundImage:"url('".concat(this.url,"')"),boxShadow:this.showBlackShadow?"0 12px 16px -8px rgba(0, 0, 0, 0.2)":"",height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRadius:"".concat(this.radius,"px"),cursor:this.clickToPlay?"default":"pointer"}}},methods:{play:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type&&Object(o["e"])(this.id)},playButtonClicked:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type?Object(o["e"])(this.id):"artist"===this.type&&Object(o["d"])(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}},s=r,c=(a("b487"),a("2877")),u=Object(c["a"])(s,n,i,!1,null,"b66fa8a4",null);e["a"]=u.exports},3611:function(t,e,a){"use strict";var n=a("937a"),i=a.n(n);i.a},"4df4":function(t,e,a){"use strict";var n=a("0366"),i=a("7b0b"),o=a("9bdd"),r=a("e95a"),s=a("50c4"),c=a("8418"),u=a("35a1");t.exports=function(t){var e,a,l,p,f,d,h=i(t),y="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,b=void 0!==g,m=u(h),w=0;if(b&&(g=n(g,v>2?arguments[2]:void 0,2)),void 0==m||y==Array&&r(m))for(e=s(h.length),a=new y(e);e>w;w++)d=b?g(h[w],w):h[w],c(a,w,d);else for(p=m.call(h),f=p.next,a=new y;!(l=f.call(p)).done;w++)d=b?o(p,g,[l.value,w],!0):l.value,c(a,w,d);return a.length=w,a}},"512b":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return c}));var n=a("b775"),i=a("cf45");function o(t){return Object(n["a"])({url:"/artists",method:"get",params:{id:t}}).then((function(t){return t.hotSongs=Object(i["a"])(t.hotSongs),t}))}function r(t){return Object(n["a"])({url:"/artist/album",method:"get",params:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(n["a"])({url:"/toplist/artist",method:"get",params:{type:t}})}function c(t){return Object(n["a"])({url:"/artist/mv",method:"get",params:{id:t}})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),o="["+i+"]",r=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5e45":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},i=[],o=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){return{borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),height:"38px",width:"round"===this.shape?"38px":"auto"}}}}),r=o,s=(a("68a0"),a("2877")),c=Object(s["a"])(r,n,i,!1,null,"e283f8e0",null);e["a"]=c.exports},"68a0":function(t,e,a){"use strict";var n=a("ec88"),i=a.n(n);i.a},"91d0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[a("h1",[t._v(t._s(t.$t("explore.explore")))]),a("div",{staticClass:"buttons"},[t._l(t.settings.playlistCategories,(function(e){return a("div",{key:e.name,staticClass:"button",class:{active:e.name===t.activeCategory},on:{click:function(a){return t.goToCategory(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),a("div",{staticClass:"button more"},[a("svg-icon",{attrs:{"icon-class":"more"}})],1)],2),a("div",{staticClass:"playlists"},[a("CoverRow",{attrs:{type:"playlist",items:t.playlists,subText:t.subText,showPlayButton:!0,showPlayCount:"排行榜"!==t.activeCategory,imageSize:"排行榜"!==t.activeCategory?512:1024}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1===["推荐歌单","排行榜"].includes(t.activeCategory),expression:"['推荐歌单', '排行榜'].includes(activeCategory) === false"}],staticClass:"load-more"},[a("ButtonTwoTone",{directives:[{name:"show",rawName:"v-show",value:t.showLoadMoreButton&&t.hasMore,expression:"showLoadMoreButton && hasMore"}],attrs:{color:"grey",loading:t.loadingMore},nativeOn:{click:function(e){return t.getPlaylist(e)}}},[t._v(t._s(t.$t("explore.loadMore")))])],1)])},i=[],o=a("2909"),r=a("5530"),s=a("2f62"),c=a("323e"),u=a.n(c),l=a("1e9a"),p=a("5e45"),f=a("2726"),d=a("0032"),h={name:"Explore",components:{CoverRow:f["a"],ButtonTwoTone:p["a"],SvgIcon:d["a"]},data:function(){return{show:!1,playlists:[],activeCategory:"全部",loadingMore:!1,showLoadMoreButton:!1,hasMore:!0}},computed:Object(r["a"])(Object(r["a"])({},Object(s["d"])(["settings"])),{},{subText:function(){return"排行榜"===this.activeCategory?"updateFrequency":"推荐歌单"===this.activeCategory?"copywriter":"none"}}),methods:{loadData:function(){this.show||u.a.start(),this.activeCategory=void 0===this.$route.query.category?"全部":this.$route.query.category,this.getPlaylist()},goToCategory:function(t){this.$router.push({path:"/explore?category="+t})},updatePlaylist:function(t){var e;(e=this.playlists).push.apply(e,Object(o["a"])(t)),this.loadingMore=!1,this.showLoadMoreButton=!0,u.a.done(),this.show=!0},getPlaylist:function(){return this.loadingMore=!0,"推荐歌单"===this.activeCategory?this.getRecommendPlayList():"精品歌单"===this.activeCategory?this.getHighQualityPlaylist():"排行榜"===this.activeCategory?this.getTopLists():this.getTopPlayList()},getRecommendPlayList:function(){var t=this;Object(l["c"])({limit:100}).then((function(e){t.playlists=[],t.updatePlaylist(e.result)}))},getHighQualityPlaylist:function(){var t=this,e=this.playlists,a=0!==e.length?e[e.length-1].updateTime:0;Object(l["b"])({limit:50,before:a}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))},getTopLists:function(){var t=this;Object(l["f"])().then((function(e){t.playlists=[],t.updatePlaylist(e.list)}))},getTopPlayList:function(){var t=this;Object(l["e"])({cat:this.activeCategory,offset:this.playlists.length}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))}},activated:function(){this.loadData()},beforeRouteUpdate:function(t,e,a){u.a.start(),this.showLoadMoreButton=!1,this.hasMore=!0,this.playlists=[],this.offset=1,this.activeCategory=t.query.category,this.getPlaylist(),a()}},y=h,v=(a("3611"),a("2877")),g=Object(v["a"])(y,n,i,!1,null,"24b2881a",null);e["default"]=g.exports},"937a":function(t,e,a){},a630:function(t,e,a){var n=a("23e7"),i=a("4df4"),o=a("1c7e"),r=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:r},{from:i})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),o=a("94ca"),r=a("6eeb"),s=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),p=a("d039"),f=a("7c73"),d=a("241c").f,h=a("06cf").f,y=a("9bf2").f,v=a("58a8").trim,g="Number",b=i[g],m=b.prototype,w=c(f(m))==g,x=function(t){var e,a,n,i,o,r,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=v(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),r=o.length,s=0;s<r;s++)if(c=o.charCodeAt(s),c<48||c>i)return NaN;return parseInt(o,n)}return+u};if(o(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var S,C=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof C&&(w?p((function(){m.valueOf.call(a)})):c(a)!=g)?u(new b(x(e)),a,C):x(e)},T=n?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;T.length>O;O++)s(b,S=T[O])&&!s(C,S)&&y(C,S,h(b,S));C.prototype=m,m.constructor=C,r(i,g,C)}},b487:function(t,e,a){"use strict";var n=a("cc89"),i=a.n(n);i.a},bff0:function(t,e,a){},cc89:function(t,e,a){},d28b:function(t,e,a){var n=a("746f");n("iterator")},e01a:function(t,e,a){"use strict";var n=a("23e7"),i=a("83ab"),o=a("da84"),r=a("5135"),s=a("861d"),c=a("9bf2").f,u=a("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(f,l);var d=f.prototype=l.prototype;d.constructor=f;var h=d.toString,y="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(r(p,t))return"";var a=y?e.slice(7,-1):e.replace(v,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:f})}},e498:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return r}));var n=a("b775"),i=a("cf45");function o(t){return Object(n["a"])({url:"/album",method:"get",params:{id:t}}).then((function(t){return t.songs=Object(i["a"])(t.songs),t}))}function r(t){return Object(n["a"])({url:"/album/new",method:"get",params:t})}},eb6f:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return p}));a("d81d");var n=a("4360"),i=a("e498"),o=a("1e9a"),r=a("512b");function s(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"first",o=t.map((function(t,e){return{sort:e,id:t}}));n["a"].commit("updatePlayerList",o),n["a"].state.player.shuffle&&n["a"].commit("shuffleTheListBeforePlay"),"first"===i?n["a"].dispatch("playFirstTrackOnList"):n["a"].dispatch("playTrackOnListByID",i),n["a"].commit("updateListInfo",{type:a,id:e})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(i["a"])(t).then((function(a){var n=a.songs.map((function(t){return t.id}));s(n,t,"album",e)}))}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(o["a"])(t,a).then((function(a){var n=a.playlist.trackIds.map((function(t){return t.id}));s(n,t,"playlist",e)}))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(r["b"])(t).then((function(a){s(a.hotSongs,t,"artist",e)}))}function p(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={sort:0,id:t};n["a"].commit("appendTrackToPlayerList",{track:a,playNext:e}),e&&n["a"].dispatch("nextTrack",!0)}},ec88:function(t,e,a){}}]);
//# sourceMappingURL=chunk-55e98a42.7039ffe0.js.map