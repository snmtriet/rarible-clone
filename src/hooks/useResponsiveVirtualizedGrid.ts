import { useEffect, useState } from 'react'
import { useWindowDimensions } from '.'

type Props = {
  breakpoints: { render: number; value: number }[]
}

/* 
min width
[
  {render: 4, value: 1440},
  {render: 3, value: 1124},
  {render: 2, value: 768},
  {render: 1, value: 540},
]
*/

const useResponsiveVirtualizedGrid = (props: Props) => {
  const { breakpoints } = props
  const [columnCount, setColumnCount] = useState(breakpoints[0].render)
  const { width } = useWindowDimensions()

  useEffect(() => {
    for (let i = 0; i < breakpoints.length; i++) {
      if (
        width < breakpoints[i].value &&
        width > (i === breakpoints.length - 1 ? 0 : breakpoints[i + 1].value)
      ) {
        setColumnCount(breakpoints[i].render)
      }
    }
  }, [breakpoints, width])

  return columnCount
}

export default useResponsiveVirtualizedGrid
