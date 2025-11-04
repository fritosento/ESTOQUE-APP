import { Modal } from 'react-native';


import { ModalBody, Overlay } from './styled';

export default function PModal({ children, visible, onClose }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      visible={visible}
      animationType='fade'
      onRequestClose={onClose}
    >
      <Overlay>
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}