import { IconBag, IconCopy, IconLogout, IconNetwork } from '@/assets/svg'
import { useWeb3Modal, useWeb3ModalState } from '@web3modal/wagmi/react'
import { Link } from 'react-router-dom'
import { Button, Modal } from '../shared'
import ToggleTheme from './ToggleTheme'
import { useAccount, useDisconnect } from 'wagmi'
import { Avatar } from '@/components/ui'
import { useState } from 'react'
import { formatAddress } from '@/utils'

const Header = () => {
  const { open } = useWeb3Modal()
  const { disconnect } = useDisconnect()
  const { selectedNetworkId } = useWeb3ModalState()
  const [openModal, setOpenModal] = useState(false)
  const { address, isConnecting, isConnected } = useAccount()
  console.log({
    address,
    isConnecting,
    isConnected,
    selectedNetworkId,
  })

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const handleDisconnect = () => {
    disconnect()
    handleCloseModal()
  }

  return (
    <div className="container bg-light/85 dark:bg-dark/85 backdrop-blur-[20px] flex items-center justify-between py-4">
      <Link
        to="/"
        className="flex items-center gap-1 select-none cursor-pointer"
      >
        <div className="w-10 h-10 flex items-center justify-center">
          <img
            src="/img/logo/logo.png"
            alt="Logo Alienz Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden xs:block">
          <h4>Alienz Studio</h4>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        {address && isConnected ? (
          <Button type="ghost" onClick={handleOpenModal}>
            <Avatar shape="circle" src="/avatars/avatar-2.svg" />
          </Button>
        ) : (
          <Button onClick={() => open({ view: 'Connect' })}>
            Connect wallet
          </Button>
        )}

        <IconBag />
        <ToggleTheme />
      </div>
      {address && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          className="xs:!max-w-[360px]"
          noScroll
        >
          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center gap-2 px-3 pb-3">
              <Avatar
                shape="circle"
                src="/avatars/avatar-2.svg"
                size={70}
                className="shadow-lg border-[6px] border-dark/60"
              />
              <div className="flex flex-col text-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-medium">
                    {formatAddress(address as string)}
                  </span>
                  <Button type="ghost">
                    <IconCopy className="w-4 h-4 !text-dark/60 dark:!text-light/60" />
                  </Button>
                </div>
                <span className="text-lg !text-dark/60 dark:!text-light/60">
                  0.629 MATIC
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="!py-[18px] !px-[14px] !h-14 !bg-dark/5 dark:!bg-light/[0.02] text-lg !justify-start gap-2 hover:!bg-dark/10 hover:dark:!bg-light/10 cursor-default active:scale-100">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-dark/5 dark:bg-light/5">
                  <IconNetwork className="w-4 h-4 text-dark/80 dark:text-light/80" />
                </span>
                <span className="text-dark dark:text-light/85">
                  Polygon Mumbai
                </span>
              </Button>
              <Button
                className="!py-[18px] !px-[14px] !h-14 !bg-dark/5 dark:!bg-light/[0.02] text-lg !justify-start gap-2 hover:!bg-dark/10 hover:dark:!bg-light/10"
                onClick={handleDisconnect}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-dark/5 dark:bg-light/5">
                  <IconLogout className="w-4 h-4 text-dark/80 dark:text-light/80" />
                </span>
                <span className="text-dark dark:text-light/85">Disconnect</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Header
