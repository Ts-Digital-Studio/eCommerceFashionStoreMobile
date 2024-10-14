import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import theme from '../../global/styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const isSmallDevice = width < 390; 

export const Conteiner = styled.View`
    width: 92%;
    height: 5.5%;
    margin-left: ${RFPercentage(0.5)}%;
    margin-top: 4.0%;
    border-radius: 10px;
    padding: ${RFValue(5)}px;
    background-color: red;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.Border};
    position: relative;
`;

export const Icon = styled(Feather)`
    font-size: 25px;
    margin-left: ${RFPercentage(0.2)}%;
`;

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: theme.colors.secundary,
})`
    flex: 1;
    padding-left:  3%;
    /* background-color: red; */
    padding-right: 3%;
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
    margin-left: ${RFValue(5)}px;
`

export const Text = styled.Text`
    font-size: 18px;
    color: ${theme.colors.Light};
    margin-left: ${RFValue(5)}px;
`

export const Text2 = styled.Text`
    font-size: 18px;
    color: #fff;
    margin-left: ${RFValue(5)}px;
`

export const ModalContainer = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const OptionList = styled.View`
    background-color: ${theme.colors.Border};
    width: 40%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
`;

export const OptionItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7    
})`
    padding: 10px;
    margin-bottom: 2px;
    border-radius: 10px;
    border-bottom-color: ${theme.colors.primary};
`;
