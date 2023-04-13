import { GetStaticProps } from 'next'
import { getPodcastList } from '@/features/podcast/services'
import { Podcast } from '@/features/podcast/types'
import { Container } from '@/components/containers'
import { PodcastItem } from '@/components/podcast/PodcastItem'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  const { podcastList } = await getPodcastList()

  return {
    props: { podcastList },
    revalidate: 60, // 1 min
  }
}

export default function PodcastList({ podcastList }: { podcastList: Podcast[] }) {
  const [state, setstate] = useState({
    query: '',
    list: podcastList,
  })
  const handleChange = (e: any) => {
    const results = podcastList.filter((podcast) => {
      if (e.target.value === '') return podcast
      return (
        podcast.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        podcast.author.toLowerCase().includes(e.target.value.toLowerCase())
      )
    })
    setstate({
      query: e.target.value,
      list: results,
    })
  }
  return (
    <Container className="flex flex-col gap-44 h-full w-full items-center ">
      <input
        className="min-w-[500px] w-1/2 border-4 p-2 "
        type="search"
        placeholder="filter podcast"
        value={state.query}
        onChange={handleChange}
      />
      <section className="flex flex-row flex-wrap justify-center">
        {state.list.map((podcast) => (
          <PodcastItem
            podcast={podcast}
            key={podcast.id}
          ></PodcastItem>
        ))}
      </section>
    </Container>
  )
}
