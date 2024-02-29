import { IconEthereum, IconPolygon, IconStacks } from '@/assets/svg'
import { Button, Input } from '@/components/shared'
import { TabRail } from '..'
import { useState } from 'react'

const Filter = () => {
  const tabsTime = ['1H', '1D', '7D', '30D']
  const tabsBlockChain = [<IconStacks />, <IconEthereum />, <IconPolygon />]
  const [chain, setChain] = useState<'ETH' | 'MATIC' | null>(null)
  return (
    <div className="trending-filter mb-6">
      <div className="trending-periods">
        <TabRail tabs={tabsTime} height={40} className="lg-m:!w-[215px]" />
      </div>
      <div className="trending-floor">
        <div className="flex items-center flex-shrink max-w-full">
          <span className="whitespace-nowrap mr-4">
            <span className="font-normal leading-5 text-sm text-dak/85 dark:text-light/85">
              Floor price
            </span>
          </span>
          <div className="flex items-center flex-shrink flex-grow max-w-full min-w-0 basis-auto [&>*:not(:last-child)]:mr-2">
            <Input
              type="number"
              className="w-full"
              step="0.00000001"
              placeholder="Min"
            />
            <span className="text-dark/60 text-sm leading-5 font-normal">
              —
            </span>
            <Input
              step="0.00000001"
              type="number"
              placeholder="Max"
              className="w-full"
            />
            {chain && (
              <Button
                type="reverse"
                className="!bg-dark/[0.08] dark:!bg-light/[0.08] !text-dark/60 dark:!text-light/60"
              >
                {chain}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="trending-blockchain">
        <TabRail
          tabs={tabsBlockChain}
          height={40}
          className="lg-m:!w-[215px]"
          getTab={({ index }) =>
            setChain(index === 1 ? 'ETH' : index === 2 ? 'MATIC' : null)
          }
        />
      </div>
    </div>
  )
}

export default Filter
