import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
flex:1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : 0};
    padding-bottom: ${isAndroid ? "40px" : "0px"};
    
    background-color:#fff ;
`;