import { createContext, useContext, useEffect, useState } from 'react'
import { Props } from '@/components/types'
import { Podcast, PodcastContextType } from '@/features/podcast/types'
import { useRouter } from 'next/router'
import { getFromlocalStorage, hasId, setlocalStorage } from '@/helpers'

const PodcastContext = createContext<PodcastContextType | null>(null)

export function PodcastProvider({ children }: Props) {
  const [podcastList, setPodcastList] = useState<Podcast[]>([])
  const router = useRouter()

  useEffect(() => {
    const podcastList = getFromlocalStorage('podcastList')
    if (podcastList) setPodcastList(podcastList)
  }, [])

  const addPodcast = (podcast: Podcast) => {
    if (!hasId(podcastList as [], podcast.id)) {
      const updatePodcastList = [...podcastList, podcast]
      setPodcastList(updatePodcastList)
      setlocalStorage('podcastList', updatePodcastList)
    }
  }
  const getCurrentPodcast = (): Podcast => {
    const { id } = router.query
    return podcastList.find((podcast: Podcast) => podcast.id === id)!
  }

  const values = { podcastList, addPodcast, getCurrentPodcast, setPodcastList }

  return <PodcastContext.Provider value={values}>{children}</PodcastContext.Provider>
}

export function usePodcastContext() {
  return useContext(PodcastContext) as PodcastContextType
}
