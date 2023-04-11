import { useRouter } from 'next/router'

export default function PodcastById() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Podcast {id}
    </main>
  )
}
