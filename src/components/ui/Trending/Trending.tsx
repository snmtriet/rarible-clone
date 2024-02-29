/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconArrowRight2 } from '@/assets/svg'
import { Button } from '@/components/shared'
import useTable from '@/hooks/useTable'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import TabSlider from '../TabSlider'
import Table, { TableColumn } from '../Table'
import Filter from './Filter'
import { cn } from '@/utils'
import { AutoSizer, Grid, GridCellProps } from 'react-virtualized'
import { useResponsiveVirtualizedGrid } from '@/hooks'
import CollectionCard from '../CollectionCard'

type Collection = {
  index?: number
  collection: {
    name: string
    image: string
  }
  'floor-price': number
  'floor-change': number | string
  volume: number
  'volume-change': number | string
  items: string
  owners: string
}

const dataCollection = [
  {
    collection: {
      name: 'DeGods',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy9jNmNiMGIxZDZmMmFiNjFjMGVmYWNmMDBlNjJlMjIzMC5qcGc/dz01MDAmYXV0bz1mb3JtYXQ=',
    },
    'floor-price': 2.94,
    'floor-change': '-7.5',
    volume: 701.6,
    'volume-change': '+32.6%',
    items: '9K',
    owners: '2.9K',
  },
  {
    collection: {
      name: 'Azuki',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWJKaXQxYTlKcDM1RDJBWmRpVGRmTG42SkNYUVNibjFMdzIzN3FaV2ZDTWZl',
    },
    'floor-price': 6.16,
    'floor-change': '-1.7',
    volume: 632.6,
    'volume-change': '+217%',
    items: '10K',
    owners: '4.4K',
  },
  {
    collection: {
      name: 'Persona',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9yZXNvdXJjZXMueHRlci5pby9mdW5mb2dfdXBsb2FkLzYxMjI2MmRkMTZiZC9nYW1lLzE3MDg0OTc2ODEtMjMxMjkyNDczOTEwODYxODUyNy5wbmc=',
    },
    'floor-price': 0.34,
    'floor-change': '-22.5',
    volume: 606,
    'volume-change': '+68.4%',
    items: '8.8K',
    owners: '4.3K',
  },
  {
    collection: {
      name: 'Moonbirds',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVNmclRXWmtFempLVHhnMWV1TTFpUW1NbnV4M3RBVmRON256VWJxZjhDREZr',
    },
    'floor-price': 1.437,
    'floor-change': '-21.9',
    volume: 496.2,
    'volume-change': '+126.6%',
    items: '10K',
    owners: '5.8K',
  },
  {
    collection: {
      name: 'MutantApeYachtClub',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWFvYWZ5akJ5OTdOS0VQWnpBRDNGSzhSY3dDSkhiMjYzZERKYmhDYVhQV3Bv',
    },
    'floor-price': 4.1279,
    'floor-change': '+1',
    volume: 433.4,
    'volume-change': '+13.3%',
    items: '19.5K',
    owners: '11.7K',
  },
  {
    collection: {
      name: 'Bored Ape Yacht Club',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0p1OUNrV3RWLTFPa3ZmNDV3bzhVY3RSLU05SGUyUGpJTFAwb092eEU4OUF5aVBQR3RyUjNneXN1MVpneTBoamQyeEtJZ2pKSnRXSWMweWJqNFZkN3d2OHQzcHhER0hvSkJ6REI9czEyMA==',
    },
    'floor-price': 23.42,
    'floor-change': '-0.3',
    volume: 414.4,
    'volume-change': '+24.8%',
    items: '10K',
    owners: '5.6K',
  },
  {
    collection: {
      name: 'Pixelmon - Generation 1',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbWNiOUJ5eVk5c3lwcDFZM000dmZZM1hiZ0ViOVg3R2VFdGJlNGZmQmpQdmJG',
    },
    'floor-price': 1.489,
    'floor-change': '-6.9',
    volume: 408.4,
    'volume-change': '+40.6%',
    items: '12.6K',
    owners: '5.8K',
  },
  {
    collection: {
      name: 'Lil Pudgys',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL0F2SEk1T2dDZHBMaWhQblE0OFJhdF92OHh5LUlORXNEQU44aWQ4bmFhWnJINkp3Y1lxc0Y2TGN2UUFuRG91YmJlbVJvU3psOUZnOE80T3poZUF3VDNtU1VTNURwWWU1NE95eUxydz1zMTIw',
    },
    'floor-price': 1.8,
    'floor-change': '-5.2',
    volume: 358.3,
    'volume-change': '+91.3',
    items: '21.6K',
    owners: '8.2K',
  },
  {
    collection: {
      name: 'Pudgy Penguins',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVNUckE1cGNmNzVUTlpSV1pjNUZpSnJhakp6bU1HQ3dmQ3FmVkFwRGtnY0tF',
    },
    'floor-price': 19.45,
    'floor-change': '-2',
    volume: 337.3,
    'volume-change': '-14.6%',
    items: '8.9K',
    owners: '4.7K',
  },
  {
    collection: {
      name: 'Yakuza Pandas',
      image:
        'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL1A2RTQwMXF1azF2eFlTRVdaOU40QlhiVk1TUVg1SGc2azA1bHdfdGgySWpGQTlDanhVcENWSjdjLUpwNF9lSXNENGU2Y0hyQjZjRWY0Vnd1ME03UXpnZ05aYThJQVlkVHBzdVU9czEyMA==',
    },
    'floor-price': 3.7969,
    'floor-change': '+10.6',
    volume: 323.9,
    'volume-change': '-0.4%',
    items: '7.9K',
    owners: '3K',
  },
]

