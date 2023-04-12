import { Podcast } from '@/features/podcast/types'
import { normalizationPodcastList } from '@/features/podcast/utils'

export const getPodcastList = async () => {
  const res = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )

  const data = await res.json()
  const podcastList: Podcast[] = normalizationPodcastList(data?.feed?.entry)
  return { podcastList }
}
