(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e382c534"],{"0c94":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},n=[],o=(a("a9e3"),a("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:o["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},s=r,c=a("2877"),u=Object(c["a"])(s,i,n,!1,null,"7e2a888e",null);e["a"]=u.exports},1059:function(t,e,a){},"1bea":function(t,e,a){"use strict";var i=a("7283"),n=a.n(i);n.a},"1e9a":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return u})),a.d(e,"d",(function(){return l}));var i=a("b775"),n=a("cf45");function o(t){return Object(i["a"])({url:"/personalized",method:"get",params:t})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={id:t};return e&&(a.timestamp=(new Date).getTime()),Object(i["a"])({url:"/playlist/detail",method:"get",params:a}).then((function(t){return t.playlist.tracks=Object(n["d"])(t.playlist.tracks),t}))}function s(t){return Object(i["a"])({url:"/top/playlist/highquality",method:"get",params:t})}function c(t){return Object(i["a"])({url:"/top/playlist",method:"get",params:t})}function u(){return Object(i["a"])({url:"/toplist/detail",method:"get"})}function l(t){return Object(i["a"])({url:"/playlist/subscribe",method:"get",params:t})}},2726:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover-row"},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"item",class:{artist:"artist"===t.type},style:{marginBottom:"none"===t.subText?"32px":"24px"}},[a("Cover",{staticClass:"cover",attrs:{id:e.id,type:"chart"===t.type?"playlist":t.type,url:t._f("resizeImage")(t.getUrl(e),t.imageSize),hoverEffect:!0,showBlackShadow:!0,showPlayButton:t.showPlayButton,radius:"artist"===t.type?100:12,size:"artist"===t.type?192:208}}),a("div",{staticClass:"text"},[t.showPlayCount?a("div",{staticClass:"info"},[a("span",{staticClass:"play-count"},[a("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(e.playCount))+" ")],1)]):t._e(),a("div",{staticClass:"name"},["album"===t.type&&1056768===e.mark?a("span",{staticClass:"explicit-symbol"},[a("ExplicitSymbol")],1):t._e(),"playlist"===t.type&&10===e.privacy?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),a("router-link",{attrs:{to:"/"+("chart"===t.type?"playlist":t.type)+"/"+e.id}},[t._v(t._s(e.name))])],1),"artist"!==t.type&&"none"!==t.subText?a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.getSubText(e))}})]):t._e()])],1)})),0)},n=[],o=(a("a4d3"),a("e01a"),a("99af"),a("b0c0"),a("a9e3"),a("0c94")),r=a("3020"),s={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:o["a"]},props:{items:Array,type:String,subText:{type:String,default:"none"},imageSize:{type:Number,default:512},showPlayButton:{type:Boolean,default:!1},showPlayCount:{type:Boolean,default:!1}},methods:{getUrl:function(t){return void 0!==t.picUrl?t.picUrl:void 0!==t.coverImgUrl?t.coverImgUrl:void 0!==t.img1v1Url?t.img1v1Url:void 0},getSubText:function(t){if("copywriter"===this.subText)return t.copywriter;if("description"===this.subText)return t.description;if("updateFrequency"===this.subText)return t.updateFrequency;if("creator"===this.subText)return"by "+t.creator.nickname;if("releaseYear"===this.subText)return new Date(t.publishTime).getFullYear();if("artist"===this.subText){if(void 0!==t.artist)return'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>");if(void 0!==t.artists)return'<a href="/#/artist/'.concat(t.artists[0].id,'">').concat(t.artists[0].name,"</a>")}if("albumType+releaseYear"===this.subText){var e=t.type;return"EP/Single"===t.type?e=1===t.size?"Single":"EP":"Single"===t.type?e="Single":"专辑"===t.type&&(e="Album"),"".concat(e," · ").concat(new Date(t.publishTime).getFullYear())}return"appleMusic"===this.subText?"by Apple Music":void 0}}},c=s,u=(a("1bea"),a("2877")),l=Object(u["a"])(c,i,n,!1,null,"ce9630ce",null);e["a"]=l.exports},2909:function(t,e,a){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function n(t){if(Array.isArray(t))return i(t)}a.d(e,"a",(function(){return c}));a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("fb6a"),a("b0c0"),a("25f0");function r(t,e){if(t){if("string"===typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||o(t)||r(t)||s()}},3020:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"cover",class:{"hover-float":t.hoverEffect,"hover-play-button":t.showPlayButton},style:t.coverStyle,on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickToPlay?t.play():t.goTo()}}},[t.showPlayButton?a("button",{staticClass:"play-button",style:t.playButtonStyle,on:{click:function(e){return e.stopPropagation(),t.playButtonClicked(e)}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1):t._e()]),t.hoverEffect?a("transition",{attrs:{name:"fade"}},[a("img",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}})]):t._e(),t.alwaysShowShadow?a("img",{staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}}):t._e()],1)},n=[],o=(a("a9e3"),a("eb6f")),r={name:"Cover",props:{id:Number,type:String,url:String,hoverEffect:Boolean,showPlayButton:Boolean,alwaysShowShadow:Boolean,showBlackShadow:Boolean,clickToPlay:Boolean,size:{type:Number,default:208},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12},playButtonSize:{type:Number,default:48}},data:function(){return{focus:!1,shadowStyle:{},playButtonStyle:{}}},created:function(){this.shadowStyle={height:"".concat(this.size,"px"),width:"".concat(~~(.96*this.size),"px"),top:"".concat(this.shadowMargin,"px"),right:"".concat(~~(.02*this.size),"px"),borderRadius:"".concat(this.radius,"px")},this.playButtonStyle={height:"".concat(this.playButtonSize,"px"),width:"".concat(this.playButtonSize,"px")}},computed:{coverStyle:function(){return{backgroundImage:"url('".concat(this.url,"')"),boxShadow:this.showBlackShadow?"0 12px 16px -8px rgba(0, 0, 0, 0.2)":"",height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRadius:"".concat(this.radius,"px"),cursor:this.clickToPlay?"default":"pointer"}}},methods:{play:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type&&Object(o["e"])(this.id)},playButtonClicked:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type?Object(o["e"])(this.id):"artist"===this.type&&Object(o["d"])(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}},s=r,c=(a("e83d"),a("2877")),u=Object(c["a"])(s,i,n,!1,null,"8cdb356c",null);e["a"]=u.exports},"512b":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"e",(function(){return s})),a.d(e,"a",(function(){return c})),a.d(e,"b",(function(){return u}));var i=a("b775"),n=a("cf45");function o(t){return Object(i["a"])({url:"/artists",method:"get",params:{id:t,timestamp:(new Date).getTime()}}).then((function(t){return t.hotSongs=Object(n["d"])(t.hotSongs),t}))}function r(t){return Object(i["a"])({url:"/artist/album",method:"get",params:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])({url:"/toplist/artist",method:"get",params:{type:t}})}function c(t){return Object(i["a"])({url:"/artist/mv",method:"get",params:t})}function u(t){return Object(i["a"])({url:"/artist/sub",method:"post",params:t})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var i=a("1d80"),n=a("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(i(e));return 1&t&&(a=a.replace(r,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5e45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},n=[],o=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){return{borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"}}}}),r=o,s=(a("e9ab"),a("2877")),c=Object(s["a"])(r,i,n,!1,null,"3053b41d",null);e["a"]=c.exports},7283:function(t,e,a){},"91d0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[a("h1",[t._v(t._s(t.$t("explore.explore")))]),a("div",{staticClass:"buttons"},[t._l(t.settings.playlistCategories.filter((function(t){return t.enable})),(function(e){return a("div",{key:e.name,staticClass:"button",class:{active:e.name===t.activeCategory&&!t.showCatOptions},on:{click:function(a){return t.goToCategory(e.name)}}},[t._v(" "+t._s(e.name)+" ")])})),a("div",{staticClass:"button more",class:{active:t.showCatOptions},on:{click:function(e){t.showCatOptions=!t.showCatOptions}}},[a("svg-icon",{attrs:{"icon-class":"more"}})],1)],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showCatOptions,expression:"showCatOptions"}],staticClass:"panel"},t._l(t.allBigCats,(function(e){return a("div",{key:e,staticClass:"big-cat"},[a("div",{staticClass:"name"},[t._v(t._s(e))]),a("div",{staticClass:"cats"},t._l(t.getCatsByBigCat(e),(function(e){return a("div",{key:e.name,staticClass:"cat",class:{active:e.enable},on:{click:function(a){return t.toggleCat(e.name)}}},[a("span",[t._v(t._s(e.name))])])})),0)])})),0),a("div",{staticClass:"playlists"},[a("CoverRow",{attrs:{type:"playlist",items:t.playlists,subText:t.subText,showPlayButton:!0,showPlayCount:"排行榜"!==t.activeCategory,imageSize:"排行榜"!==t.activeCategory?512:1024}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1===["推荐歌单","排行榜"].includes(t.activeCategory),expression:"['推荐歌单', '排行榜'].includes(activeCategory) === false"}],staticClass:"load-more"},[a("ButtonTwoTone",{directives:[{name:"show",rawName:"v-show",value:t.showLoadMoreButton&&t.hasMore,expression:"showLoadMoreButton && hasMore"}],attrs:{color:"grey",loading:t.loadingMore},nativeOn:{click:function(e){return t.getPlaylist(e)}}},[t._v(t._s(t.$t("explore.loadMore")))])],1)])},n=[],o=(a("4de4"),a("2909")),r=a("5530"),s=a("2f62"),c=a("323e"),u=a.n(c),l=a("1e9a"),p=a("5e45"),f=a("2726"),d=a("0032"),h={name:"Explore",components:{CoverRow:f["a"],ButtonTwoTone:p["a"],SvgIcon:d["a"]},data:function(){return{show:!1,playlists:[],activeCategory:"全部",loadingMore:!1,showLoadMoreButton:!1,hasMore:!0,allBigCats:["语种","风格","场景","情感","主题"],showCatOptions:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(s["d"])(["settings"])),{},{subText:function(){return"排行榜"===this.activeCategory?"updateFrequency":"推荐歌单"===this.activeCategory?"copywriter":"none"}}),methods:Object(r["a"])(Object(r["a"])({},Object(s["c"])(["togglePlaylistCategory"])),{},{loadData:function(){this.show||u.a.start(),this.activeCategory=void 0===this.$route.query.category?"全部":this.$route.query.category,this.getPlaylist()},goToCategory:function(t){this.showCatOptions||this.$router.push({path:"/explore?category="+t})},updatePlaylist:function(t){var e;(e=this.playlists).push.apply(e,Object(o["a"])(t)),this.loadingMore=!1,this.showLoadMoreButton=!0,u.a.done(),this.show=!0},getPlaylist:function(){return this.loadingMore=!0,"推荐歌单"===this.activeCategory?this.getRecommendPlayList():"精品歌单"===this.activeCategory?this.getHighQualityPlaylist():"排行榜"===this.activeCategory?this.getTopLists():this.getTopPlayList()},getRecommendPlayList:function(){var t=this;Object(l["c"])({limit:100}).then((function(e){t.playlists=[],t.updatePlaylist(e.result)}))},getHighQualityPlaylist:function(){var t=this,e=this.playlists,a=0!==e.length?e[e.length-1].updateTime:0;Object(l["b"])({limit:50,before:a}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))},getTopLists:function(){var t=this;Object(l["f"])().then((function(e){t.playlists=[],t.updatePlaylist(e.list)}))},getTopPlayList:function(){var t=this;Object(l["e"])({cat:this.activeCategory,offset:this.playlists.length}).then((function(e){t.updatePlaylist(e.playlists),t.hasMore=e.more}))},getCatsByBigCat:function(t){return this.settings.playlistCategories.filter((function(e){return e.bigCat===t}))},toggleCat:function(t){this.togglePlaylistCategory(t)}}),activated:function(){this.loadData()},beforeRouteUpdate:function(t,e,a){u.a.start(),this.showLoadMoreButton=!1,this.hasMore=!0,this.playlists=[],this.offset=1,this.activeCategory=t.query.category,this.getPlaylist(),a()}},y=h,g=(a("a75f"),a("2877")),m=Object(g["a"])(y,i,n,!1,null,"54f1ac37",null);e["default"]=m.exports},"9a0d":function(t,e,a){},a630:function(t,e,a){var i=a("23e7"),n=a("4df4"),o=a("1c7e"),r=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:n})},a75f:function(t,e,a){"use strict";var i=a("1059"),n=a.n(i);n.a},a9e3:function(t,e,a){"use strict";var i=a("83ab"),n=a("da84"),o=a("94ca"),r=a("6eeb"),s=a("5135"),c=a("c6b6"),u=a("7156"),l=a("c04e"),p=a("d039"),f=a("7c73"),d=a("241c").f,h=a("06cf").f,y=a("9bf2").f,g=a("58a8").trim,m="Number",v=n[m],b=v.prototype,w=c(f(b))==m,C=function(t){var e,a,i,n,o,r,s,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+u}for(o=u.slice(2),r=o.length,s=0;s<r;s++)if(c=o.charCodeAt(s),c<48||c>n)return NaN;return parseInt(o,i)}return+u};if(o(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,S=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof S&&(w?p((function(){b.valueOf.call(a)})):c(a)!=m)?u(new v(C(e)),a,S):C(e)},O=i?d(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;O.length>T;T++)s(v,x=O[T])&&!s(S,x)&&y(S,x,h(v,x));S.prototype=b,b.constructor=S,r(n,m,S)}},d28b:function(t,e,a){var i=a("746f");i("iterator")},e01a:function(t,e,a){"use strict";var i=a("23e7"),n=a("83ab"),o=a("da84"),r=a("5135"),s=a("861d"),c=a("9bf2").f,u=a("e893"),l=o.Symbol;if(n&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var p={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(p[e]=!0),e};u(f,l);var d=f.prototype=l.prototype;d.constructor=f;var h=d.toString,y="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;c(d,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(r(p,t))return"";var a=y?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),i({global:!0,forced:!0},{Symbol:f})}},e498:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return c}));var i=a("b775"),n=a("cf45");function o(t){return Object(i["a"])({url:"/album",method:"get",params:{id:t}}).then((function(t){return t.songs=Object(n["d"])(t.songs),t}))}function r(t){return Object(i["a"])({url:"/album/new",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/album/detail/dynamic",method:"get",params:{id:t,timestamp:(new Date).getTime()}})}function c(t){return Object(i["a"])({url:"/album/sub",method:"post",params:t})}},e83d:function(t,e,a){"use strict";var i=a("f445"),n=a.n(i);n.a},e9ab:function(t,e,a){"use strict";var i=a("9a0d"),n=a.n(i);n.a},eb6f:function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return p}));a("d81d");var i=a("4360"),n=a("e498"),o=a("1e9a"),r=a("512b");function s(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"first",o=t.map((function(t,e){return{sort:e,id:t}}));i["a"].commit("updatePlayerList",o),i["a"].state.player.shuffle&&i["a"].commit("shuffleTheListBeforePlay"),"first"===n?i["a"].dispatch("playFirstTrackOnList"):i["a"].dispatch("playTrackOnListByID",n),i["a"].commit("updateListInfo",{type:a,id:e})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(n["b"])(t).then((function(a){var i=a.songs.map((function(t){return t.id}));s(i,t,"album",e)}))}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(o["a"])(t,a).then((function(a){var i=a.playlist.trackIds.map((function(t){return t.id}));s(i,t,"playlist",e)}))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(r["c"])(t).then((function(a){s(a.hotSongs,t,"artist",e)}))}function p(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={sort:0,id:t};i["a"].commit("appendTrackToPlayerList",{track:a,playNext:e}),e&&i["a"].dispatch("nextTrack",!0)}},f445:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e382c534.4845fd2f.js.map