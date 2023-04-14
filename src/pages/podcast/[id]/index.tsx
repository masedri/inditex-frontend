import { GetStaticProps, GetStaticPaths } from 'next'
import { getEpisodesById } from '@/features/podcast/services'
import { getPodcastList } from '@/features/podcast/services'
import { Container } from '@/components/containers'
import { EpisodeById } from '@/features/podcast/types'
import { PodcastCardDetail } from '@/components/podcast/PodcastCardDetail'
import { EpisodeView } from '@/components/podcast/EpisodeView'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { episodeListByid } = await getEpisodesById({ id: params?.id as string })
  return {
    props: { episodeListByid },
    revalidate: 120, // 2min
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { podcastList } = await getPodcastList()
  return {
    paths: podcastList.map((podcast) => ({ params: { id: podcast.id } })),
    fallback: true,
  }
}

export default function PodcastView({ episodeListByid }: { episodeListByid: EpisodeById[] }) {
  return (
    <Container className="flex lg:flex-row lg:items-start flex-col items-center gap-20 ">
      <PodcastCardDetail></PodcastCardDetail>
      <EpisodeView episodeListByid={episodeListByid}></EpisodeView>
    </Container>
  )
}
