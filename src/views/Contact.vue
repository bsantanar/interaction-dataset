<template>
    <v-container style="max-width: 1200px;">
        <h1>
            {{this.$parent.$parent.$parent.language.contact}}
        </h1>
        <v-sheet
            elevation="1"
            rounded="lg"
        >
            <v-row>
                <v-col 
                    class="text-center">
                <p>

                {{this.$parent.$parent.$parent.language.contactDescription}}
                </p>

                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-map-marker
                    </v-icon>
                    <p>{{info.location}}</p>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-phone
                    </v-icon>
                    <p>{{info.phone}}</p>
                </v-col>
                <v-col
                    cols="12"
                    sm="12"
                    lg="4"
                    class="text-center"
                >
                    <v-icon
                        x-large
                        color="primary"
                    >
                        mdi-email
                    </v-icon>
                    <p>{{info.mail}}</p>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>
<script>
export default {

    data: () => ({
        info: require('../assets/info.json'),
    }),
}
</script>