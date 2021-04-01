<template>
  <v-app> 
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon 
      v-if="$vuetify.breakpoint.width <= 950" 
      @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require(`./assets/${info.logo}`)"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>{{language.title}}</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.width > 950">
        <v-btn
          to="/"
          text
        >
          <span class="mr-2">{{language.home}}</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/datasets"
          text
        >
          <span class="mr-2">{{language.datasets}}</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-btn
          to="/contact"
          text
        >
          <span class="mr-2">{{language.contact}}</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
        <v-menu
          rounded="lg"
          offset-y
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              color="primary"
              class="white--text ma-5"
              v-bind="attrs"
              v-on="on"
            >
              {{languageLoaded}} 
              <v-icon size="24px">
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in languages"
              :key="item"
              link
            >
              <v-list-item-title 
                @click="changeLanguage(item)" 
                v-text="item">
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="primary text--lighten-1"
          >
            <v-list-item to="/">
              <v-list-item-title>{{language.home}}</v-list-item-title>
            </v-list-item>

            <v-list-item to="/datasets">
              <v-list-item-title>{{language.datasets}}</v-list-item-title>
            </v-list-item>

            <v-list-item to="/contact">
              <v-list-item-title>{{language.contact}}</v-list-item-title>
            </v-list-item>
            <v-list-group
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{languageLoaded}}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="item in languages"
                :key="item"
                link
              >
                <v-list-item-title
                  @click="changeLanguage(item)"
                  v-text="item"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import info from "./assets/info.json";
export default {
  name: 'App',
  components: {
      Footer
  },
  data: () => ({
    items: [...Array(4)].map((_, i) => `Item ${i}`),
    language: require('./assets/languages/english.json'),
    languageLoaded: 'English',
    languages: [],
    drawer: false,
    group: null,
    info
    //
  }),
  mounted() {
    this.languages = require.context('./assets/languages/', false, /\.json$/).keys()
                      .map(a => {return a.split('.')[1]})
                      .map(a => {return a.split('/')[1]})
                      .map(a => {return a.charAt(0).toUpperCase() + a.slice(1)})
  },
  methods: {
    changeLanguage(name) {
      this.languageLoaded = name;
      name = name.charAt(0).toLowerCase() + name.slice(1)
      this.language = require(`./assets/languages/${name}.json`)
    }
  }
};
</script>
<style>