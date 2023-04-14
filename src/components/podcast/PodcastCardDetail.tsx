import { Card } from '@/components/Card'
import Image from 'next/image'
import { usePodcastContext } from '@/features/podcast/context'
import { sanitaze } from '@/helpers'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const PodcastCardDetail = () => {
  const { getCurrentPodcast } = usePodcastContext()
  const currentPodcast = getCurrentPodcast()
  const cleanHTML = sanitaze(currentPodcast?.description as string)
  const router = useRouter()
  const goBack = () => router.back()

  return (
    <Card className="min-w-[384px] flex flex-col w-96 max-h-[750px] divide-y-2 p-8">
      <Image
        className="rounded-md self-center mb-5 cursor-pointer"
        src={currentPodcast?.image}
        alt="Podcast image"
        width={170}
        height={170}
        onClick={goBack}
      ></Image>
      <div
        className="flex flex-col justify-center w-full max-h-36 cursor-pointer py-5"
        onClick={goBack}
      >
        <div>{currentPodcast?.name}</div>
        <div>{currentPodcast?.author}</div>
      </div>
      {currentPodcast?.description && (
        <div
          className="whitespace-pre-line overflow-y-auto scroll-smooth scrollbar-hide overflow-x-hidden pr-4 pt-5"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        ></div>
      )}
    </Card>
  )
}
