<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        app
      >
        <v-list dense class="pt-0">
          <v-list-tile to="/">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>トップページ</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile to="/category/hoge">
            <v-list-tile-action>
              <v-icon>whatshot</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>カテゴリとかそういうの</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile to="/category/hoge">
            <v-list-tile-action>
              <v-icon>star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>カテゴリとかそういうの</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-navigation-drawer>

      <v-toolbar color="primary" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
        <v-toolbar-title>ここにタイトル？</v-toolbar-title>
        <v-spacer/>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/search">
            なんか検索ボタンとか？
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <transition name="fade" mode="out-in" appear>
          <nuxt/>
        </transition>
      </v-content>

      <v-footer color="primary" dark>
        <v-flex xs12 py-3 text-xs-center white--text>
          &copy; 2018 <strong>mewko</strong>
        </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active {
  transition: all 0.2s;
}

.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter {
  // transform: translateX(20px);
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}
</style>
