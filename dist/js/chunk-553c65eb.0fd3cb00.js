(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553c65eb"],{"0bbe":function(t,i,e){"use strict";var s=e("5fe3"),n=e.n(s);n.a},"0c94":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("svg-icon",{style:t.svgStyle,attrs:{"icon-class":"explicit"}})},n=[],a=(e("a9e3"),e("0032")),r={name:"ExplicitSymbol",components:{SvgIcon:a["a"]},props:{size:{type:Number,default:16}},data:function(){return{svgStyle:{}}},created:function(){this.svgStyle={height:this.size+"px",width:this.size+"px"}}},c=r,l=e("2877"),u=Object(l["a"])(c,s,n,!1,null,"7e2a888e",null);i["a"]=u.exports},"1e9a":function(t,i,e){"use strict";e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return r})),e.d(i,"b",(function(){return c})),e.d(i,"e",(function(){return l})),e.d(i,"f",(function(){return u})),e.d(i,"d",(function(){return o}));var s=e("b775"),n=e("cf45");function a(t){return Object(s["a"])({url:"/personalized",method:"get",params:t})}function r(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={id:t};return i&&(e.timestamp=(new Date).getTime()),Object(s["a"])({url:"/playlist/detail",method:"get",params:e}).then((function(t){return t.playlist.tracks=Object(n["a"])(t.playlist.tracks),t}))}function c(t){return Object(s["a"])({url:"/top/playlist/highquality",method:"get",params:t})}function l(t){return Object(s["a"])({url:"/top/playlist",method:"get",params:t})}function u(){return Object(s["a"])({url:"/toplist/detail",method:"get"})}function o(t){return Object(s["a"])({url:"/playlist/subscribe",method:"get",params:t})}},"512b":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"d",(function(){return c})),e.d(i,"a",(function(){return l}));var s=e("b775"),n=e("cf45");function a(t){return Object(s["a"])({url:"/artists",method:"get",params:{id:t}}).then((function(t){return t.hotSongs=Object(n["a"])(t.hotSongs),t}))}function r(t){return Object(s["a"])({url:"/artist/album",method:"get",params:t})}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(s["a"])({url:"/toplist/artist",method:"get",params:{type:t}})}function l(t){return Object(s["a"])({url:"/artist/mv",method:"get",params:{id:t}})}},5899:function(t,i){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,i,e){var s=e("1d80"),n=e("5899"),a="["+n+"]",r=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t){return function(i){var e=String(s(i));return 1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:l(1),end:l(2),trim:l(3)}},"5fe3":function(t,i,e){},"831a":function(t,i,e){},a1a1:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track-list",style:t.listStyles},[e("ContextMenu",{ref:"menu"},[e("div",{staticClass:"item",on:{click:t.play}},[t._v("Play")]),e("div",{staticClass:"item",on:{click:t.playNext}},[t._v("Play Next")]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isRightClickedTrackLiked,expression:"!isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" Save to my Liked Songs ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isRightClickedTrackLiked,expression:"isRightClickedTrackLiked"}],staticClass:"item",on:{click:t.like}},[t._v(" Remove from my Liked Songs ")])]),t._l(t.tracks,(function(i){return e("TrackListItem",{key:i.id,attrs:{track:i},nativeOn:{dblclick:function(e){return t.playThisList(i.id)},contextmenu:function(e){return t.openMenu(e,i)}}})}))],2)},n=[],a=(e("4de4"),e("caad"),e("d81d"),e("a9e3"),e("2532"),e("5530")),r=e("2f62"),c=e("fefb"),l=e("eb6f"),u=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"track",class:t.trackClass,style:t.trackStyle,attrs:{title:t.track.reason},on:{mouseover:function(i){t.focus=!0},mouseleave:function(i){t.focus=!1}}},[t.isAlbum?t._e():e("img",{class:{hover:t.focus},attrs:{src:t._f("resizeImage")(t.imgUrl,224)},on:{click:t.goToAlbum}}),t.isAlbum?e("div",{staticClass:"no"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.focus&&t.track.playable&&!t.isPlaying,expression:"focus && track.playable && !isPlaying"}],on:{click:t.playTrack}},[e("svg-icon",{staticStyle:{height:"14px",width:"14px"},attrs:{"icon-class":"play"}})],1),e("span",{directives:[{name:"show",rawName:"v-show",value:(!t.focus||!t.track.playable)&&!t.isPlaying,expression:"(!focus || !track.playable) && !isPlaying"}]},[t._v(t._s(t.track.no))]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.isPlaying,expression:"isPlaying"}]},[e("svg-icon",{staticStyle:{height:"16px",width:"16px"},attrs:{"icon-class":"volume"}})],1)]):t._e(),e("div",{staticClass:"title-and-artist"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.track.name)+" "),t.isAlbum&&t.track.ar.length>1?e("span",{staticClass:"featured"},[t._v(" - "),e("ArtistsInLine",{attrs:{artists:t.track.ar,showFirstArtist:!1}})],1):t._e(),t.isAlbum&&1318912===t.track.mark?e("span",{staticClass:"explicit-symbol"},[e("ExplicitSymbol")],1):t._e()]),t.isAlbum?t._e():e("div",{staticClass:"artist"},[1318912===t.track.mark?e("span",{staticClass:"explicit-symbol before-artist"},[e("ExplicitSymbol",{attrs:{size:15}})],1):t._e(),e("ArtistsInLine",{attrs:{artists:t.artists}})],1)]),e("div")]),t.isTracklist||t.isAlbum?t._e():e("div",{staticClass:"album"},[e("router-link",{attrs:{to:"/album/"+t.track.al.id}},[t._v(t._s(t.track.al.name))]),e("div")],1),t.isTracklist?t._e():e("div",{staticClass:"actions"},[t.isLoggedIn?e("button",{on:{click:t.likeThisSong}},[e("svg-icon",{style:{visibility:t.focus&&!t.isLiked&&t.track.playable?"visible":"hidden"},attrs:{"icon-class":"heart"}}),e("svg-icon",{directives:[{name:"show",rawName:"v-show",value:t.isLiked,expression:"isLiked"}],attrs:{"icon-class":"heart-solid"}})],1):t._e()]),t.isTracklist?t._e():e("div",{staticClass:"time"},[t._v(" "+t._s(t._f("formatTime")(t.track.dt))+" ")])])},o=[],d=e("5f87"),f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("span",{staticClass:"artist-in-line"},t._l(t.slicedArtists,(function(i,s){return e("span",{key:i.id},[e("router-link",{attrs:{to:"/artist/"+i.id}},[t._v(t._s(i.name))]),s!==t.slicedArtists.length-1?e("span",[t._v(", ")]):t._e()],1)})),0)},h=[],p=(e("fb6a"),{name:"ArtistInLine",props:{artists:{type:Array,required:!0},showFirstArtist:{type:Boolean,default:!0}},computed:{slicedArtists:function(){return this.showFirstArtist?this.artists:this.artists.slice(1,this.artists.length)}}}),k=p,m=e("2877"),b=Object(m["a"])(k,f,h,!1,null,"f2bd61ce",null),v=b.exports,y=e("0c94"),g={name:"TrackListItem",components:{ArtistsInLine:v,ExplicitSymbol:y["a"]},props:{track:Object},data:function(){return{focus:!1,trackStyle:{}}},computed:{imgUrl:function(){return void 0!==this.track.al?this.track.al.picUrl:void 0!==this.track.album?this.track.album.picUrl:""},artists:function(){return void 0!==this.track.ar?this.track.ar:void 0!==this.track.artists?this.track.artists:[]},type:function(){return this.$parent.type},isAlbum:function(){return"album"===this.type},isTracklist:function(){return"tracklist"===this.type},isPlaylist:function(){return"playlist"===this.type},isLiked:function(){return this.$parent.liked.songs.includes(this.track.id)},isPlaying:function(){return this.$store.state.player.currentTrack.id===this.track.id},trackClass:function(){var t=[this.type];return this.track.playable||t.push("disable"),this.isPlaying&&t.push("playing"),t},isLoggedIn:function(){return Object(d["b"])()}},methods:{goToAlbum:function(){this.$router.push({path:"/album/"+this.track.al.id})},playTrack:function(){this.$parent.playThisList(this.track.id)},likeThisSong:function(){this.$parent.likeASong(this.track.id)}},created:function(){-1!==this.$parent.itemWidth&&(this.trackStyle={width:this.$parent.itemWidth+"px"})}},T=g,_=(e("e75e"),Object(m["a"])(T,u,o,!1,null,"b3ec4008",null)),x=_.exports,O=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"context-menu"},[t.showMenu?e("div",{ref:"menu",staticClass:"menu",style:{top:t.top,left:t.left},attrs:{tabindex:"-1"},on:{blur:t.closeMenu,click:t.closeMenu}},[t._t("default")],2):t._e()])},w=[],L={name:"ContextMenu",data:function(){return{showMenu:!1,top:"0px",left:"0px"}},methods:{setMenu:function(t,i){var e=window.innerHeight-this.$refs.menu.offsetHeight-25,s=window.innerWidth-this.$refs.menu.offsetWidth-25;t>e&&(t=e),i>s&&(i=s),this.top=t+"px",this.left=i+"px"},closeMenu:function(){this.showMenu=!1},openMenu:function(t){this.showMenu=!0,this.$nextTick(function(){this.$refs.menu.focus(),this.setMenu(t.y,t.x)}.bind(this)),t.preventDefault()}}},j=L,C=(e("0bbe"),Object(m["a"])(j,O,w,!1,null,"724bc728",null)),S=C.exports,I={name:"TrackList",components:{TrackListItem:x,ContextMenu:S},props:{tracks:Array,type:String,id:Number,itemWidth:{type:Number,default:-1},dbclickTrackFunc:{type:String,default:"default"}},data:function(){return{rightClickedTrack:null,listStyles:{}}},created:function(){"tracklist"===this.type&&(this.listStyles={display:"flex",flexWrap:"wrap"})},computed:Object(a["a"])(Object(a["a"])({},Object(r["d"])(["liked"])),{},{isRightClickedTrackLiked:function(){var t;return this.liked.songs.includes(null===(t=this.rightClickedTrack)||void 0===t?void 0:t.id)}}),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["c"])(["updateLikedSongs"])),Object(r["b"])(["nextTrack","playTrackOnListByID"])),{},{openMenu:function(t,i){i.playable&&(this.rightClickedTrack=i,this.$refs.menu.openMenu(t))},playThisList:function(t){"default"===this.dbclickTrackFunc?this.playThisListDefault(t):"none"===this.dbclickTrackFunc||("playTrackOnListByID"===this.dbclickTrackFunc?this.playTrackOnListByID(t):"playPlaylistByID"===this.dbclickTrackFunc&&Object(l["e"])(this.id,t))},playThisListDefault:function(t){if("playlist"===this.type)Object(l["e"])(this.id,t);else if("album"===this.type)Object(l["c"])(this.id,t);else if("tracklist"===this.type){var i=this.tracks.map((function(t){return t.id}));Object(l["b"])(i,this.tracks[0].ar[0].id,"artist",t)}},play:function(){Object(l["a"])(this.clickTrack.id,!0)},playNext:function(){Object(l["a"])(this.clickTrack.id)},like:function(){this.likeASong(this.rightClickedTrack.id)},likeASong:function(t){var i=this,e=!0,s=this.liked.songs;s.includes(t)&&(e=!1),Object(c["d"])({id:t,like:e}).then((function(n){200===n.code&&(!1===e?i.updateLikedSongs(s.filter((function(i){return i!==t}))):(s.push(t),i.updateLikedSongs(s)))}))}})},A=I,N=Object(m["a"])(A,s,n,!1,null,"74fa0eb4",null);i["a"]=N.exports},a9e3:function(t,i,e){"use strict";var s=e("83ab"),n=e("da84"),a=e("94ca"),r=e("6eeb"),c=e("5135"),l=e("c6b6"),u=e("7156"),o=e("c04e"),d=e("d039"),f=e("7c73"),h=e("241c").f,p=e("06cf").f,k=e("9bf2").f,m=e("58a8").trim,b="Number",v=n[b],y=v.prototype,g=l(f(y))==b,T=function(t){var i,e,s,n,a,r,c,l,u=o(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),i=u.charCodeAt(0),43===i||45===i){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===i){switch(u.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+u}for(a=u.slice(2),r=a.length,c=0;c<r;c++)if(l=a.charCodeAt(c),l<48||l>n)return NaN;return parseInt(a,s)}return+u};if(a(b,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,x=function(t){var i=arguments.length<1?0:t,e=this;return e instanceof x&&(g?d((function(){y.valueOf.call(e)})):l(e)!=b)?u(new v(T(i)),e,x):T(i)},O=s?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;O.length>w;w++)c(v,_=O[w])&&!c(x,_)&&k(x,_,p(v,_));x.prototype=y,y.constructor=x,r(n,b,x)}},e498:function(t,i,e){"use strict";e.d(i,"a",(function(){return a})),e.d(i,"b",(function(){return r}));var s=e("b775"),n=e("cf45");function a(t){return Object(s["a"])({url:"/album",method:"get",params:{id:t}}).then((function(t){return t.songs=Object(n["a"])(t.songs),t}))}function r(t){return Object(s["a"])({url:"/album/new",method:"get",params:t})}},e75e:function(t,i,e){"use strict";var s=e("831a"),n=e.n(s);n.a},eb6f:function(t,i,e){"use strict";e.d(i,"b",(function(){return c})),e.d(i,"c",(function(){return l})),e.d(i,"e",(function(){return u})),e.d(i,"d",(function(){return o})),e.d(i,"a",(function(){return d}));e("d81d");var s=e("4360"),n=e("e498"),a=e("1e9a"),r=e("512b");function c(t,i,e){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"first",a=t.map((function(t,i){return{sort:i,id:t}}));s["a"].commit("updatePlayerList",a),s["a"].state.player.shuffle&&s["a"].commit("shuffleTheListBeforePlay"),"first"===n?s["a"].dispatch("playFirstTrackOnList"):s["a"].dispatch("playTrackOnListByID",n),s["a"].commit("updateListInfo",{type:e,id:i})}function l(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(n["a"])(t).then((function(e){var s=e.songs.map((function(t){return t.id}));c(s,t,"album",i)}))}function u(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a["a"])(t,e).then((function(e){var s=e.playlist.trackIds.map((function(t){return t.id}));c(s,t,"playlist",i)}))}function o(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"first";Object(r["b"])(t).then((function(e){c(e.hotSongs,t,"artist",i)}))}function d(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e={sort:0,id:t};s["a"].commit("appendTrackToPlayerList",{track:e,playNext:i}),i&&s["a"].dispatch("nextTrack",!0)}}}]);
//# sourceMappingURL=chunk-553c65eb.0fd3cb00.js.map