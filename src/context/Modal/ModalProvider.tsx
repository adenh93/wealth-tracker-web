import { Component } from 'react'
import Modal from '../../components/ui/Modal'
import ModalContext, { ModalContextProps } from './ModalContext'

class ModalProvider extends Component<{}, ModalContextProps> {
  showModal = (title: string, content: JSX.Element) => {
    this.setState({
      title,
      content,
    })
  }

  hideModal = () =>
    this.setState({
      title: '',
      content: null,
    })

  state = {
    title: '',
    content: null,
    showModal: this.showModal,
    hideModal: this.hideModal,
  }

  render() {
    const { title, content, hideModal } = this.state

    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
        {content && (
          <Modal title={title} handleClose={hideModal}>
            {content}
          </Modal>
        )}
      </ModalContext.Provider>
    )
  }
}

export default ModalProvider
