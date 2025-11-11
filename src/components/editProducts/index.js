import { Image, TouchableOpacity } from "react-native";

import Modal from "../Modal";

import { Text } from "../Text";

import { Header } from './styled';

import Form from "../Form";

import close from '../../assets/images/close.png';

export default function EditModal({ visible, onClose, onSave, product }) {
  return (
    <Modal visible={visible} onClose={onClose}>
      <Header>
        <Text weight="600">Adicionar Tarefa</Text>

        <TouchableOpacity onPress={onClose} style={{padding :6}}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <Form product={product} onSave={onSave} buttonLabel="Editar" />
    </Modal>
  );
}