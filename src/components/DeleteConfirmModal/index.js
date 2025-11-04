import Modal from "../Modal";

import { Text } from '../Text';

import Buttom from "../Buttom";

import { ActionsContainer } from './styles';

export default function DeleteConfirmModal({ onClose, onConfirm, visible }) {
  return (
    <Modal
      visible={visible}
      onClose={onClose}
    >
      <Text
        size={18}
        weight="600"
      >
        Tem certeza que deseja remover a tarefa?
      </Text>
      <Text
        opacity={0.5}
        style={{ marginTop: 6 }}
      >
        Essa ação não podera ser desfeita
      </Text>

      <ActionsContainer>
        <Buttom primary={false} onPress={onClose}>Cancelar</Buttom>

        <Buttom onPress={onConfirm}>Confirmar</Buttom>
      </ActionsContainer>
    </Modal>
  );
}