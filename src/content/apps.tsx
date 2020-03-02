import { FC } from 'react'
import { Reps } from './apps/reps'

type app = {
  /**
   * The name of the app...
   */
  name: string
  /**
   * Brief description of the app
   */
  description?: string
  /**
   * The app - duh
   */
  component: FC<any>
  /**
   * Blog slug for an entry about the app because google loves links
   */
  blogSlug?: string
}

export const myApps: app[] = [
  {
    name: 'reps',
    description: 'discover your elected representatives',
    component: Reps
  }
]
