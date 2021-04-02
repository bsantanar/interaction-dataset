<template>

    <v-col
        cols="12"
        lg="6"
        sm="12"
    >
    <v-card min-height="250">
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title>{{card.name}} - {{card.version}}</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-clipboard-text
        </v-icon>
        {{this.$parent.$parent.$parent.$parent.language.descriptionDataset}}
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-newspaper-variant-outline
        </v-icon>
        {{this.$parent.$parent.$parent.$parent.language.publicationsDataset}}
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-download
        </v-icon>
        {{this.$parent.$parent.$parent.$parent.language.downloadDataset}}
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="mb-5">
              {{card.description}}
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <ul
            v-for="publication in card.publications"
            :key="publication._id"
            class="ma-5">
                <li>
                    {{publication.author}}({{publication.year}})
                    .{{publication.title}}.{{publication.description}}
                    {{publication.editorial ? `[${publication.editorial}]` : ''}}
                    <a v-if="publication.doi" :href="publication.doi">DOI</a>
                </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p class="mb-5">
                <a 
                v-if="!card.permission" 
                :href="card.link"
                target="_blank">
                {{card.link}}</a>

                <v-dialog
                v-else
                v-model="dialog"
                persistent
                max-width="600px"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                    Request Dataset
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                    <span class="headline">
                    {{this.$parent.$parent.$parent.$parent.language.contact}}</span>
                    </v-card-title>
                    <v-card-text>
                    <v-form ref="form" v-model="valid">
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                                sm="12"
                                md="4"
                            >
                                <v-text-field
                                v-model="fullName"
                                :rules="fullNameRules"
                                label="Full Name"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="12"
                                md="8"
                            >
                                <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label="Email"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea
                                    counter
                                    v-model="description"
                                    :rules="descriptionRules"
                                    rows="4"
                                    label="Description"
                                    required
                                ></v-textarea>
                            </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        :disabled="loading"
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        :disabled="!valid"
                        :loading="loading"
                        @click="submit(card)"
                    >
                        Send
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
    </v-col>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Dataset',
    props: ['card'],
    data: () => ({
        show: false,
        dialog: false,
        loading: false,
        valid: false,
        fullName: '',
        email: '',
        description: '',
        fullNameRules: [
            v => !!v || 'Full name is required'
        ],
        descriptionRules: [
            v => !!v || 'Description is required'
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Not a valid Email'
        ],
    }),
    methods: {
        submit(dataset){
            this.loading = true
            let {fullName, description, email} = this
            axios
                .post(`${process.env.VUE_APP_API_URL}/request-dataset/`,
                    {
                      fullName, 
                      description, 
                      email,
                      datasetName: dataset.name,
                      datasetVersion: dataset.version
                    }
                )
                .finally(() => {
                    this.loading = false
                    this.dialog = false
                    })
        }
    }
}
</script>