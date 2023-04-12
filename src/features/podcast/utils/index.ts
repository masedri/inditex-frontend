import { PodcastResponse } from '@/features/podcast/types'

export const normalizationPodcastList = (podcasList: PodcastResponse[]) => {
  return podcasList.map((podcast: PodcastResponse) => ({
    id: podcast.id.attributes['im:id'],
    image: podcast['im:image'][2].label,
    name: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    link: `/podcast/${podcast.id.attributes['im:id']}`,
  }))
}
