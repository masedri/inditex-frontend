import { Props } from '@/components/types'

export const Card = (props: Props) => {
  return <div className={`border-2 shadow-md ${props.className}`}>{props.children}</div>
}
