import { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import useClickOutside from '@/hooks/useClickOutside'
import { IoClose } from 'react-icons/io5'
import { cn } from '@/utils'
import classNames from 'classnames'

type Props = {
  open: boolean
  className?: string
  contentClassName?: string
  children: React.ReactNode
  noScroll?: boolean
  onClose: () => void
}

const Modal = (props: Props) => {
  const { className, children, open, noScroll, onClose, contentClassName } =
    props
  const nodeRef = useRef(null)
  const backdropRef = useRef(null)

  const modalRef = useClickOutside(() => onClose?.())

  useEffect(() => {
    if (open && noScroll) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
      document.body.removeAttribute('style')
    }
  }, [open, noScroll])

  return ReactDOM.createPortal(
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={400}
        nodeRef={nodeRef}
        classNames="modal"
      >
        <div ref={nodeRef} className="modal">
          <div className={cn('modal-dialog modal-dialog-centered', className)}>
            <div
              className={classNames(
                'modal-content bg-light dark:bg-dark text-dark dark:text-light',
                contentClassName,
              )}
              ref={modalRef}
            >
              <div className="modal-close" onClick={onClose}>
                <IoClose />
              </div>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={open}
        timeout={400}
        nodeRef={backdropRef}
        classNames="modal-backdrop"
      >
        <div ref={backdropRef} className="modal-backdrop" />
      </CSSTransition>
    </>,
    document.body,
  )
}

export default Modal
