import { Container } from "./styled";
import { Text } from '../Text'
export default function Header(){
    return(
     <Container>

     <Text color="orange" size={24} >
     Balcão- 
     
     <Text size="20">ao</Text>
     <Text color='blue' size={24}>
     -App
     </Text>
     </Text>
     
     <Text size="14" opacity={0.5}>Transformação Digital em Mercearias Locais</Text>


     </Container>
    );
}