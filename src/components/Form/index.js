import { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Buttom from '../Buttom';
import { Form, Input } from './styles';
import { Text } from '../Text';

export default function PForm({ onSave }) {
  const [productName, setProductName] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [quantBase, setQuantBase] = useState("");
  const [imageUri, setImageUri] = useState(null);

  async function handlePickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar as imagens negada!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  }

  function handleSave() {
    if (!productName || !quantidade || !quantBase || !imageUri) {
      alert("Preencha todos os campos e escolha uma imagem!");
      return;
    }

    onSave({
      title: productName,
      quantidade,
      quantbase: quantBase,
      produto: { uri: imageUri }, // igual ao formato do seu mock
    });
  }

  return (
    <Form>
      <Input
        placeholder="Produto"
        value={productName}
        onChangeText={setProductName}
      />

      <Input
        placeholder="Quantidade atual"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />

      <Input
        placeholder="Quantidade mínima"
        value={quantBase}
        onChangeText={setQuantBase}
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={handlePickImage}
        style={{
          backgroundColor: "#ddd",
          padding: 10,
          borderRadius: 8,
          alignItems: "center",
          marginVertical: 8,
        }}
      >
        <Text>{imageUri ? "Imagem selecionada ✅" : "Selecionar imagem 📷"}</Text>
      </TouchableOpacity>

      {imageUri && (
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: 120, height: 120, borderRadius: 8 }}
          />
        </View>
      )}

      <Buttom onPress={handleSave} disabled={false}>
        Adicionar
      </Buttom>
    </Form>
  );
}