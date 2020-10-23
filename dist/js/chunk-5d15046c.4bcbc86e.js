(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d15046c"],{1101:function(t,s,e){"use strict";var a=e("bff0"),i=e.n(a);i.a},2726:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cover-row"},t._l(t.items,(function(s){return e("div",{key:s.id,staticClass:"item",class:{artist:"artist"===t.type},style:{marginBottom:"none"===t.subText?"32px":"24px"}},[e("Cover",{staticClass:"cover",attrs:{id:s.id,type:"chart"===t.type?"playlist":t.type,url:t._f("resizeImage")(t.getUrl(s),t.imageSize),hoverEffect:!0,showBlackShadow:!0,showPlayButton:t.showPlayButton,radius:"artist"===t.type?100:12,size:"artist"===t.type?192:208}}),e("div",{staticClass:"text"},[t.showPlayCount?e("div",{staticClass:"info"},[e("span",{staticClass:"play-count"},[e("svg-icon",{attrs:{"icon-class":"play"}}),t._v(t._s(t._f("formatPlayCount")(s.playCount))+" ")],1)]):t._e(),e("div",{staticClass:"name"},["album"===t.type&&1056768===s.mark?e("span",{staticClass:"explicit-symbol"},[e("ExplicitSymbol")],1):t._e(),"playlist"===t.type&&10===s.privacy?e("span",{staticClass:"lock-icon"},[e("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),e("router-link",{attrs:{to:"/"+("chart"===t.type?"playlist":t.type)+"/"+s.id}},[t._v(t._s(s.name))])],1),"artist"!==t.type&&"none"!==t.subText?e("div",{staticClass:"info"},[e("span",{domProps:{innerHTML:t._s(t.getSubText(s))}})]):t._e()])],1)})),0)},i=[],o=(e("a4d3"),e("e01a"),e("99af"),e("b0c0"),e("a9e3"),e("0c94")),r=e("3020"),n={name:"CoverRow",components:{Cover:r["a"],ExplicitSymbol:o["a"]},props:{items:Array,type:String,subText:{type:String,default:"none"},imageSize:{type:Number,default:512},showPlayButton:{type:Boolean,default:!1},showPlayCount:{type:Boolean,default:!1}},methods:{getUrl:function(t){return void 0!==t.picUrl?t.picUrl:void 0!==t.coverImgUrl?t.coverImgUrl:void 0!==t.img1v1Url?t.img1v1Url:void 0},getSubText:function(t){return"copywriter"===this.subText?t.copywriter:"description"===this.subText?t.description:"updateFrequency"===this.subText?t.updateFrequency:"creator"===this.subText?"by "+t.creator.nickname:"releaseYear"===this.subText?new Date(t.publishTime).getFullYear():"artist"===this.subText?'<a href="/#/artist/'.concat(t.artist.id,'">').concat(t.artist.name,"</a>"):"albumType+releaseYear"===this.subText?"".concat(1===t.size?"Single":"EP"," · ").concat(new Date(t.publishTime).getFullYear()):"appleMusic"===this.subText?"by Apple Music":void 0}}},l=n,c=(e("1101"),e("2877")),u=Object(c["a"])(l,a,i,!1,null,"3531e890",null);s["a"]=u.exports},3020:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticStyle:{position:"relative"}},[e("transition",{attrs:{name:"zoom"}},[e("div",{staticClass:"cover",class:{"hover-float":t.hoverEffect,"hover-play-button":t.showPlayButton},style:t.coverStyle,on:{mouseover:function(s){t.focus=!0},mouseleave:function(s){t.focus=!1},click:function(s){t.clickToPlay?t.play():t.goTo()}}},[t.showPlayButton?e("button",{staticClass:"play-button",style:t.playButtonStyle,on:{click:function(s){return s.stopPropagation(),t.playButtonClicked(s)}}},[e("svg-icon",{attrs:{"icon-class":"play"}})],1):t._e()])]),t.hoverEffect?e("transition",{attrs:{name:"fade"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}})]):t._e(),t.alwaysShowShadow?e("img",{staticClass:"shadow",style:t.shadowStyle,attrs:{src:t.url}}):t._e()],1)},i=[],o=(e("a9e3"),e("eb6f")),r={name:"Cover",props:{id:Number,type:String,url:String,hoverEffect:Boolean,showPlayButton:Boolean,alwaysShowShadow:Boolean,showBlackShadow:Boolean,clickToPlay:Boolean,size:{type:Number,default:208},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12},playButtonSize:{type:Number,default:48}},data:function(){return{focus:!1,shadowStyle:{},playButtonStyle:{}}},created:function(){this.shadowStyle={height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),top:"".concat(this.shadowMargin,"px"),borderRadius:"".concat(this.radius,"px")},this.playButtonStyle={height:"".concat(this.playButtonSize,"px"),width:"".concat(this.playButtonSize,"px")}},computed:{coverStyle:function(){return{backgroundImage:"url('".concat(this.url,"')"),boxShadow:this.showBlackShadow?"0 12px 16px -8px rgba(0, 0, 0, 0.2)":"",height:"".concat(this.size,"px"),width:"".concat(this.size,"px"),borderRadius:"".concat(this.radius,"px"),cursor:this.clickToPlay?"default":"pointer"}}},methods:{play:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type&&Object(o["e"])(this.id)},playButtonClicked:function(){"album"===this.type?Object(o["c"])(this.id):"playlist"===this.type?Object(o["e"])(this.id):"artist"===this.type&&Object(o["d"])(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}},n=r,l=(e("b487"),e("2877")),c=Object(l["a"])(n,a,i,!1,null,"b66fa8a4",null);s["a"]=c.exports},"5d11":function(t,s,e){},"5e45":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?e("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},i=[],o=(e("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){return{borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),height:"38px",width:"round"===this.shape?"38px":"auto"}}}}),r=o,n=(e("68a0"),e("2877")),l=Object(n["a"])(r,a,i,!1,null,"e283f8e0",null);s["a"]=l.exports},"66db":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"artist"},[e("div",{staticClass:"artist-info"},[e("div",{staticClass:"head"},[e("img",{attrs:{src:t._f("resizeImage")(t.artist.img1v1Url,1024)}})]),e("div",[e("div",{staticClass:"name"},[t._v(t._s(t.artist.name))]),e("div",{staticClass:"artist"},[t._v(t._s(t.$t("artist.artist")))]),e("div",{staticClass:"statistics"},[t._v(" "+t._s(t.artist.musicSize)+" "+t._s(t.$t("common.songs"))+" · "+t._s(t.artist.albumSize)+" "+t._s(t.$t("artist.withAlbums"))+" · "+t._s(t.artist.mvSize)+" "+t._s(t.$t("artist.videos"))+" ")]),e("div",{staticClass:"buttons"},[e("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(s){return t.playPopularSongs()}}},[t._v(" "+t._s(t.$t("play"))+" ")])],1)])]),e("div",{staticClass:"latest-release"},[e("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.latestRelease")))]),e("div",{staticClass:"release"},[e("div",{staticClass:"container"},[e("Cover",{attrs:{url:t._f("resizeImage")(t.latestRelease.picUrl),showPlayButton:!0,showBlackShadow:!0,type:"album",id:t.latestRelease.id,hoverEffect:!0,size:128,playButtonSize:36,shadowMargin:8,radius:8}}),e("div",{staticClass:"info"},[e("div",{staticClass:"name"},[e("router-link",{attrs:{to:"/album/"+t.latestRelease.id}},[t._v(t._s(t.latestRelease.name))])],1),e("div",{staticClass:"date"},[t._v(" "+t._s(t._f("formatDate")(t.latestRelease.publishTime))+" ")]),e("div",{staticClass:"type"},[t._v(" "+t._s(t._f("formatAlbumType")(t.latestRelease.type,t.latestRelease))+" · "+t._s(t.latestRelease.size)+" "+t._s(t.$t("common.songs"))+" ")])])],1),e("div")])]),e("div",{staticClass:"popular-tracks"},[e("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.popularSongs")))]),e("TrackList",{attrs:{tracks:t.popularTracks.slice(0,t.showMorePopTracks?24:12),type:"tracklist"}}),e("div",{staticClass:"show-more"},[e("button",{on:{click:function(s){t.showMorePopTracks=!t.showMorePopTracks}}},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.showMorePopTracks,expression:"!showMorePopTracks"}]},[t._v(t._s(t.$t("artist.showMore")))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.showMorePopTracks,expression:"showMorePopTracks"}]},[t._v(t._s(t.$t("artist.showLess")))])])])],1),0!==t.albums.length?e("div",{staticClass:"albums"},[e("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.albums")))]),e("CoverRow",{attrs:{type:"album",items:t.albums,subText:"releaseYear",showPlayButton:!0}})],1):t._e(),0!==t.mvs.length?e("div",{staticClass:"mvs"},[e("div",{staticClass:"section-title"},[t._v("MVs")]),e("MvRow",{attrs:{mvs:t.mvs,subtitle:"publishTime"}})],1):t._e(),e("div",{staticClass:"eps"},[e("div",{staticClass:"section-title"},[t._v(t._s(t.$t("artist.EPsSingles")))]),e("CoverRow",{attrs:{type:"album",items:t.eps,subText:"albumType+releaseYear",showPlayButton:!0}})],1)])},i=[],o=(e("4de4"),e("caad"),e("d81d"),e("d3b7"),e("25f0"),e("5530")),r=e("2f62"),n=e("512b"),l=e("eb6f"),c=e("323e"),u=e.n(c),p=e("5e45"),d=e("a1a1"),v=e("2726"),h=e("3020"),m=e("d4e3"),f={name:"Artist",components:{Cover:h["a"],ButtonTwoTone:p["a"],TrackList:d["a"],CoverRow:v["a"],MvRow:m["a"]},data:function(){return{show:!1,artist:{img1v1Url:"https://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg"},popularTracks:[],albumsData:[],latestRelease:{picUrl:"",publishTime:0,id:0,name:"",type:"",size:""},showMorePopTracks:!1,mvs:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(r["d"])(["player"])),{},{albums:function(){return this.albumsData.filter((function(t){return"专辑"===t.type}))},eps:function(){return this.albumsData.filter((function(t){return["EP/Single","EP","Single"].includes(t.type)}))}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(r["c"])(["appendTrackToPlayerList"])),Object(r["b"])(["playFirstTrackOnList","playTrackOnListByID"])),{},{loadData:function(t){var s=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Object(n["b"])(t).then((function(t){s.artist=t.artist,s.popularTracks=t.hotSongs,void 0!==e&&e(),u.a.done(),s.show=!0})),Object(n["c"])({id:t,limit:200}).then((function(t){s.albumsData=t.hotAlbums,s.latestRelease=t.hotAlbums[0]})),Object(n["a"])(t).then((function(t){s.mvs=t.mvs}))},goToAlbum:function(t){this.$router.push({name:"album",params:{id:t}})},playPopularSongs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",s=this.popularTracks.map((function(t){return t.id}));Object(l["b"])(s,this.artist.id,"artist",t)}}),created:function(){this.loadData(this.$route.params.id)},activated:function(){this.show&&this.artist.id.toString()!==this.$route.params.id&&(this.show=!1,u.a.start(),this.loadData(this.$route.params.id))},beforeRouteUpdate:function(t,s,e){u.a.start(),this.artist.img1v1Url="https://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",this.loadData(t.params.id,e)}},y=f,b=(e("fe72"),e("2877")),w=Object(b["a"])(y,a,i,!1,null,"e6d5ac02",null);s["default"]=w.exports},"68a0":function(t,s,e){"use strict";var a=e("ec88"),i=e.n(a);i.a},b487:function(t,s,e){"use strict";var a=e("cc89"),i=e.n(a);i.a},bff0:function(t,s,e){},c601:function(t,s,e){},c8cc:function(t,s,e){"use strict";var a=e("c601"),i=e.n(a);i.a},cc89:function(t,s,e){},d4e3:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mv-row"},t._l(t.mvs,(function(s){return e("div",{key:s.id,staticClass:"mv"},[e("div",{staticClass:"cover-container"},[e("img",{staticClass:"cover",attrs:{src:t.getUrl(s)},on:{mouseover:function(e){t.hoverVideoID=s.id},mouseleave:function(s){t.hoverVideoID=0},click:function(e){return t.goToMv(s.id)}}}),e("transition",{attrs:{name:"fade"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.hoverVideoID===s.id,expression:"hoverVideoID === mv.id"}],staticClass:"shadow",attrs:{src:t.getUrl(s)}})])],1),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("router-link",{attrs:{to:"/mv/"+s.id}},[t._v(t._s(s.name))])],1),e("div",{staticClass:"artist"},["artist"===t.subtitle?e("router-link",{attrs:{to:"/artist/"+s.artistId}},[t._v(t._s(s.artistName))]):t._e(),"publishTime"===t.subtitle?e("span",[t._v(t._s(s.publishTime))]):t._e()],1)])])})),0)},i=[],o={name:"CoverVideo",props:{mvs:Array,subtitle:{type:String,default:"artist"}},data:function(){return{hoverVideoID:0}},methods:{goToMv:function(t){var s={};void 0!==this.$parent.player&&(s={autoplay:this.$parent.player.playing}),this.$router.push({path:"/mv/"+t,query:s})},getUrl:function(t){return void 0!==t.cover?t.cover:void 0!==t.imgurl16v9?t.imgurl16v9:void 0!==t.coverUrl?t.coverUrl:void 0}}},r=o,n=(e("c8cc"),e("2877")),l=Object(n["a"])(r,a,i,!1,null,"e1627b9e",null);s["a"]=l.exports},e01a:function(t,s,e){"use strict";var a=e("23e7"),i=e("83ab"),o=e("da84"),r=e("5135"),n=e("861d"),l=e("9bf2").f,c=e("e893"),u=o.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),s=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(p[s]=!0),s};c(d,u);var v=d.prototype=u.prototype;v.constructor=d;var h=v.toString,m="Symbol(test)"==String(u("test")),f=/^Symbol\((.*)\)[^)]+$/;l(v,"description",{configurable:!0,get:function(){var t=n(this)?this.valueOf():this,s=h.call(t);if(r(p,t))return"";var e=m?s.slice(7,-1):s.replace(f,"$1");return""===e?void 0:e}}),a({global:!0,forced:!0},{Symbol:d})}},ec88:function(t,s,e){},fe72:function(t,s,e){"use strict";var a=e("5d11"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-5d15046c.4bcbc86e.js.map