import  { ReactElement } from 'react'

type Props = {
    children: ReactElement
}


function ChartBox({ children }: Props) {
  return (
    <div className="border-[1px] flex-1 rounded-md border-light_blue shadow-md shadow-blue-100 justify-between p-4 gap-2">
        {children}
    </div>
  )
}

export default ChartBox