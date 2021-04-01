<template>
  <v-container style="max-width: 1200px;">
    <v-row class="text-center">
      <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="require(`../assets/${info.header}`)"
                max-height="400"
              >
                <v-expand-transition>
                  <div
                    v-if="!hover"
                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    {{getText('title')}}
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          sm="8"
          lg="8"
      >
        <div class="headline text-h4 font-weight-bold black--text mb-1 text-center">
          {{getText('subtitle')}}
        </div>
        <div class="subtitle-1 text-subtitle-1 black--text text-center">
          {{getText('description')}}  
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >

        <v-img
          :src="require(`../assets/${info.about}`)"
          aspect-ratio="1.7"
          contain
        ></v-img>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.mission}`)"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  {{getText('missionDescription')}}
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('mission')}}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.objective}`)"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  {{getText('objectiveDescription')}}
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('objective')}}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.purpose}`)"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  {{getText('purposeDescription')}}
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative;"
            >
              <!-- <div class="font-weight-light grey--text title mb-2">
                For the perfect meal
              </div> -->
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('purpose')}}
              </h3>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col
          cols="12"
          sm="12"
          lg="12"
      >
        <v-sheet
          rounded="lg"
          elevation="1"
        >
          <v-carousel hide-delimiters cycle>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
      <!-- <v-col
          cols="12"
          sm="12"
          lg="4"
      >
        <v-sheet
          rounded="lg"
          elevation="1"
        >
          <h1>SOCIAL MEDIA</h1>
        </v-sheet>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import info from "../assets/info.json";
export default {
  name: 'HelloWorld',
  data: () => ({
    items: [],
    info
  }),
  mounted() {
    this.items = info.carousel.map(a => {
      return {src: require(`../assets/${a}`)}
    })
  },
  methods: {
    getText: function(key) {
      return this.$parent.$parent.$parent.$parent.language[key];
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) .v-img {
  opacity: 0.6;
 }
</style>