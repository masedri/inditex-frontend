export type PodcastResponse = {
  id: { attributes: { ['im:id']: string } }
  ['im:artist']: { label: string }
  ['im:image']: Array<{ label: string }>
  ['im:name']: { label: string }
}

export type Podcast = {
  id: string
  image: string
  name: string
  author: string
  link: string
}
