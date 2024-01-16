// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      name: string
      email: string
    }
    meals: {
      id: string
      linked_user: string
      name: string
      description: string
      diet: boolean
      date: string
    }
  }
}
