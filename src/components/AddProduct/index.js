import { Text } from '../components/Text';

import { Container } from './styled';

export default function AddProduct ({ onPress }) {
  return (
    <Container onPress={onPress}>
      <Text size={40} color="#fffefeff">+</Text>
    </Container>
  );
}