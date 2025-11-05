import { Image, TouchableOpacity } from "react-native";

import Modal from "../Modal";

import { Text } from "../Text";

import { Header } from './styles';

import Form from "../Form";

import close from '../../assets/images/close.png';

export default function NewModal({ visible, onClose, onSave }) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Header>
        <Text weight="600">Adicionar Tarefa</Text>

        <TouchableOpacity onPress={onClose} padding="6px">
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <Form onSave={onSave} />
    </Modal>
  );
}