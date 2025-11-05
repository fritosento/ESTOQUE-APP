import Buttom from '../Buttom';

import { Form, Input } from './styles';

export default function PForm({ onSave }) {
  return (
    <Form>
      <Input
        placeholder="Produto"
      />

      <Input
        placeholder="Quantidade atual"
      />
      <Input placeholder="Quantidade miníma para o estoque" />

      <Buttom onPress={onSave} disabled={false}>
        Adcionar
      </Buttom>
    </Form>
  );
}