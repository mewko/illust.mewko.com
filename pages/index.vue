<template>

  <v-container grid-list-md>
    <v-layout row wrap>
      <flex-card-image v-for="(post, key) in fileMap" :key="key" :src="post.image" :title="post.title" :to="key2path(key)"/>
    </v-layout>
  </v-container>

</template>

<script>
import { fileMap } from '~/posts/json/list.json'

import FlexCardImage from '~/components/FlexCardImage'

export default {
  components: {
    FlexCardImage
  },
  data() {
    return {
      fileMap: fileMap
    }
  },
  methods: {
    key2path(key) {
      const regexp = /posts\/json\/(\d\d\d\d-\d\d-\d\d)_(.*)\.json/i
      const match = key.match(regexp)

      console.log(match)

      return `${match[1]}/${match[2]}`
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
