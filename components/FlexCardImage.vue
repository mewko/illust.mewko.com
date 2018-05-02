<template>
  <v-flex xs12 sm6 md4 >

    <v-card :to="to" hover>
      <v-card-media
        :src="src"
        height="350px"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs6 align-start flexbox>
              <span class="headline white--text" v-text="title"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>

    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'IllustItem',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
