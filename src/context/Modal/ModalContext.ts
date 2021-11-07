import { createContext } from 'react'

export interface ModalContextProps {
  title: string
  content: JSX.Element | null
  showModal: (title: string, component: JSX.Element) => void
  hideModal: () => void
}

const ModalContext = createContext<ModalContextProps>({
  title: '',
  content: null,
  showModal: () => {},
  hideModal: () => {},
})

export default ModalContext
