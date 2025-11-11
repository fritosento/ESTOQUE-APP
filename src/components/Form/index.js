import { useState } from 'react';

import Buttom from '../Buttom';

import { Form, Input } from './styles';

export default function PForm({ onSave, buttomLabel, product }) {
  const [id] = useState(product?.id ?? '');
  const [title, setTitle] = useState(product?.title ?? '');
  const [quantidade, setQuantidade] = useState(product?.quantidade ?? '');

  return (
    <Form>
      <Input
        placeholder="Produto"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Buttom onPress={() => onSave({ id, title, quantidade })} disabled={title.length === 0 || quantidade.length === 0}>
        {buttomLabel}
      </Buttom>
    </Form>
  );
}