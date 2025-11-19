import { useState } from 'react';
import { Text } from '../Text';
import Buttom from '../Buttom';
import {Image, TouchableOpacity} from 'react-native';
import { Form, Input } from './styles';
import { launchImageLibrary } from 'react-native-image-picker';

export default function PForm({ onSave, buttomLabel, product }) {
  const [id] = useState(product?.id ?? '');
  const [title, setTitle] = useState(product?.title ?? '');
  const [quantidade, setQuantidade] = useState(product?.quantidade ?? '');
  const [image, setImage] = useState(product?.image ?? null);
 
  async function handleSelectImage() {
   launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      (response) => {
        if (response.didCancel) return;

        if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri);
        }
      }
    );
  }
  return (
  <Form>
     <TouchableOpacity
        onPress={handleSelectImage}
        style={{
          width: "100%",
          height: 120,
          backgroundColor: '#eee',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
          />
        ) : (
          <Text>{image ? 'Alterar Embalagem' : 'Adcionar Embalagem'}</Text>
        )}
      </TouchableOpacity>

  
      <Input
        placeholder="Produto"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Buttom 
    
       onPress={() => onSave({ id, title, quantidade })} disabled={title.length === 0 || quantidade.length === 0}
       >
        Adcionar
        {buttomLabel}
      </Buttom>
    </Form>
  );}
