import { Container } from "./styled";
import Header from "../components/Header";
import Products from "../components/Products";
import AddProduct from "../AddProduct"

import { products } from "../mocks/Products";

export default function Main() {
  function handleDeleteProduct(id) {
    alert(`Sem funcionalidade ${id}`);
  }

  function handleEditProduct(product) {
    alert(`Sem funcionalidade ${product.id}`);
  }

  function handleChangeStatus(id) {
    alert(`Sem funcionalidade ${id}`);
  }

  return (
    <Container>
      <Header />
      <Products
        products={products}
        onChangeStatus={handleChangeStatus}
        onDelete={handleDeleteProduct}
        onEditproducts={handleEditProduct}
      />
      <AddProduct/>
    </Container>
  );
}
