/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AutoSizer, Grid, GridCellProps } from 'react-virtualized'
import { ReactNode } from 'react'
import CellColumn from './CellColumn'
import CellRow from './CellRow'

export type TableProps = {
  data: TableColumnRender[][]
  columns: TableColumn[]
}

export type TableColumn = Omit<TableColumnRender, 'renderCell'>

export type TableColumnRender = {
  header: string
  accessor: string
  order?: number
  minWidth?: number | string
  maxWidth?: number | string
  align?: 'start' | 'end' | 'stretch'
  Cell: (value?: any) => ReactNode
  renderCell?: ReactNode
}

export type TableRow<T> = {
  [key in keyof T]: any
}

const Table = (props: TableProps) => {
  const { data, columns } = props

  function cellRenderer({ key, style }: GridCellProps) {
    const keyNumber: number = +key.slice(0, 1)
    const cells: TableColumnRender[] = data[keyNumber]
    return (
      <div key={key} style={style}>
        <div className="h-full transition-all ease-in-out no-underline text-black dark:text-light">
          <div className='w-full h-full relative text-base font-bold leading-6 after:content-[""] after:transition-all after:ease-in-out after:absolute after:inset-0 after:opacity-0 after:scale-90 after:rounded-2xl after:bg-dark/5 dark:after:bg-light/5 after:-z-[1] hover:after:scale-100 hover:after:opacity-100'>
            <div
              role="row"
              className="flex px-7 max-w-full w-full h-full rounded-2xl overflow-hidden cursor-pointer [&>*:not(:last-child)]:mr-4"
            >
              {cells &&
                cells.length > 0 &&
                cells.map((data: TableColumnRender) => (
                  <CellRow key={data.header} {...data}>
                    {data.renderCell}
                  </CellRow>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div role="table" className="mb-4 text-base max-w-full w-full">
      <div
        role="rowgroup"
        className="text-sm font-normal p-0 mb-2 text-dark/60 dark:text-light/60"
      >
        <div
          role="row"
          className="flex px-7 max-w-full w-full h-full rounded-2xl overflow-hidden [&>*:not(:last-child)]:mr-4"
        >
          {columns &&
            columns.length > 0 &&
            columns.map((column, index) => (
              <CellColumn key={index} {...column}>
                {column.header}
              </CellColumn>
            ))}
        </div>
      </div>
      <div role="rowgroup">
        <div className="overflow-visible w-full">
          <AutoSizer disableHeight>
            {({ width }) => {
              return (
                <Grid
                  cellRenderer={cellRenderer}
                  columnCount={1}
                  columnWidth={width}
                  height={1000}
                  rowCount={data.length}
                  rowHeight={72}
                  width={width}
                  autoHeight
                />
              )
            }}
          </AutoSizer>
        </div>
      </div>
    </div>
  )
}

export default Table
