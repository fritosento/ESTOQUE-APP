import { Text } from '../Text';

import { Container } from './styled';

export default function Buttom({ children, primary = true, onPress, disabled = false }) {
  return (
    <Container disabled={disabled} primary={primary} onPress={onPress}>
      <Text color={primary ? '#fff' : '#333'}>{children}</Text>
    </Container>
  );
}