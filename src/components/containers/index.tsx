import { Props } from '@/components/types'

export const Container = (props: Props) => {
  return <div className={`bg-white text-black p-24 min-h-screen min-w-screen  ${props.className}`}>{props.children}</div>
}
