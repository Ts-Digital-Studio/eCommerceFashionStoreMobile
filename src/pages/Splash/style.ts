import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Conteiner = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`;  

export const Img = styled.Image`
    width: 150px;
`
