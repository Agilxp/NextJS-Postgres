import {Club, db} from '@/lib/kysely'

export default async function Home() {
  let clubs: Array<Club> = []

  try {
    clubs = await db.selectFrom('club').selectAll().execute()
  } catch (e) {
    console.error('Error loading clubs', e)
    throw e
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {clubs.map((club) => {
        return (
            <p key={club.id}>{club.name}</p>
        )
      })}
    </main>
  )
}
