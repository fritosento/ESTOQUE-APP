import { FlatList, TouchableOpacity, Image } from "react-native";
import { Text } from "react-native";
import {
  Product,
  ProductHeader,
  ProductEmbalagem,
  ProductFooter,
  ProductPrateleira,
  ProductIcon,
  ProductStatus,
  ProductActions,
  Divisor,
} from "./styled";

import remove from "../../assets/images/delete.png";
import done from "../../assets/images/done.png";
import edit from "../../assets/images/edit.png";
import alert from "../../assets/images/alert.png";

export default function Products({
  products,
  onDelete,
  onEditproducts,
  onChangeStatus,
}) {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item: product }) => (
        <Product>
          <ProductHeader>
            <Text>{product.title}</Text>
          </ProductHeader>
          <Divisor></Divisor>
          <ProductEmbalagem>
            <Image
              source={product.produto}
              style={{
                width: "100%",
                height: 150,
                resizeMode: "contain",
              }}
            />
          </ProductEmbalagem>
          <ProductPrateleira>
            <Text>Disponível: {product.quantidade}</Text>
          </ProductPrateleira>
          <ProductFooter>
            <ProductStatus onPress={() => onChangeStatus(product.id)}>
              <ProductIcon source={product.quantidade >= product.quantbase  ? done : alert} />
              <Text
                style={{
                  color:
                    product.quantidade >= product.quantbase
                      ? "#23a619ff"
                      : "#ebdb2bff",
                }}
              >
                {product.quantidade >= product.quantbase ? "Quantidade padrão" : "Reabastecer"}
              </Text>
            </ProductStatus>
            <ProductActions>
              <TouchableOpacity onPress={() => onEditproducts(product)}>
                <ProductIcon source={edit} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onDelete(product.id)}>
                <ProductIcon source={remove} />
              </TouchableOpacity>
            </ProductActions>
          </ProductFooter>
        </Product>
      )}
    />
  );
}
