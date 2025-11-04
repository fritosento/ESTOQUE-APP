import { useState } from "react";
import { Container } from "./styled";
import Header from "../components/Header";
import Products from "../components/Products";
import AddProduct from "../AddProduct";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import NewModal from "../components/NewModal";

import { products } from "../mocks/Products";

export default function Main() {
  
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewModalVisible, setIsNewModalVisible] = useState(false);

  function handleDeleteProduct(id) {
    alert(`Sem funcionalidade ${id}`);
  }

  function handleEditProduct(product) {
    alert(`Sem funcionalidade ${product.id}`);
  }

  function handleChangeStatus(id) {
    alert(`Sem funcionalidade ${id}`);
  }

  function handleConfirmDeleteProduct() {
    alert("Excluir a tarefa");
  }

  function handleCreateProduct(product) {
    alert(`{ title: ${product.title}, Em prateleita: ${product.quantidade} }`);
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
      <AddProduct onPress={() => setIsNewModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onConfirm={handleConfirmDeleteProduct}
        onClose={() => setIsDeleteModalVisible(false)}
      />

      <NewModal
        visible={isNewModalVisible}
        onClose={() => setIsNewModalVisible(false)}
        onSave={handleCreateProduct}
      />
    </Container>
  );
}
