import { GetStaticProps, GetStaticPaths } from 'next'
import { getEpisodesById } from '@/features/podcast/services'
import { getPodcastList } from '@/features/podcast/services'
import { Container } from '@/components/containers'
import { EpisodeById } from '@/features/podcast/types'
import { PodcastCardDetail } from '@/components/podcast/PodcastCardDetail'
import { EpisodeView } from '@/components/podcast/EpisodeView'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { episodeListByid, numberOfEpisodes } = await getEpisodesById({ id: params?.id as string })
  return {
    props: { episodeListByid, numberOfEpisodes },
    revalidate: 120, // 2min
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { podcastList = [] } = await getPodcastList()
  return {
    paths: podcastList.map((podcast) => ({ params: { id: podcast.id } })),
    fallback: true,
  }
}
/**  Get data from client Side

const useGetEpisodesById = () => {
  const [episodeListByid, setEpisodeList] = useState<EpisodeById[]>([])
  const [numberOfEpisodes, setNumberOfEpisodes] = useState('')
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    getEpisodesById({ id: id as string }).then(({ episodeListByid = [], numberOfEpisodes = 0 }) => {
      setEpisodeList(episodeListByid)
      setNumberOfEpisodes(numberOfEpisodes)
    })
  }, [id])
  return { episodeListByid, numberOfEpisodes }
}

**/

export default function PodcastView({ episodeListByid, numberOfEpisodes }: { episodeListByid: EpisodeById[]; numberOfEpisodes: string }) {
  // const { episodeListByid, numberOfEpisodes } = useGetEpisodesById()
  return (
    <Container className="flex lg:flex-row lg:items-start flex-col items-center gap-20 ">
      <PodcastCardDetail></PodcastCardDetail>
      <EpisodeView
        episodeListByid={episodeListByid}
        numberOfEpisodes={numberOfEpisodes}
      ></EpisodeView>
    </Container>
  )
}
