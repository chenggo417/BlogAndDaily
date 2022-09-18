<template>
  <div class="article-list-wrapper">
    <tag-picker-index></tag-picker-index>
    <list-card-index :articleArr="articleArr" v-if="articleArr.length"></list-card-index>
    <div class="empty" v-else-if="!articleArr.length">
      暂无数据
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import ListCardIndex from '@/components/ListCard/ListCardIndex.vue'
import { ArticleInterface } from '@/interface/ArticleInterface'
import TagPickerIndex from '@/components/TagPicker/TagPickerIndex.vue'

export default Vue.extend({
  name: 'ArticleListIndex',
  components: {
    ListCardIndex,
    TagPickerIndex
  },
  data: () => ({
    articleArr: [] as ArticleInterface[]
  }),
  mounted () {
    this.getArticleArr()
  },
  methods: {
    getArticleArr () {
      // this.articleArr = [
      //   {
      //     Title: '法华交到度明低',
      //     ArticleId: '91',
      //     CommentCount: 72,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400',
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: true,
      //     IsRecommend: false,
      //     PostTime: '1992-12-10 06:59:37',
      //     Status: 0,
      //     Type: 'eiusmod voluptate nisi',
      //     Username: '吴丽',
      //     ViewCount: 69
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '并消片习志响',
      //     ArticleId: '53',
      //     CommentCount: 68,
      //     CoverImage: [
      //       'http://dummyimage.com/400x400'
      //     ],
      //     IsPrivate: false,
      //     IsRecommend: false,
      //     PostTime: '1979-11-13 06:19:42',
      //     Status: 2,
      //     Type: 'est do nostrud laboris',
      //     Username: '崔明',
      //     ViewCount: 80
      //   },
      //   {
      //     Title: '部位别已别',
      //     ArticleId: '85',
      //     CommentCount: 97,
      //     CoverImage: [],
      //     IsPrivate: false,
      //     IsRecommend: true,
      //     PostTime: '1984-10-16 17:04:55',
      //     Status: 1,
      //     Type: 'proident exercitation laborum',
      //     Username: '钱秀兰',
      //     ViewCount: 61
      //   }
      // ]
    }
  }
})
</script>

<style scoped lang='less'>
.article-list-wrapper {
}
</style>
