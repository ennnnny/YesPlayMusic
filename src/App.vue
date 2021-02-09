<template>
  <div id="app">
    <Navbar ref="navbar" />
    <main v-show="!this.$store.state.showLyrics">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </main>
    <transition name="slide-up">
      <Player
        v-if="this.$store.state.player.enabled"
        ref="player"
        v-show="showPlayer"
    /></transition>
    <Toast />
    <ModalAddTrackToPlaylist v-if="isAccountLoggedIn" />
    <ModalNewPlaylist v-if="isAccountLoggedIn" />
    <transition name="slide-up" v-if="this.$store.state.player.enabled">
      <Lyrics v-show="this.$store.state.showLyrics" />
    </transition>
  </div>
</template>

<script>
import ModalAddTrackToPlaylist from "./components/ModalAddTrackToPlaylist.vue";
import ModalNewPlaylist from "./components/ModalNewPlaylist.vue";
import Navbar from "./components/Navbar.vue";
import Player from "./components/Player.vue";
import Toast from "./components/Toast.vue";
import { ipcRenderer } from "./electron/ipcRenderer";
import { isAccountLoggedIn } from "@/utils/auth";
import Lyrics from "./views/lyrics.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Player,
    Toast,
    ModalAddTrackToPlaylist,
    ModalNewPlaylist,
    Lyrics,
  },
  data() {
    return {
      isElectron: process.env.IS_ELECTRON, // true || undefined
    };
  },
  computed: {
    isAccountLoggedIn() {
      return isAccountLoggedIn();
    },
    showPlayer() {
      return (
        ["mv", "loginUsername", "login", "loginAccount"].includes(
          this.$route.name
        ) === false
      );
    },
  },
  created() {
    if (this.isElectron) {
      ipcRenderer(this);
    }
    window.addEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(e) {
      if (e.code === "Space") {
        if (e.target.tagName === "INPUT") return false;
        if (this.$route.name === "mv") return false;
        e.preventDefault();
        this.$refs.player.play();
      }
    },
  },
};
</script>

<style lang="scss">
//@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&display=swap");

/* barlow-regular */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: regular;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-regular.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.woff") format("woff"),
    /* Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.svg#Barlow")
      format("svg"); /* Legacy iOS */
}

/* barlow-regular */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: regular;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-regular.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.woff") format("woff"),
    /* Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-regular.svg#Barlow")
      format("svg"); /* Legacy iOS */
}

/* barlow-500 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-500.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-500.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-500.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-500.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-600 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-600.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-600.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-600.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-600.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-600.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-700 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-700.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-700.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-700.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-700.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-800 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-800.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-800.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-800.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-800.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-800.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-900 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 900;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-900.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-900.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-900.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-900.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-900.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-500 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 500;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-500.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-500.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-500.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-500.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-500.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-600 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-600.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-600.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-600.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-600.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-600.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-600.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-700 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-700.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-700.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-700.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-700.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-700.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-800 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 800;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-800.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-800.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-800.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-800.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-800.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-800.svg#Barlow") format("svg"); /* Legacy iOS */
}

/* barlow-900 */
@font-face {
  font-family: "Barlow";
  font-style: normal;
  font-weight: 900;
  src: url("//lib.baomitu.com/fonts/barlow/barlow-900.eot"); /* IE9 Compat Modes */
  src: local("Barlow"), local("Barlow-Normal"),
    url("//lib.baomitu.com/fonts/barlow/barlow-900.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("//lib.baomitu.com/fonts/barlow/barlow-900.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//lib.baomitu.com/fonts/barlow/barlow-900.woff") format("woff"),
    /* Modern Browsers */ url("//lib.baomitu.com/fonts/barlow/barlow-900.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//lib.baomitu.com/fonts/barlow/barlow-900.svg#Barlow") format("svg"); /* Legacy iOS */
}

:root {
  --color-body-bg: #ffffff;
  --color-text: #000;
  --color-primary: #335eea;
  --color-primary-bg: #eaeffd;
  --color-secondary: #7a7a7b;
  --color-secondary-bg: #f5f5f7;
  --color-navbar-bg: rgba(255, 255, 255, 0.86);
  --color-primary-bg-for-transparent: rgba(189, 207, 255, 0.28);
  --color-secondary-bg-for-transparent: rgba(209, 209, 214, 0.28);
}

[data-theme="dark"] {
  --color-body-bg: #222222;
  --color-text: #ffffff;
  --color-primary: #335eea;
  --color-primary-bg: #bbcdff;
  --color-secondary: #7a7a7b;
  --color-secondary-bg: #323232;
  --color-navbar-bg: rgba(34, 34, 34, 0.86);
  --color-primary-bg-for-transparent: rgba(255, 255, 255, 0.12);
  --color-secondary-bg-for-transparent: rgba(255, 255, 255, 0.08);
}

#app {
  width: 100%;
  transition: all 0.4s;
}
#app,
input {
  font-family: "Barlow", -apple-system, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC,
    WenQuanYi Micro Hei, sans-serif;
}
body {
  background-color: var(--color-body-bg);
}

html {
  overflow-y: overlay;
  min-width: 768px;
}

main {
  margin-top: 84px;
  margin-bottom: 96px;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}

@media (max-width: 1336px) {
  main {
    padding: 0 5vw;
  }
}

select,
button {
  font-family: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
input,
button {
  &:focus {
    outline: none;
  }
}
a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

/* Let's get this party started */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
  border-left: 1px solid rgba(128, 128, 128, 0.18);
  background: var(--color-body-bg);
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(128, 128, 128, 0.38);
}

[data-theme="dark"] ::-webkit-scrollbar-thumb {
  background: var(--color-secondary-bg);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s;
}
.slide-up-enter, .slide-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}

[data-electron="yes"] {
  button,
  .navigation-links a,
  .playlist-info .description {
    cursor: default !important;
  }
}
</style>
