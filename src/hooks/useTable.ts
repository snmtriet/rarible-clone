/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumn, TableRow } from '@/components/ui/Table'
import { useEffect, useMemo, useState } from 'react'

type Props = {
  columns: TableColumn[]
  rows: TableRow<any>[]
}

const useTable = (props: Props) => {
  const [data, setData] = useState<TableColumn[][]>([])

  const columns = useMemo(() => props.columns, [props.columns])
  const rows = useMemo(() => props.rows, [props.rows])

  useEffect(() => {
    const newTable = transformColumns({ columns, rows })
    setData(newTable)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns])

  function transformColumns({ columns, rows }: Props) {
    const transformedColumns = rows.map((row) => {
      const resCols = columns.map((column) => {
        const resultCell = column.Cell(row[column.accessor])
        return {
          ...column,
          Cell: (value = row[column.accessor]) => column.Cell(value),
          renderCell: resultCell,
        }
      })
      return resCols
    })

    return transformedColumns
  }

  return data
}

export default useTable
