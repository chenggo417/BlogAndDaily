export interface ArticleInterface {
  // 文章标题
  Title: string,
  // 标签数组
  Tags: Array<string>
  // 文章id
  ArticleId: string
  // 评论数量
  CommentCount: number
  // 封面图片 数组
  CoverImage: []
  // 私人
  IsPrivate: boolean
  // 推荐
  IsRecommend: boolean
  // 提交时间
  PostTime: Date
  // 状态
  Status: ArticleEditType
  // 类型 (博客类型 大类型)
  Type: string
  // 用户名
  Username: string
  // 查看总数量
  ViewCount: number
}

export enum ArticleEditType {
  // 空 保存后未上传
  created,
  // 上传后
  active,
  // 外面看到的版本
  effective,
  // 删除
  terminate
}
