<template>
    <v-footer
        color="primary lighten-1"
        padless
    >
    <v-row
      justify="center"
      no-gutters
    >
        <v-btn
          v-for="icon in icons"
          :key="icon.type"
          class="mx-4 white--text"
          :href="icon.link"
          icon
        >
          <v-icon size="24px">
            {{ icon.type }}
          </v-icon>
        </v-btn>

      <v-col
        class="primary lighten-1 py-4 text-center white--text"
        cols="12"
      >

        {{ new Date().getFullYear() }} — <strong>{{this.$parent.$parent.language.title}}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
import info from "../assets/info.json";

export default {
    data: () => ({
      icons: [
          {type: 'mdi-facebook', link: info.facebook},
          {type: 'mdi-twitter', link: info.twitter},
          {type: 'mdi-linkedin', link: info.linkedin},
          {type: 'mdi-instagram', link: info.instagram},
      ],
    }),    
}
</script>