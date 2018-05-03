<template>

  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>

        <h1>{{ title }}</h1>

        <img :src="image" width="100%" alt="title">

        <div v-html="bodyHtml"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { sourceFileArray } from '~/posts/json/list.json'

import AppLogo from '~/components/AppLogo.vue'

export default {
  validate({ params }) {
    const { date, title } = params

    return sourceFileArray.includes(`posts/md/${date}_${title}.md`)
  },
  asyncData({ params }) {
    const { date, title } = params

    return Object.assign({}, require(`~/posts/json/${date}_${title}.json`), {
      params
    })
  },
  components: {
    AppLogo
  },
  methods: {}
}
</script>
