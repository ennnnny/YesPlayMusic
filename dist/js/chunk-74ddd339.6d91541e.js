(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74ddd339"],{"0a35":function(t,e,i){},"0c94":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},a=[],s=(i("a9e3"),i("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:s["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},c=r,u=i("2877"),l=Object(u["a"])(c,n,a,!1,null,"7e2a888e",null);e["a"]=l.exports},"1e9a":function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return c})),i.d(e,"e",(function(){return u})),i.d(e,"f",(function(){return l})),i.d(e,"d",(function(){return o}));var n=i("b775"),a=i("cf45");function s(t){return Object(n["a"])({url:"/personalized",method:"get",params:t})}function r(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={id:t};return e&&(i.timestamp=(new Date).getTime()),Object(n["a"])({url:"/playlist/detail",method:"get",params:i}).then((function(t){return t.playlist.tracks=Object(a["d"])(t.playlist.tracks),t}))}function c(t){return Object(n["a"])({url:"/top/playlist/highquality",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/top/playlist",method:"get",params:t})}function l(){return Object(n["a"])({url:"/toplist/detail",method:"get"})}function o(t){return Object(n["a"])({url:"/playlist/subscribe",method:"get",params:t})}},"512b":function(t,e,i){"use strict";i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"e",(function(){return c})),i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return l}));var n=i("b775"),a=i("cf45");function s(t){return Object(n["a"])({url:"/artists",method:"get",params:{id:t,timestamp:(new Date).getTime()}}).then((function(t){return t.hotSongs=Object(a["d"])(t.hotSongs),t}))}function r(t){return Object(n["a"])({url:"/artist/album",method:"get",params:t})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(n["a"])({url:"/toplist/artist",method:"get",params:{type:t}})}function u(t){return Object(n["a"])({url:"/artist/mv",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/artist/sub",method:"post",params:t})}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,i){var n=i("1d80"),a=i("5899"),s="["+a+"]",r=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(t){return function(e){var i=String(n(e));return 1&t&&(i=i.replace(r,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:u(1),end:u(2),trim:u(3)}},a1a1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track-list",style:t.listStyles},[i("ContextMenu",{ref:"menu"},[i("div",{staticClass:"item-info"},[i("img",{attrs:{src:t._f("resizeImage")(t.rightClickedTrack.al.picUrl,128)}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(t.rightClickedTrack.name))]),i("div",{staticClass:"subtitle"},[t._v(t._s(t.rightClickedTrack.ar[0].name))])])]),i("hr"),i("div",{staticClass:"item",on:{click:t.play}},[t._v("Play")]),i("div",{staticClass:"item",on:{click:t.playNext}},[t._v("Play Next")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked&&t.accountLogin,expression:"!isRightClickedTrackLiked && accountLogin"}],staticClass:"item",on:{click:t.like}},[t._v(" Save to my Liked Songs ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked&&t.accountLogin,expression:"isRightClickedTrackLiked && accountLogin"}],staticClass:"item",on:{click:t.like}},[t._v(" Remove from my Liked Songs ")])]),t._l(t.tracks,(function(e){return i("TrackListItem",{key:e.id,attrs:{track:e},nativeOn:{dblclick:function(i){return t.playThisList(e.id)},contextmenu:function(i){return t.openMenu(i,e)}}})}))],2)},a=[],s=(i("4de4"),i("caad"),i("d81d"),i("a9e3"),i("2532"),i("5530")),r=i("2f62"),c=i("fefb"),u=i("eb6f"),l=i("5f87"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.track.reason},on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t.isAlbum?t._e():i("img",{class:{hover:t.focus},attrs:{src:t._f("resizeImage")(t.imgUrl,224)},on:{click:t.goToAlbum}}),t.isAlbum?i("div",{staticClass:"no"},[i("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[i("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),i("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[i("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),i("div",{staticClass:"title-and-artist"},[i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum?i("span",{staticClass:"featured"},[i("ArtistsInLine",{attrs:{artists:t.track.ar,exclude:this.$parent.albumObject.artist.name,prefix:"-"}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?i("span",{staticClass:"explicit-symbol"},[i("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():i("div",{staticClass:"artist"},[1318912===t.track.mark?i("span",{staticClass:"explicit-symbol before-artist"},[i("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),i("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),i("div")]),t.isTracklist||t.isAlbum?t._e():i("div",{staticClass:"album"},[i("router-link",{attrs:{to:"/album/"+t.track.al.id}},[t._v(t._s(t.track.al.name))]),i("div")],1),t.isTracklist?t._e():i("div",{staticClass:"actions"},[t.accountLogin?i("button",{on:{click:t.likeThisSong}},[i("svg-icon",{style:{visibility:t.focus&&!t.isLiked&&t.track.playable?"visible":"hidden"},attrs:{"icon-class":"heart"}}),i("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1):t._e()]),t.isTracklist?t._e():i("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},d=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"artist-in-line"},[t._v(" "+t._s(t.computedPrefix)+" "),t._l(t.filteredArtists,(function(e,n){return i("span",{key:e.id},[i("router-link",{attrs:{to:"/artist/"+e.id}},[t._v(t._s(e.name))]),n!==t.filteredArtists.length-1?i("span",[t._v(", ")]):t._e()],1)}))],2)},h=[],p=(i("b0c0"),{name:"ArtistInLine",props:{artists:{type:Array,required:!0},exclude:{type:String,default:""},prefix:{type:String,default:""}},computed:{filteredArtists:function(){var t=this;return this.artists.filter((function(e){return e.name!==t.exclude}))},computedPrefix:function(){return 0!==this.filteredArtists.length?this.prefix:""}}}),m=p,k=i("2877"),b=Object(k["a"])(m,f,h,!1,null,"6b13d4cd",null),v=b.exports,y=i("0c94"),g={name:"TrackListItem",components:{ArtistsInLine:v,ExplicitSymbol:y["a"]},props:{track:Object},data:function(){return{hover:!1,trackStyle:{}}},computed:{imgUrl:function(){return void 0!==this.track.al?this.track.al.picUrl:void 0!==this.track.album?this.track.album.picUrl:""},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return this.track.playable||t.push("disable"),this.isPlaying&&t.push("playing"),this.focus&&t.push("focus"),t},accountLogin:function(){return Object(l["b"])()},isMenuOpened:function(){return this.$parent.rightClickedTrack.id===this.track.id},focus:function(){return this.hover&&0===this.$parent.rightClickedTrack.id||this.isMenuOpened}},methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeASong(this.track.id)}},created:function(){-1!==this.$parent.itemWidth&&(this.trackStyle={width:this.$parent.itemWidth+"px"})}},T=g,x=(i("ebfe"),Object(k["a"])(T,o,d,!1,null,"76ceb6fe",null)),O=x.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"contextMenu",staticClass:"context-menu"},[t.showMenu?i("div",{ref:"menu",staticClass:"menu",style:{top:t.top,left:t.left},attrs:{tabindex:"-1"},on:{blur:t.closeMenu,click:t.closeMenu}},[t._t("default")],2):t._e()])},C=[],j={name:"ContextMenu",data:function(){return{showMenu:!1,top:"0px",left:"0px"}},methods:{setMenu:function(t,e){var i=window.innerHeight-this.$refs.menu.offsetHeight-25,n=window.innerWidth-this.$refs.menu.offsetWidth-25;t>i&&(t=i),e>n&&(e=n),this.top=t+"px",this.left=e+"px"},closeMenu:function(){this.showMenu=!1,this.$parent.closeMenu()},openMenu:function(t){this.showMenu=!0,this.$nextTick(function(){this.$refs.menu.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()}}},L=j,w=(i("bb64"),Object(k["a"])(L,_,C,!1,null,"d5b4842e",null)),S=w.exports,I={name:"TrackList",components:{TrackListItem:O,ContextMenu:S},props:{tracks:Array,type:String,id:Number,itemWidth:{type:Number,default:-1},dbclickTrackFunc:{type:String,default:"default"},albumObject:{type:Object,default:function(){return{artist:{name:""}}}}},data:function(){return{rightClickedTrack:{id:0,name:"",ar:[{name:""}],al:{picUrl:""}},listStyles:{}}},created:function(){"tracklist"===this.type&&(this.listStyles={display:"flex",flexWrap:"wrap"})},computed:Object(s["a"])(Object(s["a"])({},Object(r["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)},accountLogin:function(){return Object(l["b"])()}}),methods:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(r["c"])(["updateLikedSongs"])),Object(r["b"])(["nextTrack","playTrackOnListByID"])),{},{openMenu:function(t,e){e.playable&&(this.rightClickedTrack=e,this.$refs.menu.openMenu(t))},closeMenu:function(){this.rightClickedTrack={id:0,name:"",ar:[{name:""}],al:{picUrl:""}}},playThisList:function(t){"default"===this.dbclickTrackFunc?this.playThisListDefault(t):"none"===this.dbclickTrackFunc||("playTrackOnListByID"===this.dbclickTrackFunc?this.playTrackOnListByID(t):"playPlaylistByID"===this.dbclickTrackFunc&&Object(u["e"])(this.id,t))},playThisListDefault:function(t){if("playlist"===this.type)Object(u["e"])(this.id,t);else if("album"===this.type)Object(u["c"])(this.id,t);else if("tracklist"===this.type){var e=this.tracks.map((function(t){return t.id}));Object(u["b"])(e,this.tracks[0].ar[0].id,"artist",t)}},play:function(){Object(u["a"])(this.clickTrack.id,!0)},playNext:function(){Object(u["a"])(this.clickTrack.id)},like:function(){this.likeASong(this.rightClickedTrack.id)},likeASong:function(t){var e=this,i=!0,n=this.liked.songs;n.includes(t)&&(i=!1),Object(c["d"])({id:t,like:i}).then((function(a){200===a.code&&(!1===i?e.updateLikedSongs(n.filter((function(e){return e!==t}))):(n.push(t),e.updateLikedSongs(n)))}))}})},A=I,N=Object(k["a"])(A,n,a,!1,null,"4f85b3b4",null);e["a"]=N.exports},a7b6:function(t,e,i){},a9e3:function(t,e,i){"use strict";var n=i("83ab"),a=i("da84"),s=i("94ca"),r=i("6eeb"),c=i("5135"),u=i("c6b6"),l=i("7156"),o=i("c04e"),d=i("d039"),f=i("7c73"),h=i("241c").f,p=i("06cf").f,m=i("9bf2").f,k=i("58a8").trim,b="Number",v=a[b],y=v.prototype,g=u(f(y))==b,T=function(t){var e,i,n,a,s,r,c,u,l=o(t,!1);if("string"==typeof l&&l.length>2)if(l=k(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+l}for(s=l.slice(2),r=s.length,c=0;c<r;c++)if(u=s.charCodeAt(c),u<48||u>a)return NaN;return parseInt(s,n)}return+l};if(s(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var x,O=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof O&&(g?d((function(){y.valueOf.call(i)})):u(i)!=b)?l(new v(T(e)),i,O):T(e)},_=n?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;_.length>C;C++)c(v,x=_[C])&&!c(O,x)&&m(O,x,p(v,x));O.prototype=y,y.constructor=O,r(a,b,O)}},bb64:function(t,e,i){"use strict";var n=i("a7b6"),a=i.n(n);a.a},e498:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return c})),i.d(e,"c",(function(){return u}));var n=i("b775"),a=i("cf45");function s(t){return Object(n["a"])({url:"/album",method:"get",params:{id:t}}).then((function(t){return t.songs=Object(a["d"])(t.songs),t}))}function r(t){return Object(n["a"])({url:"/album/new",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/album/detail/dynamic",method:"get",params:{id:t,timestamp:(new Date).getTime()}})}function u(t){return Object(n["a"])({url:"/album/sub",method:"post",params:t})}},eb6f:function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return u})),i.d(e,"e",(function(){return l})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return d}));i("d81d");var n=i("4360"),a=i("e498"),s=i("1e9a"),r=i("512b");function c(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"first",s=t.map((function(t,e){return{sort:e,id:t}}));n["a"].commit("updatePlayerList",s),n["a"].state.player.shuffle&&n["a"].commit("shuffleTheListBeforePlay"),"first"===a?n["a"].dispatch("playFirstTrackOnList"):n["a"].dispatch("playTrackOnListByID",a),n["a"].commit("updateListInfo",{type:i,id:e})}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(a["b"])(t).then((function(i){var n=i.songs.map((function(t){return t.id}));c(n,t,"album",e)}))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(s["a"])(t,i).then((function(i){var n=i.playlist.trackIds.map((function(t){return t.id}));c(n,t,"playlist",e)}))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(r["c"])(t).then((function(i){c(i.hotSongs,t,"artist",e)}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={sort:0,id:t};n["a"].commit("appendTrackToPlayerList",{track:i,playNext:e}),e&&n["a"].dispatch("nextTrack",!0)}},ebfe:function(t,e,i){"use strict";var n=i("0a35"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-74ddd339.6d91541e.js.map