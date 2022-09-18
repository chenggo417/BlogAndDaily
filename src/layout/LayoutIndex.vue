<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in menuList"
            :key="item + '' + index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <div class="content-wrapper">
        <div class="main-content-wrapper">
          <router-view/>
        </div>
        <div class="side-content-wrapper">
          <div class="side-bar">
            <v-navigation-drawer
              width="100%"
              floating
              permanent
            >
              <v-list
                dense
                rounded
              >
                <v-list-item
                  v-for="item in navList"
                  :key="item.title"
                  link
                >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'LayoutIndex',
  data: () => ({
    menuList: [
      {
        title: '退出登录'
      }
    ],
    navList: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'About', icon: 'mdi-forum' }
    ]
  })
})
</script>

<style scoped lang='less'>
@media (min-width: 1904px) {
  .container {
    max-width: 1600px;
  }
}

.content-wrapper {
  width: 1320px;
  display: flex;
  min-height: 700px;
  min-width: 1108px;
  padding-bottom: 32px;
  margin: 10px auto 0;
  // @TODO
  background-color: #cccccc;

  .main-content-wrapper {
    background-color: #bbb;
    flex: 1;
    margin-right: 8px;
    box-sizing: border-box;
  }

  .side-content-wrapper {
    background-color: #f2f2f2;
    width: 338px;
    box-sizing: border-box;

    .side-bar {
      background-color: #f0f0f0;
      position: sticky;
      width: 100%;
      top: 74px;
    }
  }
}

.side-wrapper {
  background-color: #f5f5f5;
  max-height: calc(100vh - 100px);
}

@media screen and (max-width: 1366px) {
  .content-wrapper {
    width: 1108px;
  }
}

</style>
