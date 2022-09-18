<template>
  <div class="component-wrapper">
    <v-card
      class="mx-auto"
      outlined
      v-for="articleInfo in articleArr"
      :key="articleInfo.ArticleId"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="text-h5 mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
        ></v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-btn
          outlined
          rounded
          text
          v-for="tag in articleInfo.Tags"
          :key="tag"
        >
          {{ tag }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue'
import { PropType } from 'vue/types/options'
import { ArticleInterface } from '@/interface/ArticleInterface'

export default Vue.extend({
  name: 'ListCardIndex',
  props: {
    articleArr: {
      type: Array as PropType<Array<ArticleInterface>>,
      default (): Array<ArticleInterface> {
        return []
      },
      required: true
    }
  }
})
</script>

<style scoped lang='less'>

</style>
