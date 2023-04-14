import { GetStaticProps, GetStaticPaths } from 'next'
import { getEpisodesById } from '@/features/podcast/services'
import { getPodcastList } from '@/features/podcast/services'
import { Container } from '@/components/containers'

import { EpisodeById } from '@/features/podcast/types'

import { PodcastCardDetail } from '@/components/podcast/PodcastCardDetail'
import { EpisodeView } from '@/components/podcast/EpisodeView'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { podcastById } = await getEpisodesById({ id: params?.id as string })

  return {
    props: { id: params?.id, podcastById },
    revalidate: 60, // 60 secs
  }
}

export default function PodcastView({ podcastById }: { podcastById: EpisodeById[] }) {
  return (
    <Container className="flex lg:flex-row lg:items-start flex-col items-center gap-20 ">
      <PodcastCardDetail></PodcastCardDetail>
      <EpisodeView podcastById={podcastById}></EpisodeView>
    </Container>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { podcastList } = await getPodcastList()

  const paths = podcastList.map((podcast) => ({ params: { id: podcast.id } }))

  return {
    paths,
    fallback: true,
  }
}
