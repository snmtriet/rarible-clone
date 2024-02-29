import { cn } from '@/utils'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

type Props = {
  tabs: Tab[]
  getTab?: (tabActive: TabActive) => void
  className?: string
}

type Tab = string
type TabActive = { index: number; width?: number; transformValue?: number }

const TabSlider = (props: Props) => {
  const { tabs, className, getTab } = props
  const [tabActive, setTabActive] = useState<TabActive>({ index: 0 })

  const handleChangeTab = useCallback(
    (tab: TabActive) => {
      setTabActive(tab)
      getTab?.(tab)
    },
    [getTab],
  )

  return (
    <div className={cn('relative w-full h-[3em] text-[17px]', className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex flex-col m-0 w-0 min-w-fit min-h-full">
          <div className="flex w-auto relative flex-grow [&>*:not(:last-child)]:mr-4">
            <div
              className="absolute bottom-0 left-0 bg-dark dark:bg-light h-[3px] rounded-t-sm rounded-r-sm transition-all ease-in-out duration-300"
              style={{
                transform: `translateX(${tabActive.transformValue}px)`,
                width: tabActive.width,
              }}
            />
            {tabs.map((tab, index) => (
              <ButtonTab
                key={index}
                tab={tab}
                index={index}
                tabActive={tabActive}
                onChangeTab={handleChangeTab}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabSlider

type ButtonTabProps = {
  tab: Tab
  index: number
  tabActive: TabActive
  onChangeTab: (tab: TabActive) => void
}

const ButtonTab = memo((props: ButtonTabProps) => {
  const { tab, index, tabActive, onChangeTab } = props
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (index !== 0) return
    onChangeTab({
      index,
      width: buttonRef.current?.offsetWidth,
      transformValue: buttonRef.current?.offsetLeft,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, tab])

  const handleClick = useCallback(() => {
    onChangeTab({
      index,
      width: buttonRef.current?.offsetWidth,
      transformValue: buttonRef.current?.offsetLeft,
    })
  }, [index, onChangeTab])

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        'w-auto flex items-center justify-center text-dark/60 dark:text-light/60 relative pb-[2px]',
        index === tabActive.index && '!text-dark dark:!text-light',
      )}
    >
      <span className="whitespace-nowrap align-middle text-base">{tab}</span>
    </button>
  )
})
