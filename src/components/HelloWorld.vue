<template>
  <v-container style="max-width: 1200px;">
    <v-row class="text-center">
            <v-card
              elevation="12"
            >
              <v-img
                :src="require(`../assets/${info.header}`)"
                max-height="400"
                min-width="100%"
              >
              </v-img>
            </v-card>
    </v-row>
    <v-row>
      <v-col class="text-center mt-5">

      <h1>{{getText('welcomeText')}}</h1>

      <v-divider light></v-divider>
      </v-col>

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
    <v-row>
      <v-col class="text-center mt-5">

      <h1>{{getText('objectivesText')}}</h1>

      <v-divider light></v-divider>
      </v-col>

    </v-row>
    <v-row class="text-center">
      <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.mission}`)"
            >
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative; cursor: pointer;"
              @click="revealMission = !revealMission"
            >
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('mission')}}
              </h3>
            </v-card-text>
          </v-card>
      </v-col>
      
      <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.objective}`)"
            >
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative; cursor: pointer;"
              @click="revealObjective = !revealObjective"
            >
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('objective')}}
              </h3>
            </v-card-text>
          </v-card>
      </v-col>
      <v-col cols="12" sm="4">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="require(`../assets/${info.purpose}`)"
            >
            </v-img>
            <v-card-text
              class="pt-6"
              style="position: relative; cursor: pointer;"
              @click="revealPurpose = !revealPurpose"
            >
              <h3 class="display-1 font-weight-bold primary--text mb-2">
                {{getText('purpose')}}
              </h3>
            </v-card-text>
          </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-card
        v-if="revealMission"
        class="transition-fast-in-fast-out v-card--reveal-expand"
      >
        <v-card-text>
          <p class="display-1 text--primary">
            {{getText('mission')}}
          </p>
          <div class="text--primary">
            {{getText('missionDescription')}}
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row class="text-center">
      <v-card
        v-if="revealObjective"
        class="transition-fast-in-fast-out v-card--reveal-expand"
      >
        <v-card-text>
          <p class="display-1 text--primary">
            {{getText('objective')}}
          </p>
          <div class="text--primary">
            {{getText('objectiveDescription')}}
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row class="text-center">
      <v-card
        v-if="revealPurpose"
        class="transition-fast-in-fast-out v-card--reveal-expand"
      >
        <v-card-text>
          <p class="display-1 text--primary">
            {{getText('purpose')}}
          </p>
          <div class="text--primary">
            {{getText('purposeDescription')}}
          </div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-row>
      <v-col class="text-center mt-5">

      <h1>{{getText('carouselText')}}</h1>

      <v-divider light></v-divider>
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
    </v-row>
    <v-row>
      <v-col offset="4" cols="12" sm="3">
        <v-img
          :src="require(`../assets/${info.logoUsach}`)"
          max-height="100px"
          max-width="200px"
        >

        </v-img>
      </v-col>
      <v-col offset-sm="0" offset="4" cols="12" sm="3">
        <v-img
          :src="require(`../assets/${info.logoDiinf}`)"
          max-height="100px"
          max-width="100px"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import info from "../assets/info.json";
export default {
  name: 'HelloWorld',
  data: () => ({
    items: [],
    info,
    revealMission: false,
    revealPurpose: false,
    revealObjective: false
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

.v-card--reveal-expand {
  margin-bottom: 10px;
  /* bottom: 0;
  opacity: 1 !important;
  position: absolute; */
  width: 100%;
}

.v-card:not(.on-hover) .v-img {
  opacity: 0.6;
 }
</style>