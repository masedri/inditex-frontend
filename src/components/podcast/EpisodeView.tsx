import { Card } from '@/components/Card'
import { EpisodeById } from '@/features/podcast/types'
import Link from 'next/link'

export const EpisodeView = ({ episodeListByid }: { episodeListByid: EpisodeById[] }) => {
  const numberOfEpisodes = episodeListByid?.map((episode) => episode.numberOfEpisodes)[0]
  return (
    <div className="flex flex-col gap-5 w-full">
      <Card className="p-3">
        <div className="text-2xl font-sans font-bold">Episodes: {numberOfEpisodes}</div>
      </Card>
      <Card className="p-5 h">
        <section className="flex justify-between p-3 font-bold border-b-4">
          <div>Title</div>
          <div className="flex justify-between w-1/3">
            <div>Date</div>
            <div>Duration</div>
          </div>
        </section>
        <ul className="flex flex-col w-full divide-y-2 overflow-y-auto max-h-[900px] scroll-smooth  ">
          {episodeListByid?.map((episode, index) => {
            return (
              <li
                key={episode.trackId}
                className={`flex flex-row w-full justify-between items-center p-3 ${
                  index % 2 === 0 && `bg-slate-100`
                } hover:bg-cyan-800 group`}
              >
                <Link href={{ pathname: episode.link, query: { ...episode } }}>
                  <p className="w-56 lg:w-72 xl:w-96 2xl:w-full  text-cyan-700 group-hover:text-white">{episode.trackName}</p>
                </Link>
                <div className="flex w-1/3 justify-between group-hover:text-white gap-5">
                  <p>{episode.releaseDate}</p>
                  <p>{episode.trackTimeMillis}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Card>
    </div>
  )
}
