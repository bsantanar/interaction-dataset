<template>
    <v-container style="max-width: 1200px;">
        <h1>
            {{this.$parent.$parent.$parent.language.datasets}}
        </h1>
        <div class="text-center" v-if="errored">
            <h3>{{this.$parent.$parent.$parent.language.error}}</h3>
        </div>
        <div v-else>
            <div>
                <v-row>
                    <v-col cols="12">
                        
                    <div v-if="loading">
                        <v-skeleton-loader
                            class="mx-auto"
                            type="list-item"
                        ></v-skeleton-loader>
                    </div>
                    <v-autocomplete v-else
                        v-model="selectedTags"
                        :items="tags"
                        dense
                        chips
                        small-chips
                        label="Filter by tags"
                        multiple
                        solo
                    ></v-autocomplete>
                    </v-col>
                </v-row>
                <div v-if="loading">
                    <v-skeleton-loader
                        type="card"
                    ></v-skeleton-loader>
                </div>
                <div v-else
                >
                <v-row>
                    <Dataset
                    v-for="card in filterDatasets"
                    :key="card._id"
                    :card="card"
                    />
                </v-row>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import Dataset from '@/components/Dataset.vue'
import axios from 'axios'

export default {
    name: "Datasets",
    components: {
        Dataset
    },
    data: () => ({
        selectedItem: null,
        selectedCategory: null,
        years: [],
        loading: false,
        errored: false,
        datasets: [],
        tags: [],
        selectedTags: []
    }),
    mounted() {
        this.loading = true
        axios
            .get(`${process.env.VUE_APP_API_URL}/dataset/`)
            .then(res => {
                this.datasets = res.data.data
                this.datasets.forEach( c => {
                    this.tags.push(...c.tags)
                })
                this.tags = [...new Set(this.tags)]
            })
            .catch(err => {
                console.error("axios err", err)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    computed: {
        filterDatasets: function(){
            if(this.selectedTags.length === 0) return this.datasets
            return this.datasets.filter(c => c.tags.some(t => this.selectedTags.includes(t)))
        }
    }
}
</script>