const Trending = () => {
  const tabs = ['Collections', 'Marketplaces']
  const columnCount = useResponsiveVirtualizedGrid({
    breakpoints: [
      { render: 2, value: 965 },
      { render: 1, value: 876 },
    ],
  })

  const columns = useMemo<TableColumn[]>(
    () => [
      {
        header: '#',
        accessor: 'index',
        minWidth: 32,
        maxWidth: 32,
        Cell: (value) => (
          <span className="text-dark/60 dark:text-light/60">{value}</span>
        ),
      },
      {
        header: 'Collection',
        accessor: 'collection',
        minWidth: 120,
        maxWidth: '100%',
        Cell: ({ name, image }) => (
          <Link
            to="#"
            className="transition-all ease-in-out no-underline text-black dark:text-light"
          >
            <div className="flex items-center">
              <div className="mr-4 w-10 h-10 rounded-xl">
                <img
                  className="min-w-10 min-h-10 object-cover rounded-lg"
                  src={image}
                  alt="card-0-0.png"
                />
              </div>
              <div className="flex items-center flex-grow flex-shrink overflow-hidden">
                <span className="truncate max-w-full font-medium">{name}</span>
              </div>
            </div>
          </Link>
        ),
      },
      {
        header: 'Floor price',
        accessor: 'floor-price',
        minWidth: 100,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span className="whitespace-nowrap">
            <span>{value}</span>
            <pre className="inline"> </pre>
            <span className="text-dark/60 dark:text-light/60 font-normal leading-6 text-base">
              ETH
            </span>
          </span>
        ),
      },
      {
        header: 'Floor change',
        accessor: 'floor-change',
        minWidth: 100,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span
            className={cn(
              'whitespace-nowrap font-medium',
              value.includes('+') && 'text-[#28b833]',
              value.includes('-') && 'text-[#e94949]',
            )}
          >
            <span className="leading-6 text-base">{value}%</span>
          </span>
        ),
      },
      {
        header: 'Volume',
        accessor: 'volume',
        minWidth: 100,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span className="whitespace-nowrap">
            <span>{value}</span>
            <pre className="inline"> </pre>
            <span className="text-dark/60 dark:text-light/60 font-normal leading-6 text-base">
              ETH
            </span>
          </span>
        ),
      },
      {
        header: 'Volume change',
        accessor: 'volume-change',
        minWidth: 100,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span
            className={cn(
              'whitespace-nowrap font-medium',
              value.includes('+') && 'text-[#28b833]',
              value.includes('-') && 'text-[#e94949]',
            )}
          >
            <span className="leading-6 text-base">{value}%</span>
          </span>
        ),
      },
      {
        header: 'Items',
        accessor: 'items',
        minWidth: 120,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span className="whitespace-nowrap text-dark dark:text-light font-medium">
            <span className="leading-6 text-base">{value}</span>
          </span>
        ),
      },
      {
        header: 'Owners',
        accessor: 'owners',
        minWidth: 100,
        maxWidth: '10%',
        align: 'end',
        Cell: (value) => (
          <span className="whitespace-nowrap text-dark dark:text-light font-medium">
            <span className="leading-6 text-base">{value}</span>
          </span>
        ),
      },
    ],
    [],
  )
  const rows = useMemo<Collection[]>(
    () =>
      dataCollection.map((collection, i) => ({ ...collection, index: i + 1 })),
    [],
  )
  const dataTable = {
    columns,
    rows,
  }
  const table = useTable(dataTable)

  function cellRenderer({ key, style }: GridCellProps) {
    return (
      <div key={key} style={style} className="p-2">
        <CollectionCard id={key} />
      </div>
    )
  }

  return (
    <div className="mt-12">
      <div className="flex flex-col md:border border-dark/[0.08] dark:border-light/[0.08] md:rounded-2xl md:py-6 md:px-8">
        <div className="mb-6">
          <div className="flex flex-col border-b border-dark/[0.08] dark:border-light/[0.08] md:flex-row md:items-center">
            <h2 className="mb-6 md:mr-6 md:mb-0 font-medium leading-8 text-[28px]">
              Trending
            </h2>
            <TabSlider tabs={tabs} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <Filter />
          <div className="hidden flex-col min-[966px]:flex">
            <Table data={table} columns={columns} />
          </div>
          <div className="relative flex flex-col min-[966px]:hidden">
            <div className="overflow-visible w-full">
              <AutoSizer disableHeight>
                {({ width }) => (
                  <Grid
                    cellRenderer={cellRenderer}
                    columnCount={columnCount}
                    columnWidth={width / columnCount}
                    height={1100}
                    rowCount={6 / columnCount}
                    rowHeight={308}
                    width={width}
                    autoHeight
                  />
                )}
              </AutoSizer>
            </div>
          </div>
          <Link to="#" className="flex my-2">
            <Button className="w-full !text-dark !bg-dark/5 hover:!bg-dark/10 dark:hover:!bg-light/10 dark:!text-light dark:!bg-light/5 !py-6 !text-base ease-linear">
              <span className="inline-flex items-center h-full">
                <span className="mr-[6px]">View all collections</span>
                <IconArrowRight2 />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Trending
