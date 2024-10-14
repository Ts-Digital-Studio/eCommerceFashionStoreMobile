import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { Dimensions } from 'react-native'

// const { width, height } = Dimensions.get('window');

// const isSmallDevice = width < 390; 

export const Conteiner = styled.View`
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background-color: ${theme.colors.primary};
`;
