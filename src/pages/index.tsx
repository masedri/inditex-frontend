import Image from 'next/image'
import { NextPage } from 'next'

type Podcast = {
  category: object
  id: { attributes: { ['im:id']: string } }
  ['im:artist']: object
  ['im:image']: Array<object>
  ['im:name']: object
}

export async function getStaticProps() {
  const res = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  )

  const data = await res.json()
  const podcastList: Podcast[] = data?.feed?.entry

  return {
    props: { podcastList },
    revalidate: 1,
  }
}

const PodcastItem = ({ podcast }: { podcast: Podcast }) => {
  return (
    <div>
      {podcast['im:name'].label}
      <Image
        src={podcast['im:image'][2].label}
        alt="Next.js Logo"
        width={podcast['im:image'][2].attributes.height}
        height={podcast['im:image'][2].attributes.height}
      ></Image>
      {podcast['im:artist'].label}
    </div>
  )
}

const PodcastList: NextPage<{ podcastList: Podcast[] }> = ({ podcastList }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {podcastList.map((podcast) => (
        <PodcastItem
          podcast={podcast}
          key={podcast.id.attributes['im:id']}
        ></PodcastItem>
      ))}
    </div>
  )
}
export default PodcastList
