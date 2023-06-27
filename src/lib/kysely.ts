import {Generated, Selectable} from 'kysely'
import {createKysely} from '@vercel/postgres-kysely'

interface ClubTable {
    id: Generated<number>
    name: string
}

export type Club = Selectable<ClubTable>

export interface Database {
    club: ClubTable
}

export const db = createKysely<Database>()
