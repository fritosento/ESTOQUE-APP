import { useState, useEffect } from "react";

import { ActivityIndicator, Image } from "react-native";

import { CenteredContainer, Container } from "./styled";
import Header from "../components/Header";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import NewModal from "../components/NewModal";
import EditModal from "../components/editProducts";

import productEmpity from "../assets/images/seminf.png";
import { Text } from '../components/Text';
import { products } from "../mocks/Products"

export default function Main() {
  const [prod, setProd] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewProductVisible, setIsNewProductVisible] = useState(false);
  const [isEditProductVisible, setIsEditProductVisible] = useState(false);
  const [BeingEdited, setBeingEdited] = useState(null);
  const [IdBeingDeleted, setIdBeingDeleted] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
    setProd(products);
  }, []); 

  function handleDeleteProduct(id) {
    setIdBeingDeleted(id);
    setIsDeleteModalVisible(true);
  }

  function handleEditProduct(products) {
    setBeingEdited(products);
    setIsEditProductVisible(true);
  }

  function handleChangeStatus(id) {
    alert(`Sem funcionalidade ${id}`);
  }

  function handleConfirmDeleteProduct() {
    alert(`Excluir a tarefa de id ${IdBeingDeleted}`);
  }

  function handleCreateProduct(products) {
    alert(`{ title: ${products.title}, description: ${products.quantidade} }`);
    setIsNewProductVisible(false);
  }

  function handleUpdateProduct(products) {
    alert(
      `{ id: ${products.id}, title: ${products.title}, description: ${products.quantidade} }`
    );
    setIsEditProductVisible(false);
  }
  return (
    <Container>
      <Header />

      {!isLoading && prod.length > 0 && (
        <Products
          products={prod}
          onChangeStatus={handleChangeStatus}
          onDelete={handleDeleteProduct}
          onEditproducts={handleEditProduct}
        />
      )}

      {!isLoading && prod.length === 0 && (
        <CenteredContainer>
          <Image
            source={productEmpity}
            style={{ width: 200, height: 200, marginBottom: 16 }}
          />
          <Text
            weight="600"
            size={20}
            opacity={0.8}
            style={{ marginBottom: 8 }}
          >
            Loja faliu
          </Text>
          <Text opacity={0.5}>Não há produtos no estoque</Text>
        </CenteredContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size="large" color="#666" />
        </CenteredContainer>
      )}

      <AddProduct onPress={() => setIsNewProductVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onConfirm={handleConfirmDeleteProduct}
        onClose={() => setIsDeleteModalVisible(false)}
      />

      <NewModal
        visible={isNewProductVisible}
        onClose={() => setIsNewProductVisible(false)}
        onSave={handleCreateProduct}
      />

      <EditModal
        visible={isEditProductVisible}
        onClose={() => setIsEditProductVisible(false)}
        onSave={handleUpdateProduct}
        product={BeingEdited}
      />
    </Container>
  );
}
