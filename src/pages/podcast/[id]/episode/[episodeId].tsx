import { useRouter } from 'next/router'

export default function EpisodeById() {
  const router = useRouter()
  const { episodeId } = router.query

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Episode {episodeId}
    </main>
  )
}
