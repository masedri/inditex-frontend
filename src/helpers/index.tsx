import { Podcast } from '@/features/podcast/types'
import DOMPurify from 'isomorphic-dompurify'

export const sanitaze = (rawHTML: string) => DOMPurify?.sanitize(rawHTML)

export const getFromlocalStorage = (key: string) => {
  const state = localStorage.getItem(key)
  return state ? JSON.parse(state) : undefined
}
export const setlocalStorage = (key: string, state: any) => {
  localStorage.setItem(key, JSON.stringify(state))
}

export const hasId = (list: Partial<[{ id: string }]>, id: string) => list.some((item) => item?.id === id)
