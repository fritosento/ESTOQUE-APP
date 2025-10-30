import { Container } from "./styled";
import Header from "../components/Header";
import Products from "../components/Products";

import { products } from "../mocks/Products";

export default function Main() {
  return (
    <Container>
      <Header />
      <Products products={products} />
    </Container>
  );
}
