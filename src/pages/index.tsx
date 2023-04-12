import Image from 'next/image'
import { NextPage } from 'next'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getPodcastList } from '@/features/podcast/services'
import { Podcast } from '@/features/podcast/types'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: {} }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const { podcastList } = await getPodcastList()
  return {
    props: { podcastList },
    revalidate: 1,
  }
}

const PodcastItem = ({ podcast }: { podcast: Podcast }) => {
  return (
    <Link href={podcast.link}>
      <div className="flex justify-end items-center flex-col gap-2 mb-40  h-44 mx-1 px-2 shadow-md relative border-y-2 cursor-pointer">
        <Image
          className="rounded-full absolute -top-20"
          src={podcast.image}
          alt="Next.js Logo"
          width={170}
          height={170}
        ></Image>
        <div className="w-56 text-center mb-5">
          <p className=" text-base font-serif break-words truncate hover:text-clip">
            {podcast.name}
          </p>
          <p className=" text-sm break-words truncate hover:text-clip">
            {podcast.author}
          </p>
        </div>
      </div>
    </Link>
  )
}

const PodcastList: NextPage<{ podcastList: Podcast[] }> = ({ podcastList }) => {
  return (
    <div className="flex min-h-screen flex-row flex-wrap items-center justify-between p-24 bg-white text-black">
      {podcastList.map((podcast) => (
        <PodcastItem podcast={podcast} key={podcast.id}></PodcastItem>
      ))}
    </div>
  )
}
export default PodcastList
