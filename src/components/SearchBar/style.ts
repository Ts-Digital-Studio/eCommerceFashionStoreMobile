import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import theme from '../../global/styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const Conteiner = styled.View`
    width: 92%;
    height: 5.5%;
    margin-left: 4.1%;
    margin-top: 4.0%;
    border-radius: 10px;
    padding: 6px;
    background-color: red;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.Border};
`;

export const Icon = styled(Feather)`
    font-size: 25px;
    margin-left: 1.3%;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: theme.colors.secundary
})`
    margin-left: 2.8%;
    /* background-color: red; */
    padding-right: 90px ;
    color: ${theme.colors.secundary};
    font-size: 19px;
`;

export const DivTypes = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const IconArrow = styled(MaterialIcons)`
    color: ${theme.colors.Light};
    font-size: 25px;
    margin-left: 5px;
`

export const Text = styled.Text`
    font-size: 18px;
    color: ${theme.colors.Light};
    margin-left: 10px;
`
