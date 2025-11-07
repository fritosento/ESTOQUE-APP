import styled from "styled-components/native";
export const Product = styled.View`
  margin: 20px auto 12px;
  border-width: 2px;
  border-radius: 12px;
  border-color: #b9aeae72;
  padding: 16px;
  width: 320px;
  background-color: #fff;
  `;
export const ProductHeader = styled.View`
margin-bottom:8px;
   `;
   export const ProductEmbalagem = styled.View`
   margin : 8px 0px 20px;
   align-items:center;
   justify-content:center;`
export const ProductPrateleira = styled.View`

`;
export const ProductFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  
`;
export const ProductIcon = styled.Image`
  width: 20px;
  height: 20px;
  resize-mode: contain;
 
`;
export const ProductStatus = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;
export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
export const Divisor = styled.View`
 height: 2px;
  background-color: #cccccc;
  margin-vertical: 8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);`;