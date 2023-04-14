import { EpisodeById, PodcastResponse } from '@/features/podcast/types'

export const normalizationPodcastList = (podcasList: PodcastResponse[]) => {
  return podcasList.map((podcast: PodcastResponse) => ({
    id: podcast.id.attributes['im:id'],
    image: podcast['im:image'][2].label,
    name: podcast['im:name'].label,
    author: podcast['im:artist'].label,
    link: `/podcast/${podcast.id.attributes['im:id']}`,
    description: podcast.summary.label,
  }))
}
export const normalizationPodcasstById = (podcastById: EpisodeById[], id: string) => {
  return podcastById.map((episode: EpisodeById) => ({
    trackId: episode.trackId,
    releaseDate: new Date(episode.releaseDate).toLocaleDateString('en-US'),
    trackName: episode.trackName,
    description: episode?.description || '',
    trackTimeMillis: new Date(episode?.trackTimeMillis || 0).toISOString().slice(11, 19),
    episodeUrl: episode?.episodeUrl || '',
    link: `/podcast/${id}/episode/${episode.trackId}`,
  }))
}
