<template>
  <div class="explore">
    <h1>{{ $t("explore.explore") }}</h1>
    <div class="buttons">
      <div
        class="button"
        v-for="cat in settings.playlistCategories.filter((p) => p.enable)"
        :key="cat.name"
        :class="{ active: cat.name === activeCategory && !showCatOptions }"
        @click="goToCategory(cat.name)"
      >
        {{ cat.name }}
      </div>
      <div
        class="button more"
        :class="{ active: showCatOptions }"
        @click="showCatOptions = !showCatOptions"
      >
        <svg-icon icon-class="more"></svg-icon>
      </div>
    </div>

    <div class="panel" v-show="showCatOptions">
      <div class="big-cat" v-for="bigCat in allBigCats" :key="bigCat">
        <div class="name">{{ bigCat }}</div>
        <div class="cats">
          <div
            class="cat"
            :class="{ active: cat.enable }"
            v-for="cat in getCatsByBigCat(bigCat)"
            :key="cat.name"
            @click="toggleCat(cat.name)"
            ><span>{{ cat.name }}</span></div
          >
        </div>
      </div>
    </div>

    <div class="playlists">
      <CoverRow
        type="playlist"
        :items="playlists"
        :subText="subText"
        :showPlayButton="true"
        :showPlayCount="activeCategory !== '排行榜' ? true : false"
        :imageSize="activeCategory !== '排行榜' ? 512 : 1024"
      />
    </div>
    <div
      class="load-more"
      v-show="['推荐歌单', '排行榜'].includes(activeCategory) === false"
    >
      <ButtonTwoTone
        v-show="showLoadMoreButton && hasMore"
        @click.native="getPlaylist"
        color="grey"
        :loading="loadingMore"
        >{{ $t("explore.loadMore") }}</ButtonTwoTone
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import NProgress from "nprogress";
import {
  topPlaylist,
  highQualityPlaylist,
  recommendPlaylist,
  toplistsDetail,
} from "@/api/playlist";

import ButtonTwoTone from "@/components/ButtonTwoTone.vue";
import CoverRow from "@/components/CoverRow.vue";
import SvgIcon from "@/components/SvgIcon.vue";

export default {
  name: "Explore",
  components: {
    CoverRow,
    ButtonTwoTone,
    SvgIcon,
  },
  data() {
    return {
      show: false,
      playlists: [],
      activeCategory: "全部",
      loadingMore: false,
      showLoadMoreButton: false,
      hasMore: true,
      allBigCats: ["语种", "风格", "场景", "情感", "主题"],
      showCatOptions: false,
    };
  },
  computed: {
    ...mapState(["settings"]),
    subText() {
      if (this.activeCategory === "排行榜") return "updateFrequency";
      if (this.activeCategory === "推荐歌单") return "copywriter";
      return "none";
    },
  },
  methods: {
    ...mapMutations(["togglePlaylistCategory"]),
    loadData() {
      if (!this.show) NProgress.start();
      this.activeCategory =
        this.$route.query.category === undefined
          ? "全部"
          : this.$route.query.category;
      this.getPlaylist();
    },
    goToCategory(Category) {
      if (this.showCatOptions) return;
      this.$router.push({ path: "/explore?category=" + Category });
    },
    updatePlaylist(playlists) {
      this.playlists.push(...playlists);
      this.loadingMore = false;
      this.showLoadMoreButton = true;
      NProgress.done();
      this.show = true;
    },
    getPlaylist() {
      this.loadingMore = true;
      if (this.activeCategory === "推荐歌单") {
        return this.getRecommendPlayList();
      }
      if (this.activeCategory === "精品歌单") {
        return this.getHighQualityPlaylist();
      }
      if (this.activeCategory === "排行榜") {
        return this.getTopLists();
      }
      return this.getTopPlayList();
    },
    getRecommendPlayList() {
      recommendPlaylist({ limit: 100 }).then((data) => {
        this.playlists = [];
        this.updatePlaylist(data.result);
      });
    },
    getHighQualityPlaylist() {
      let playlists = this.playlists;
      let before =
        playlists.length !== 0 ? playlists[playlists.length - 1].updateTime : 0;
      highQualityPlaylist({ limit: 50, before }).then((data) => {
        this.updatePlaylist(data.playlists);
        this.hasMore = data.more;
      });
    },
    getTopLists() {
      toplistsDetail().then((data) => {
        this.playlists = [];
        this.updatePlaylist(data.list);
      });
    },
    getTopPlayList() {
      topPlaylist({
        cat: this.activeCategory,
        offset: this.playlists.length,
      }).then((data) => {
        this.updatePlaylist(data.playlists);
        this.hasMore = data.more;
      });
    },
    getCatsByBigCat(name) {
      return this.settings.playlistCategories.filter((c) => c.bigCat === name);
    },
    toggleCat(name) {
      this.togglePlaylistCategory(name);
    },
  },
  activated() {
    this.loadData();
  },
  beforeRouteUpdate(to, from, next) {
    NProgress.start();
    this.showLoadMoreButton = false;
    this.hasMore = true;
    this.playlists = [];
    this.offset = 1;
    this.activeCategory = to.query.category;
    this.getPlaylist();
    next();
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-text);
  font-size: 56px;
}
.buttons {
  display: flex;
  flex-wrap: wrap;
}
.button {
  user-select: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 10px 16px 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  border-radius: 10px;
  background-color: var(--color-secondary-bg);
  color: var(--color-secondary);
  transition: 0.2s;

  &:hover {
    background-color: var(--color-primary-bg);
    color: var(--color-primary);
  }
}
.button.active {
  background-color: var(--color-primary-bg);
  color: var(--color-primary);
}
.panel {
  margin-top: 10px;
  background: var(--color-secondary-bg);
  border-radius: 10px;
  padding: 8px;
  color: var(--color-text);

  .big-cat {
    display: flex;
    margin-bottom: 32px;
  }

  .name {
    font-size: 24px;
    font-weight: 700;
    opacity: 0.68;
    margin-left: 24px;
    min-width: 54px;
    height: 26px;
    margin-top: 8px;
  }
  .cats {
    margin-left: 24px;
    display: flex;
    flex-wrap: wrap;
  }
  .cat {
    user-select: none;
    margin: 4px 0px 0 0;
    display: flex;
    // justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    transition: 0.2s;
    min-width: 98px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 6px 12px;
      height: 26px;
      border-radius: 10px;
      opacity: 0.88;
      &:hover {
        opacity: 1;
        background-color: var(--color-primary-bg);
        color: var(--color-primary);
      }
    }
  }
  .cat.active {
    color: var(--color-primary);
  }
}

.playlists {
  margin-top: 24px;
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.button.more {
  .svg-icon {
    height: 24px;
    width: 24px;
  }
}
</style>
