import { Container } from "./styled";
import { Text } from '../Text'
export default function Header(){
    return(
     <Container>

     <Text size={24} >
     Estoque<Text color='blue' size={24}>
     App
     </Text>
     </Text>
     
     <Text opacity={0.5}>Visualize os produtos a venda!</Text>


     </Container>
    );
}