export type Article = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  body: string
  eye_catch: {
    url: string
    height: number
    width: number
  }
  description: string
  category: {
    name: string
  }
}