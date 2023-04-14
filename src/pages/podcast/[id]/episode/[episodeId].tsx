import { useRouter } from 'next/router'
import { Container } from '@/components/containers'

import { PodcastCardDetail } from '@/components/podcast/PodcastCardDetail'
import { Card } from '@/components/Card'
import { sanitaze } from '@/helpers'
import ReactAudioPlayer from 'react-audio-player'

export default function EpisodeById() {
  const router = useRouter()
  const { trackName, description, episodeUrl } = router.query
  const cleanHTML = sanitaze(description as string)

  return (
    <Container className="flex lg:flex-row lg:items-start flex-col items-center gap-20">
      <PodcastCardDetail></PodcastCardDetail>
      <Card className="flex flex-col gap-5 p-5 w-full">
        <div className="text-xl font-bold capitalize">{trackName}</div>
        <p
          className="whitespace-pre-line max-h-96 overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: cleanHTML }}
        ></p>
        {/* wrapper html audio */}
        <ReactAudioPlayer
          className="w-full "
          src={episodeUrl as string}
          controls
        ></ReactAudioPlayer>
      </Card>
    </Container>
  )
}
