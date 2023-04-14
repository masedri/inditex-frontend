export type PodcastResponse = {
  id: { attributes: { ['im:id']: string } }
  ['im:artist']: { label: string }
  ['im:image']: Array<{ label: string }>
  ['im:name']: { label: string }
  summary: { label: string }
}

export type Podcast = {
  id: string
  image: string
  name: string
  author: string
  link: string
  description?: string
}
export type EpisodeById = {
  trackId: string
  trackTimeMillis?: string
  releaseDate: string
  trackName: string
  description?: string
  episodeUrl?: string
  numberOfEpisodes?: string
  link: string
}

export type PodcastContextType = {
  setPodcastList: (podcastList: Podcast[]) => void
  podcastList: object[]
  addPodcast: (podcast: Podcast) => void
  getCurrentPodcast: () => Podcast
}
