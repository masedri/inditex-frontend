import Image from 'next/image'
import Link from 'next/link'
import { Podcast } from '@/features/podcast/types'
import { Card } from '@/components/Card'
import { usePodcastContext } from '@/features/podcast/context'

export const PodcastItem = ({ podcast }: { podcast: Podcast }) => {
  const { addPodcast } = usePodcastContext()

  return (
    <Link
      href={podcast.link}
      onClick={() => addPodcast(podcast)}
      className="my-20"
    >
      <Card className="relative w-56 h-44 flex justify-end items-center flex-col mx-3 px-2">
        <Image
          className="rounded-full absolute -top-20"
          src={podcast.image}
          alt="podcast image"
          width={170}
          height={170}
        ></Image>
        <div className="text-center w-full mb-5">
          <p className="text-base font-serif break-words truncate hover:text-clip">{podcast.name}</p>
          <p className="text-sm break-words truncate hover:text-clip">{podcast.author}</p>
        </div>
      </Card>
    </Link>
  )
}
