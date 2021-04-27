import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

// Translation provided by Vuetify (javascript)
import es from 'vuetify/es5/locale/es'
import en from 'vuetify/es5/locale/en'

export default new Vuetify({
  lang: {
    locales: { es, en },
    current: 'es',
  },
  theme: {
    themes: {
      light: {
        //primary: '#3f51b5', //navbar
        secondary: '#FFFFFF', //Botones
        //accent: '#8c9eff',
        //error: '#b71c1c',
        //grey: '#3f51b5' //fondo pagina
      },
    },
  }
});
