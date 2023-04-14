import { Podcast, EpisodeById } from '@/features/podcast/types'
import { normalizationPodcastList, normalizationPodcasstById } from '@/features/podcast/utils'
import { config } from '@/config'

const { API_URL } = config

export const getPodcastList = async ({ limit = 100 } = {}) => {
  const res = await fetch(`${API_URL}/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)
  const data = await res.json()
  const podcastList: Podcast[] = normalizationPodcastList(data?.feed?.entry)
  return { podcastList }
}
export const getEpisodesById = async ({ id, limit = 20 }: { id: string; limit?: number }) => {
  const res = await fetch(`${API_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=${limit}`)
  const data = await res.json()
  const episodeListByid: EpisodeById[] = normalizationPodcasstById(data?.results, data?.resultCount, id)
  return { episodeListByid }
}
