<template>
  <div class="tag-picker-wrapper">
    <v-chip-group
      multiple
      active-class="primary--text"
      column
      v-model="selectedIndex"
    >
      <v-chip
        v-for="(tag, index) in allTags"
        :key="tag"
        @click="selTag(tag, index)"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <v-chip-group
      active-class="primary--text"
      column
    >
      <v-chip
        v-for="(tag, index) in selectedTags"
        :key="tag"
        close
        @click:close="delTag(tag, index)"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
    <!--    <p>{{ selectedIndex }}</p>-->
    <!--    <p>{{ allTags }}</p>-->
    <!--    <p>{{ selectedTags }}</p>-->
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  name: 'TagPickerIndex',
  data: (): {
    tags: Array<string>,
    allTags: Array<string>,
    selectedTags: Array<string>
    selectedIndex: Array<number>
  } => ({
    tags: [],
    allTags: [],
    selectedTags: [],
    selectedIndex: []
  }),
  mounted () {
    this.getTags()
  },
  methods: {
    getTags () {
      const tags = [
        'tag1',
        'tag2',
        'tag3',
        'tag4',
        'tag5',
        'tag6',
        'tag7'
      ]
      this.tags = tags
      this.allTags = tags
    },
    selTag (tag: string, index: number) {
      const isSel = this.selectedIndex.includes(index)
      if (isSel) {
        const selIndex = this.selectedTags.findIndex((value) => value === tag)
        if (!(selIndex >= 0)) {
          return
        }
        this.selectedTags.splice(selIndex, 1)
        return
      }
      this.selectedTags.push(tag)
    },
    delTag (tag: string, index: number) {
      this.selectedTags.splice(index, 1)
      const originIndex = this.allTags.findIndex((value) => value === tag)
      const selIndex = this.selectedIndex.findIndex((value) => value === originIndex)
      this.selectedIndex.splice(selIndex, 1)
    }
  }
})
</script>

<style scoped lang='less'>
.tag-picker-wrapper {
  background-color: #777;
  position: sticky;
  top: 74px;
  z-index: 5;
}

</style>
