import Buttom from '../Buttom';

import { Form, Input } from './styles';

export default function PForm({ onSave }) {
  return (
    <Form>
      <Input
        placeholder="Título"
      />

      <Input
        placeholder="Descrição"
      />

      <Buttom onPress={onSave} disabled={false}>
        Cadastrar
      </Buttom>
    </Form>
  );
}